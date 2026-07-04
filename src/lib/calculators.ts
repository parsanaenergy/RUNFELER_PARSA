/**
 * Parsa Energy — Engineering calculator engines.
 * Pure, typed functions implementing standard solar/storage electrical formulas.
 * Each calculator exposes a lead-gen hook (what to ask the visitor for next).
 */

/* ----------------------------- Types ----------------------------- */
export interface CalcResult<T> {
  ok: boolean;
  value?: T;
  inputs: Record<string, number>;
  breakdown: { label: string; value: string }[];
  leadHook: string;
  warnings?: string[];
}

/* 1. Solar System Size ------------------------------------------------ */
export function solarSystemSize(input: {
  dailyKwh: number;
  psh: number;       // peak sun hours
  pr?: number;       // performance ratio
}): CalcResult<{ kwp: number; annualKwh: number; area: number }> {
  const { dailyKwh, psh } = input;
  const pr = input.pr ?? 0.78;
  if (!dailyKwh || !psh) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const kwp = dailyKwh / (psh * pr);
  const annualKwh = kwp * psh * 365 * pr;
  const area = kwp * 8; // ~8 m² per kWp
  return {
    ok: true,
    value: { kwp, annualKwh, area },
    inputs: { dailyKwh, psh, pr },
    breakdown: [
      { label: "Required array size", value: `${kwp.toFixed(2)} kWp` },
      { label: "Estimated annual yield", value: `${Math.round(annualKwh).toLocaleString()} kWh/yr` },
      { label: "Roof area needed", value: `${Math.round(area)} m²` },
      { label: "Performance ratio", value: `${(pr * 100).toFixed(0)}%` },
    ],
    leadHook: "Want a firm quote, BoM and shading study for this size?",
  };
}

/* 2. Battery Capacity ------------------------------------------------- */
export function batteryCapacity(input: {
  dailyKwh: number;
  autonomyDays: number;
  dod?: number;          // depth of discharge
  inverterEff?: number;
  tempDerate?: number;
  voltage?: number;      // system voltage
}): CalcResult<{ kwh: number; ah: number }> {
  const { dailyKwh, autonomyDays } = input;
  const dod = input.dod ?? 0.8;
  const inverterEff = input.inverterEff ?? 0.95;
  const tempDerate = input.tempDerate ?? 0.9;
  const voltage = input.voltage ?? 48;
  if (!dailyKwh || !autonomyDays) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const kwh = (dailyKwh * autonomyDays) / (dod * inverterEff * tempDerate);
  const ah = (kwh * 1000) / voltage;
  return {
    ok: true,
    value: { kwh, ah },
    inputs: { dailyKwh, autonomyDays, dod, inverterEff, tempDerate, voltage },
    breakdown: [
      { label: "Usable capacity needed", value: `${kwh.toFixed(1)} kWh` },
      { label: "Bank size at system voltage", value: `${Math.round(ah)} Ah @ ${voltage}V` },
      { label: "DoD", value: `${(dod * 100).toFixed(0)}%` },
      { label: "Autonomy", value: `${autonomyDays} day(s)` },
    ],
    leadHook: "Get a sized battery BoM with BMS and cabinet options.",
  };
}

/* 3. Cable Size ------------------------------------------------------- */
export function cableSize(input: {
  lengthM: number;      // one-way length
  currentA: number;
  targetDropV?: number; // target voltage drop in volts
  voltage?: number;     // system voltage for % calc
  phases?: 1 | 3;
}): CalcResult<{ area: number; dropV: number; dropPct: number }> {
  const { lengthM, currentA } = input;
  const targetDropV = input.targetDropV ?? 0;
  const voltage = input.voltage ?? 48;
  const phases = input.phases ?? 1;
  // resistivity of copper at 70°C, Ω·mm²/m
  const rho = 0.0225;
  if (!lengthM || !currentA) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  // Required area for the target drop (DC uses factor 2 for out+return; 3-phase uses 1 for balanced)
  const loopFactor = phases === 3 ? 1 : 2;
  let area: number;
  if (targetDropV > 0) {
    area = (loopFactor * lengthM * currentA * rho) / targetDropV;
  } else {
    // Default to 3% drop target
    const td = voltage * 0.03;
    area = (loopFactor * lengthM * currentA * rho) / td;
  }
  // Round up to a standard size
  const standards = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240];
  area = standards.find((s) => s >= area) ?? area;
  const dropV = (loopFactor * lengthM * currentA * rho) / area;
  const dropPct = (dropV / voltage) * 100;
  const warnings: string[] = [];
  if (dropPct > 3) warnings.push("Voltage drop exceeds 3% — consider a larger cable or shorter run.");
  return {
    ok: true,
    value: { area, dropV, dropPct },
    inputs: { lengthM, currentA, voltage, targetDropV },
    breakdown: [
      { label: "Recommended cross-section", value: `${area} mm²` },
      { label: "Voltage drop", value: `${dropV.toFixed(2)} V (${dropPct.toFixed(1)}%)` },
      { label: "Conductor", value: phases === 3 ? "Copper, 3-phase" : "Copper, DC loop" },
    ],
    leadHook: "We supply TÜV/EN 50618 solar cable cut to length — request a quote.",
    warnings,
  };
}

