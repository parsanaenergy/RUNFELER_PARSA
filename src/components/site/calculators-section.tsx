"use client";

import * as React from "react";
import { Calculator, Plus, Trash2, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import { AnswerCapsule } from "./answer-capsule";
import {
  solarSystemSize, batteryCapacity, cableSize, voltageDrop, solarTilt,
  energyConsumption, backupTime, roiCalculator, microgridCost,
  calculators, type LoadItem,
} from "@/lib/calculators";
import { useLang } from "@/components/lang-provider";
import { cn, faNum } from "@/lib/utils";

/* ---------- Generic field primitives ---------- */
function NumberField({
  label, value, onChange, unit, min, step, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  unit?: string; min?: number; step?: number; placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
      <div className="relative">
        <Input
          type="number"
          inputMode="decimal"
          value={value}
          min={min}
          step={step ?? "any"}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cn("h-10", unit && "pe-14")}
        />
        {unit && (
          <span className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultCard({
  breakdown, leadHook, leadLabel, warnings, resultsLabel,
}: {
  breakdown: { label: string; value: string }[];
  leadHook: string; leadLabel: string; warnings?: string[]; resultsLabel: string;
}) {
  const { lang } = useLang();
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-primary" />
        <h4 className="font-display text-sm font-semibold text-foreground">{resultsLabel}</h4>
      </div>
      <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {breakdown.map((b) => (
          <div key={b.label} className="flex items-center justify-between gap-2 rounded-lg bg-background/60 px-3 py-2">
            <dt className="text-xs text-muted-foreground">{b.label}</dt>
            <dd className="text-sm font-semibold text-foreground tabular-nums" dir="ltr">{fmt(b.value)}</dd>
          </div>
        ))}
      </dl>
      {warnings && warnings.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {warnings.map((w, i) => (
            <li key={i} className="flex items-start gap-2 rounded-md bg-amber/10 px-3 py-2 text-xs text-amber-foreground dark:text-amber">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {w}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-col gap-2 border-t border-primary/15 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">{leadHook}</p>
        <Button size="sm" asChild className="shrink-0 shadow-solar">
          <a href="#contact">{leadLabel} <ArrowRight className="ms-1 h-3.5 w-3.5 rtl:rotate-180" /></a>
        </Button>
      </div>
    </div>
  );
}

const num = (v: string, d = 0) => (v === "" || isNaN(Number(v)) ? d : Number(v));

/* ---------- Individual calculators ---------- */
function SystemSizeCalc() {
  const { t } = useLang();
  const [daily, setDaily] = React.useState("20");
  const [psh, setPsh] = React.useState("5");
  const [pr, setPr] = React.useState("0.78");
  const r = solarSystemSize({ dailyKwh: num(daily), psh: num(psh), pr: num(pr, 0.78) });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <NumberField label={t("calcDailyEnergy")} value={daily} onChange={setDaily} unit="kWh/day" placeholder="20" />
        <NumberField label={t("calcPeakSunHours")} value={psh} onChange={setPsh} unit="hrs" placeholder="5.0" />
        <NumberField label={t("calcPerfRatio")} value={pr} onChange={setPr} unit="0–1" step="0.01" placeholder="0.78" />
        <p className="col-span-full text-xs text-muted-foreground">
          {t("brandName")}: مشهد ~۵.۰ PSH | Mashhad ~5.0 PSH
        </p>
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("requestQuote")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function BatteryCalc() {
  const { t } = useLang();
  const [daily, setDaily] = React.useState("5");
  const [autonomy, setAutonomy] = React.useState("2");
  const [dod, setDod] = React.useState("0.8");
  const [voltage, setVoltage] = React.useState("48");
  const r = batteryCapacity({ dailyKwh: num(daily), autonomyDays: num(autonomy), dod: num(dod, 0.8), voltage: num(voltage, 48) });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NumberField label={t("calcDailyEnergy")} value={daily} onChange={setDaily} unit="kWh" />
        <NumberField label={t("calcAutonomy")} value={autonomy} onChange={setAutonomy} unit={t("calcAutonomy")} />
        <NumberField label={t("calcDod")} value={dod} onChange={setDod} unit="0–1" step="0.05" />
        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">{t("calcVoltage")}</Label>
          <Select value={voltage} onValueChange={setVoltage}>
            <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 V</SelectItem>
              <SelectItem value="24">24 V</SelectItem>
              <SelectItem value="48">48 V</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("calcBattery")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function CableSizeCalc() {
  const { t } = useLang();
  const [length, setLength] = React.useState("20");
  const [current, setCurrent] = React.useState("10");
  const [voltage, setVoltage] = React.useState("48");
  const [target, setTarget] = React.useState("");
  const r = cableSize({ lengthM: num(length), currentA: num(current), voltage: num(voltage, 48), targetDropV: num(target, 0) });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NumberField label={t("calcLength")} value={length} onChange={setLength} unit="m" />
        <NumberField label={t("calcCurrent")} value={current} onChange={setCurrent} unit="A" />
        <NumberField label={t("calcVoltage")} value={voltage} onChange={setVoltage} unit="V" />
        <NumberField label={t("calcTargetDrop")} value={target} onChange={setTarget} unit="V" placeholder="auto 3%" />
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("requestQuote")} warnings={r.warnings} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function VoltageDropCalc() {
  const { t } = useLang();
  const [length, setLength] = React.useState("15");
  const [current, setCurrent] = React.useState("12");
  const [area, setArea] = React.useState("6");
  const [voltage, setVoltage] = React.useState("48");
  const r = voltageDrop({ lengthM: num(length), currentA: num(current), areaMm2: num(area), voltage: num(voltage, 48) });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NumberField label={t("calcLength")} value={length} onChange={setLength} unit="m" />
        <NumberField label={t("calcCurrent")} value={current} onChange={setCurrent} unit="A" />
        <NumberField label={t("calcArea")} value={area} onChange={setArea} unit="mm²" />
        <NumberField label={t("calcVoltage")} value={voltage} onChange={setVoltage} unit="V" />
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("requestQuote")} warnings={r.warnings} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function SolarTiltCalc() {
  const { t } = useLang();
  const [lat, setLat] = React.useState("36.3");
  const r = solarTilt({ latitude: num(lat, 36.3) });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3">
        <NumberField label={t("calcLatitude")} value={lat} onChange={setLat} unit="°" step="0.1" placeholder="36.3" />
        <p className="text-xs text-muted-foreground">مشهد ~36.3°N | Mashhad ~36.3°N</p>
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("requestQuote")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function BackupTimeCalc() {
  const { t } = useLang();
  const [ah, setAh] = React.useState("200");
  const [voltage, setVoltage] = React.useState("48");
  const [load, setLoad] = React.useState("500");
  const r = backupTime({ batteryAh: num(ah), voltage: num(voltage, 48), loadW: num(load) });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <NumberField label={t("calcBatteryAh")} value={ah} onChange={setAh} unit="Ah" />
        <NumberField label={t("calcVoltage")} value={voltage} onChange={setVoltage} unit="V" />
        <NumberField label={t("calcLoad")} value={load} onChange={setLoad} unit="W" />
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("calcBackup")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function ROICalc() {
  const { t } = useLang();
  const [cost, setCost] = React.useState("30000");
  const [kwp, setKwp] = React.useState("10");
  const [psh, setPsh] = React.useState("5");
  const [tariff, setTariff] = React.useState("0.15");
  const [diesel, setDiesel] = React.useState("");
  const [dieselPrice, setDieselPrice] = React.useState("");
  const r = roiCalculator({
    systemCost: num(cost), systemKwp: num(kwp), psh: num(psh, 5), tariff: num(tariff, 0.15),
    dieselLiters: num(diesel, 0), dieselPrice: num(dieselPrice, 0),
  });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NumberField label={t("calcSystemCost")} value={cost} onChange={setCost} unit="USD" />
        <NumberField label={t("calcSystemKwp")} value={kwp} onChange={setKwp} unit="kWp" />
        <NumberField label={t("calcPeakSunHours")} value={psh} onChange={setPsh} unit="hrs" />
        <NumberField label={t("calcTariff")} value={tariff} onChange={setTariff} unit="$/kWh" step="0.01" />
        <NumberField label={t("calcDiesel")} value={diesel} onChange={setDiesel} unit="L" />
        <NumberField label={t("calcDieselPrice")} value={dieselPrice} onChange={setDieselPrice} unit="$/L" step="0.01" />
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("requestQuote")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function MicrogridCostCalc() {
  const { t } = useLang();
  const [kwp, setKwp] = React.useState("50");
  const [batt, setBatt] = React.useState("100");
  const [offgrid, setOffgrid] = React.useState("hybrid");
  const r = microgridCost({ kwp: num(kwp), batteryKwh: num(batt), isOffgrid: offgrid === "offgrid" });
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NumberField label={t("calcSystemKwp")} value={kwp} onChange={setKwp} unit="kWp" />
        <NumberField label={t("calcBatteryKwh")} value={batt} onChange={setBatt} unit="kWh" />
        <div className="space-y-1.5">
          <Label className="text-xs font-medium text-muted-foreground">{t("calcSystemType")}</Label>
          <Select value={offgrid} onValueChange={setOffgrid}>
            <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="hybrid">{t("calcHybrid")}</SelectItem>
              <SelectItem value="offgrid">{t("calcOffgrid")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("requestQuote")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

function EnergyConsumptionCalc() {
  const { t } = useLang();
  const [items, setItems] = React.useState<LoadItem[]>([
    { name: "LED", watts: 10, qty: 10, hours: 5 },
    { name: "Fridge", watts: 150, qty: 1, hours: 24 },
    { name: "TV", watts: 100, qty: 1, hours: 4 },
  ]);
  const r = energyConsumption(items);
  const update = (i: number, field: keyof LoadItem, v: string | number) =>
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, [field]: v } : it)));
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-2 px-1 text-xs font-medium text-muted-foreground">
          <span className="col-span-4">{t("calcAppliance")}</span>
          <span className="col-span-2">W</span>
          <span className="col-span-2">×</span>
          <span className="col-span-2">h</span>
          <span className="col-span-2" />
        </div>
        <div className="max-h-64 space-y-2 overflow-y-auto scroll-soft pe-1">
          {items.map((it, i) => (
            <div key={i} className="grid grid-cols-12 gap-2">
              <Input className="col-span-4 h-9" value={it.name} onChange={(e) => update(i, "name", e.target.value)} />
              <Input className="col-span-2 h-9" type="number" value={it.watts} onChange={(e) => update(i, "watts", num(e.target.value))} />
              <Input className="col-span-2 h-9" type="number" value={it.qty} onChange={(e) => update(i, "qty", num(e.target.value))} />
              <Input className="col-span-2 h-9" type="number" value={it.hours} onChange={(e) => update(i, "hours", num(e.target.value))} />
              <Button variant="ghost" size="icon" className="col-span-2 h-9 w-full text-muted-foreground hover:text-destructive" onClick={() => setItems((p) => p.filter((_, idx) => idx !== i))} aria-label="Remove">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full" onClick={() => setItems((p) => [...p, { name: "", watts: 0, qty: 1, hours: 0 }])}>
          <Plus className="me-1 h-4 w-4" /> {t("calcAddAppliance")}
        </Button>
      </div>
      {r.ok && <ResultCard breakdown={r.breakdown} leadHook={r.leadHook} leadLabel={t("calcConsumption")} resultsLabel={t("toolsResults")} />}
    </div>
  );
}

const TABS_DEF: { key: string; comp: React.ReactNode }[] = [
  { key: "system-size", comp: <SystemSizeCalc /> },
  { key: "battery-capacity", comp: <BatteryCalc /> },
  { key: "cable-size", comp: <CableSizeCalc /> },
  { key: "voltage-drop", comp: <VoltageDropCalc /> },
  { key: "solar-tilt", comp: <SolarTiltCalc /> },
  { key: "energy-consumption", comp: <EnergyConsumptionCalc /> },
  { key: "backup-time", comp: <BackupTimeCalc /> },
  { key: "roi", comp: <ROICalc /> },
  { key: "microgrid-cost", comp: <MicrogridCostCalc /> },
];

export function CalculatorsSection() {
  const { t, lang } = useLang();
  const [tab, setTab] = React.useState("system-size");

  const tabLabel: Record<string, string> = {
    "system-size": t("calcSystemSize"),
    "battery-capacity": t("calcBattery"),
    "cable-size": t("calcCable"),
    "voltage-drop": t("calcVoltageDrop"),
    "solar-tilt": t("calcTilt"),
    "energy-consumption": t("calcConsumption"),
    "backup-time": t("calcBackup"),
    "roi": t("calcRoi"),
    "microgrid-cost": t("calcMicrogridCost"),
  };

  return (
    <section id="tools" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("toolsEyebrow")}
          title={<>{t("toolsTitle1")} <span className="text-gradient-solar">{t("toolsTitle2")}</span></>}
          description={t("toolsDesc")}
        />
        <AnswerCapsule>
          ابزار محاسباتی رایگان پارسا انرژی شامل ۹ ماشین‌حساب مهندسی است: اندازه سیستم خورشیدی، ظرفیت باتری، سایز کابل، افت ولتاژ، زاویه پنل، مصرف انرژی، زمان پشتیبانی، بازگشت سرمایه و هزینه میکروگرید. محاسبات بر اساس فرمول‌های استاندارد IEC و پارامترهای اقلیمی مشهد (۵.۰ ساعت تابش اوج) انجام می‌شوند. نتایج آنی هستند و نیازی به ثبت‌نام ندارند.
        </AnswerCapsule>
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Calculator className="h-4 w-4 text-primary" />
          <span className="tabular-nums" dir="ltr">{lang === "fa" ? faNum(calculators.length) : calculators.length}</span> {t("toolsLiveUpdate")}
        </div>

        <Tabs value={tab} onValueChange={setTab} className="mt-8">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 overflow-x-auto bg-background p-1.5 scroll-soft">
            {TABS_DEF.map((tb) => (
              <TabsTrigger key={tb.key} value={tb.key} className="h-9 data-[state=active]:shadow-solar">{tabLabel[tb.key]}</TabsTrigger>
            ))}
          </TabsList>
          {TABS_DEF.map((tb) => (
            <TabsContent key={tb.key} value={tb.key} className="mt-6">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">{tabLabel[tb.key]}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {calculators.find((c) => c.slug === tb.key)?.description}
                  </span>
                </div>
                {tb.comp}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