/* 4. Voltage Drop ----------------------------------------------------- */
export function voltageDrop(input: {
  lengthM: number;
  currentA: number;
  areaMm2: number;
  voltage: number;
  phases?: 1 | 3;
}): CalcResult<{ dropV: number; dropPct: number; atLoad: number }> {
  const { lengthM, currentA, areaMm2, voltage } = input;
  const phases = input.phases ?? 1;
  const rho = 0.0225;
  const loopFactor = phases === 3 ? 1 : 2;
  if (!lengthM || !currentA || !areaMm2) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const dropV = (loopFactor * lengthM * currentA * rho) / areaMm2;
  const dropPct = (dropV / voltage) * 100;
  const warnings: string[] = [];
  if (dropPct > 3) warnings.push("Exceeds 3% recommended limit — enlarge cable or shorten run.");
  return {
    ok: true,
    value: { dropV, dropPct, atLoad: voltage - dropV },
    inputs: { lengthM, currentA, areaMm2, voltage },
    breakdown: [
      { label: "Voltage drop", value: `${dropV.toFixed(2)} V` },
      { label: "Drop percentage", value: `${dropPct.toFixed(2)}%` },
      { label: "Voltage at load", value: `${(voltage - dropV).toFixed(2)} V` },
    ],
    leadHook: "Verify your design with our cable & protection BoM service.",
    warnings,
  };
}

/* 5. Solar Panel Tilt ------------------------------------------------- */
export function solarTilt(input: {
  latitude: number;
}): CalcResult<{ annualTilt: number; summerTilt: number; winterTilt: number }> {
  const { latitude } = input;
  if (isNaN(latitude)) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const annualTilt = Math.round(latitude);
  const summerTilt = Math.max(10, Math.round(latitude - 15));
  const winterTilt = Math.round(latitude + 15);
  const hemisphere = latitude >= 0 ? "Northern (face panels South)" : "Southern (face panels North)";
  return {
    ok: true,
    value: { annualTilt, summerTilt, winterTilt },
    inputs: { latitude },
    breakdown: [
      { label: "Optimal annual tilt", value: `${annualTilt}°` },
      { label: "Summer tilt", value: `${summerTilt}°` },
      { label: "Winter tilt", value: `${winterTilt}°` },
      { label: "Orientation", value: hemisphere },
    ],
    leadHook: "Get a PVsyst yield report with optimized tilt & shading analysis.",
  };
}

/* 6. Energy Consumption ---------------------------------------------- */
export interface LoadItem { name: string; watts: number; qty: number; hours: number; }
export function energyConsumption(items: LoadItem[]): CalcResult<{ dailyKwh: number; monthlyKwh: number; peakW: number }> {
  const valid = items.filter((i) => i.watts > 0 && i.hours > 0);
  if (!valid.length) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const dailyKwh = valid.reduce((s, i) => s + (i.watts * i.qty * i.hours) / 1000, 0);
  const peakW = valid.reduce((s, i) => s + i.watts * i.qty, 0);
  return {
    ok: true,
    value: { dailyKwh, monthlyKwh: dailyKwh * 30, peakW },
    inputs: {},
    breakdown: [
      { label: "Daily consumption", value: `${dailyKwh.toFixed(2)} kWh/day` },
      { label: "Monthly consumption", value: `${(dailyKwh * 30).toFixed(0)} kWh/mo` },
      { label: "Connected peak load", value: `${peakW.toLocaleString()} W` },
    ],
    leadHook: "Feed this into the System Size & Battery calculators, then request a quote.",
  };
}

/* 7. Backup Time ----------------------------------------------------- */
export function backupTime(input: {
  batteryAh: number;
  voltage: number;
  dod?: number;
  inverterEff?: number;
  loadW: number;
}): CalcResult<{ hours: number }> {
  const { batteryAh, voltage, loadW } = input;
  const dod = input.dod ?? 0.8;
  const inverterEff = input.inverterEff ?? 0.95;
  if (!batteryAh || !voltage || !loadW) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const usableWh = batteryAh * voltage * dod * inverterEff;
  const hours = usableWh / loadW;
  return {
    ok: true,
    value: { hours },
    inputs: { batteryAh, voltage, loadW, dod, inverterEff },
    breakdown: [
      { label: "Usable energy", value: `${(usableWh / 1000).toFixed(2)} kWh` },
      { label: "Backup time", value: `${hours.toFixed(1)} hours` },
      { label: "Load", value: `${loadW} W` },
    ],
    leadHook: "Need more backup? Size a bigger bank or add PV with our tools.",
  };
}

/* 8. ROI / Payback --------------------------------------------------- */
export function roiCalculator(input: {
  systemCost: number;
  systemKwp: number;
  psh: number;
  pr?: number;
  tariff: number;       // $/kWh electricity price
  dieselLiters?: number; // diesel displaced per year
  dieselPrice?: number;  // $/liter
  omCost?: number;       // annual O&M cost
}): CalcResult<{ annualSavings: number; paybackYears: number; annualYield: number; lifetimeSavings: number }> {
  const { systemCost, systemKwp, psh, tariff } = input;
  const pr = input.pr ?? 0.78;
  const omCost = input.omCost ?? systemKwp * 30; // ~$30/kWp/yr
  if (!systemCost || !systemKwp || !psh || !tariff) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const annualYield = systemKwp * psh * 365 * pr;
  const electricSavings = annualYield * tariff;
  const dieselSavings = (input.dieselLiters ?? 0) * (input.dieselPrice ?? 0);
  const annualSavings = electricSavings + dieselSavings - omCost;
  const paybackYears = annualSavings > 0 ? systemCost / annualSavings : 0;
  const lifetimeSavings = annualSavings * 25;
  return {
    ok: true,
    value: { annualSavings, paybackYears, annualYield, lifetimeSavings },
    inputs: { systemCost, systemKwp, psh, tariff },
    breakdown: [
      { label: "Annual yield", value: `${Math.round(annualYield).toLocaleString()} kWh/yr` },
      { label: "Annual electric savings", value: `$${Math.round(electricSavings).toLocaleString()}` },
      { label: "Diesel savings (if any)", value: `$${Math.round(dieselSavings).toLocaleString()}` },
      { label: "Net annual savings", value: `$${Math.round(annualSavings).toLocaleString()}` },
      { label: "Simple payback", value: `${paybackYears.toFixed(1)} years` },
      { label: "25-yr lifetime savings", value: `$${Math.round(lifetimeSavings).toLocaleString()}` },
    ],
    leadHook: "Turn this ROI into a bankable proposal — request a feasibility study.",
  };
}

/* 9. Microgrid Cost Estimator ---------------------------------------- */
export function microgridCost(input: {
  kwp: number;
  batteryKwh: number;
  costPerKwp?: number;     // $/kWp EPC
  costPerKwh?: number;     // $/kWh storage
  isOffgrid?: boolean;
}): CalcResult<{ total: number; pvCost: number; batteryCost: number; annualYield: number }> {
  const { kwp, batteryKwh } = input;
  const costPerKwp = input.costPerKwp ?? (input.isOffgrid ? 900 : 750);
  const costPerKwh = input.costPerKwh ?? 350;
  const psh = 5.0;
  if (!kwp) return { ok: false, inputs: {}, breakdown: [], leadHook: "" };
  const pvCost = kwp * costPerKwp;
  const batteryCost = (batteryKwh ?? 0) * costPerKwh;
  const total = pvCost + batteryCost;
  const annualYield = kwp * psh * 365 * 0.78;
  return {
    ok: true,
    value: { total, pvCost, batteryCost, annualYield },
    inputs: { kwp, batteryKwh, costPerKwp, costPerKwh },
    breakdown: [
      { label: "PV system cost", value: `$${Math.round(pvCost).toLocaleString()}` },
      { label: "Battery storage cost", value: `$${Math.round(batteryCost).toLocaleString()}` },
      { label: "Estimated total (EPC)", value: `$${Math.round(total).toLocaleString()}` },
      { label: "Cost per kWp (blended)", value: batteryKwh ? `$${Math.round(total / kwp).toLocaleString()}/kWp` : `$${costPerKwp}/kWp` },
      { label: "Estimated annual yield", value: `${Math.round(annualYield).toLocaleString()} kWh/yr` },
    ],
    leadHook: "Get a detailed quotation with brand-level BoM and timeline.",
  };
}

/* Calculator registry ------------------------------------------------- */
export interface CalcMeta {
  slug: string;
  name: string;
  description: string;
  leadLabel: string;
}
export const calculators: CalcMeta[] = [
  { slug: "system-size", name: "Solar System Size", description: "Size your PV array from daily energy & sun hours.", leadLabel: "Request quote" },
  { slug: "battery-capacity", name: "Battery Capacity", description: "Size a battery bank for your autonomy.", leadLabel: "Size my battery" },
  { slug: "cable-size", name: "Cable Size", description: "Pick the right DC/AC cable cross-section.", leadLabel: "Cable quote" },
  { slug: "voltage-drop", name: "Voltage Drop", description: "Check drop across a cable run.", leadLabel: "Design check" },
  { slug: "solar-tilt", name: "Solar Tilt & Angle", description: "Optimal tilt for your latitude.", leadLabel: "Yield study" },
  { slug: "energy-consumption", name: "Energy Consumption", description: "Add up your daily load profile.", leadLabel: "Use in sizing" },
  { slug: "backup-time", name: "Backup Time", description: "How long will your battery last?", leadLabel: "Boost backup" },
  { slug: "roi", name: "ROI & Payback", description: "Payback & lifetime savings.", leadLabel: "Feasibility study" },
  { slug: "microgrid-cost", name: "Microgrid Cost Estimator", description: "Budget estimate for PV + storage.", leadLabel: "Get quotation" },
];
