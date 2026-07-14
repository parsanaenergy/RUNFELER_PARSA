/**
 * Parsa Energy — bilingual content data layer (fa / en).
 *
 * Company: a reputable company in Mashhad - Elahieh area, active across 5
 * divisions:
 *  1. Sales of HVAC/mechanical equipment (wall package, radiator, AC, air
 *     handler, ducted split, water pump...)
 *  2. Design, sales & install of solar power plants + emergency power
 *     (batteries, UPS, solar panels, generators, diesel generators)
 *  3. Servicing & repair of mechanical facilities (AC, package, water pump,
 *     air handler...)
 *  4. Sales of HVAC parts & accessories
 *  5. Vocational training school (mechanical, electrical, solar)
 *
 * The solar + emergency-power division is the SEO/AI-search priority, so it
 * carries the deepest content (services, products, projects, knowledge,
 * calculators). The other 4 divisions have their own landing sections.
 */

import type { LucideIcon } from "lucide-react";
import {
  Sun, Zap, BatteryCharging, Wrench, Cpu, ShieldCheck, Network,
  Gauge, Activity, PlugZap, ClipboardCheck, Microscope, PanelTop,
  HardHat, LineChart, CircuitBoard, Factory, Hospital, Radio,
  Sprout, Building2, MapPin, Flame, Wind, BookOpen, GraduationCap,
  Settings, Package, Phone, Download,
} from "lucide-react";

export type Lang = "fa" | "en";

/* ------------------------------------------------------------------ */
/* Bilingual primitive                                                 */
/* ------------------------------------------------------------------ */
export interface Bi {
  fa: string;
  en: string;
}
const bi = (fa: string, en: string): Bi => ({ fa, en });

/* ------------------------------------------------------------------ */
/* Divisions (the 5 business areas)                                    */
/* ------------------------------------------------------------------ */
export interface Division {
  slug: string;
  number: number;
  icon: LucideIcon;
  accent: "solar" | "tech" | "amber";
  name: Bi;
  short: Bi;
  description: Bi;
  items: Bi[];
}

export const divisions: Division[] = [
  {
    slug: "hvac-equipment",
    number: 1,
    icon: Flame,
    accent: "amber",
    name: bi("فروش تجهیزات و تاسیسات مکانیکی", "HVAC Equipment Sales"),
    short: bi("پکیج، رادیاتور، کولر گازی، هواساز", "Packages, radiators, ACs, air handlers"),
    description: bi(
      "فروش و تامین پکیج دیواری، رادیاتور شوفاژ، کولر گازی، هواساز، داکت اسپلیت، پمپ آب و سایر تجهیزات تاسیسات مکانیکی از برندهای معتبر برای منازل، ادارات و صنایع.",
      "Sales and supply of wall-hung packages, heating radiators, air conditioners, air handlers, ducted splits, water pumps and other mechanical equipment from leading brands for homes, offices and industry.",
    ),
    items: [
      bi("پکیج دیواری", "Wall-hung package"),
      bi("رادیاتور شوفاژ", "Heating radiator"),
      bi("کولر گازی (اسپلیت)", "Air conditioner (split)"),
      bi("هواساز", "Air handler"),
      bi("داکت اسپلیت", "Ducted split"),
      bi("پمپ آب", "Water pump"),
    ],
  },
  {
    slug: "solar-emergency-power",
    number: 2,
    icon: Sun,
    accent: "solar",
    name: bi("نیروگاه خورشیدی و برق اضطراری", "Solar Power & Emergency Power"),
    short: bi("پنل، اینورتر، باتری، UPS، دیزل ژنراتور", "Panels, inverters, batteries, UPS, generators"),
    description: bi(
      "طراحی، فروش و اجرای نیروگاه خورشیدی و تامین برق اضطراری برای منازل، اصناف، کارخانه‌ها، باغ و ویلا، ادارات و شرکت‌ها. شامل پنل خورشیدی، اینورتر، باتری، UPS، موتور برق و دیزل ژنراتور.",
      "Design, sales and installation of solar power plants and emergency power supply for homes, businesses, factories, villas, offices and companies. Includes solar panels, inverters, batteries, UPS, generators and diesel generators.",
    ),
    items: [
      bi("پنل خورشیدی", "Solar panel"),
      bi("اینورتر (On-grid / Hybrid / Off-grid)", "Inverter (On-grid / Hybrid / Off-grid)"),
      bi("باتری و بانک باتری", "Battery & battery bank"),
      bi("UPS و تامین برق اضطراری", "UPS & emergency power"),
      bi("موتور برق", "Generator"),
      bi("دیزل ژنراتور", "Diesel generator"),
    ],
  },
  {
    slug: "hvac-repair",
    number: 3,
    icon: Wrench,
    accent: "tech",
    name: bi("سرویس‌کاری و تعمیرات تاسیسات", "HVAC Servicing & Repair"),
    short: bi("تعمیر کولر، پکیج، پمپ، هواساز", "AC, package, pump, air-handler repair"),
    description: bi(
      "سرویس‌کاری و تعمیرات تاسیسات مکانیکی شامل کولر گازی، پکیج، پمپ آب، هواساز و داکت اسپلیت. تیم تعمیر ما خرابی‌ها را در محل و در سطح قطعه برطرف می‌کند.",
      "Servicing and repair of mechanical facilities including air conditioners, packages, water pumps, air handlers and ducted splits. Our repair team fixes faults on-site and at component level.",
    ),
    items: [
      bi("تعمیر و شارژ کولر گازی", "AC repair & recharge"),
      bi("تعمیر پکیج دیواری", "Wall-package repair"),
      bi("تعمیر پمپ آب", "Water-pump repair"),
      bi("تعمیر هواساز و داکت اسپلیت", "Air-handler & ducted-split repair"),
      bi("سرویس دوره‌ای تاسیسات", "Periodic HVAC service"),
      bi("نشتی‌یابی و رفع خرابی", "Leak detection & troubleshooting"),
    ],
  },
  {
    slug: "hvac-parts",
    number: 4,
    icon: Package,
    accent: "amber",
    name: bi("قطعات و لوازم جانبی تهویه مطبوع", "HVAC Parts & Accessories"),
    short: bi("قطعات اصلی و لوازم جانبی تهویه", "HVAC parts & accessories"),
    description: bi(
      "فروش قطعات و لوازم جانبی تهویه مطبوع — کمپرسور، موتور فن، برد الکترونیکی، شیر انبساط، خازن، فیلتر، لوله مسی و تمام قطعات مصرفی برای تعمیرکاران و صنایع.",
      "Sales of HVAC parts and accessories — compressors, fan motors, electronic boards, expansion valves, capacitors, filters, copper pipe and all consumable parts for technicians and industry.",
    ),
    items: [
      bi("کمپرسور", "Compressor"),
      bi("موتور فن و موتور کولر", "Fan motor & AC motor"),
      bi("برد الکترونیکی کولر و پکیج", "AC & package electronic board"),
      bi("شیر انبساط و خازن", "Expansion valve & capacitor"),
      bi("فیلتر و لوله مسی", "Filter & copper pipe"),
      bi("گاز کولر (R410A, R22, R32)", "Refrigerant gas"),
    ],
  },
  {
    slug: "training-school",
    number: 5,
    icon: GraduationCap,
    accent: "tech",
    name: bi("آموزشگاه آزاد فنی‌وحرفه‌ای", "Vocational Training School"),
    short: bi("آموزش تاسیسات، برق و خورشیدی", "HVAC, electrical & solar training"),
    description: bi(
      "آموزشگاه آزاد فنی‌وحرفه‌ای پارسا انرژی در حوزه تاسیسات مکانیکی، برق و انرژی خورشیدی، دوره‌های تخصصی کوتاه‌مدت و مهارتی برگزار می‌کند و به فارغ‌التحصیلان مدرک معتبر و مسیر شغلی ارائه می‌دهد.",
      "Parsa Energy vocational training school runs specialist short-term and skill courses in mechanical HVAC, electrical and solar energy, and awards graduates recognized certificates and a career path.",
    ),
    items: [
      bi("دوره تاسیسات مکانیکی", "HVAC mechanical course"),
      bi("دوره برق صنعتی و ساختمان", "Industrial & building electrical"),
      bi("دوره طراحی و نصب نیروگاه خورشیدی", "Solar plant design & install course"),
      bi("دوره تعمیر اینورتر و برد الکترونیکی", "Inverter & board repair course"),
      bi("دوره تعمیرات کولر و پکیج", "AC & package repair course"),
      bi("مدرک معتبر فنی‌وحرفه‌ای", "Recognized certificate"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Solar / power services (deep — SEO priority)                        */
/* ------------------------------------------------------------------ */
export interface Service {
  slug: string;
  name: Bi;
  tagline: Bi;
  description: Bi;
  icon: LucideIcon;
  accent: "solar" | "tech" | "amber";
  features: Bi[];
  deliverables: Bi[];
  trust: Bi[];
  faqs: { q: Bi; a: Bi }[];
  ctaLabel: Bi;
}

export const services: Service[] = [
  {
    slug: "solar-plant-design",
    icon: ClipboardCheck,
    accent: "solar",
    name: bi("طراحی و مهندسی نیروگاه خورشیدی", "Solar Plant Design & Engineering"),
    tagline: bi("طرح تک‌خطی، محاسبه بار و گزارش تولید قابل اعتماد.", "Bankable single-line diagrams, load flow and yield reports."),
    description: bi(
      "مهندسی کامل نیروگاه خورشیدی و هایبرید — از بررسی سایت و تحلیل تابش تا طرح تک‌خطی، سایزینگ کابل، هماهنگی حفاظتی و گزارش تولید PVsyst آماده تأمین مالی.",
      "End-to-end engineering for solar and hybrid plants — from site assessment and solar resource analysis to single-line diagrams, cable sizing, protection coordination and PVsyst yield reports ready for financing.",
    ),
    features: [
      bi("بررسی سایت و ارزیابی تابش خورشید", "Site survey & solar resource assessment"),
      bi("شبیه‌سازی تولید با PVsyst و تحلیل سایه", "PVsyst yield simulation & shading analysis"),
      bi("طرح تک‌خطی و هماهنگی حفاظتی", "Single-line diagrams & protection coordination"),
      bi("محاسبه کابل، DC/AC و افت ولتاژ", "Cable, DC/AC & voltage-drop calculations"),
      bi("طراحی سازه و پایه پنل", "Structural & mounting design"),
      bi("مستندات اتصال به شبکه و استاندارد", "Compliance & grid-connection documentation"),
    ],
    deliverables: [
      bi("پکیج طراحی (PDF + DWG)", "Detailed design package (PDF + DWG)"),
      bi("گزارش تولید PVsyst", "PVsyst yield report"),
      bi("لیست تجهیزات (BoM)", "Bill of materials (BoM)"),
      bi("پروتکل‌های تست و راه‌اندازی", "Commissioning & test protocols"),
    ],
    trust: [
      bi("مطابق IEC 62548 / 62446", "IEC 62548 / 62446 compliant"),
      bi("مهندسان دارای گواهی PVsyst", "PVsyst-certified engineers"),
      bi("بیش از ۲۰۰ نیروگاه طراحی‌شده", "200+ plants designed"),
    ],
    faqs: [
      { q: bi("آیا تضمین تولید ارائه می‌دهید؟", "Do you provide yield guarantees?"), a: bi("بله. هر طراحی شامل گزارش تولید P50/P90 از PVsyst و بند اختیاری تضمیم انرژی در پیشنهاد EPC است.", "Yes. Every design includes a PVsyst P50/P90 yield report and an optional guaranteed-energy clause in the EPC proposal.") },
      { q: bi("هم آفگرید و هم متصل به شبکه طراحی می‌کنید؟", "Can you design both off-grid and grid-tied plants?"), a: bi("بله. نیروگاه‌های متصل به شبکه، هایبرید (شبکه + باتری) و آفگرید کامل را با توپولوژی اینورتر و سایزینگ ذخیره مناسب طراحی می‌کنیم.", "Yes. We design grid-tied, hybrid (grid + battery) and fully off-grid plants with appropriate inverter topologies and storage sizing.") },
    ],
    ctaLabel: bi("درخواست مشاوره طراحی", "Request a design consultation"),
  },
  {
    slug: "solar-installation",
    icon: HardHat,
    accent: "tech",
    name: bi("نصب و اجرای نیروگاه خورشیدی", "Solar Installation"),
    tagline: bi("تیم‌های EPC دارای گواهینامه، ایمن، در زمان مقرر.", "Certified EPC crews, safety-first, on schedule."),
    description: bi(
      "نصب کلید در دست نیروگاه خورشیدی توسط تیم‌های EPC دارای گواهینامه — نصب سازه، سیم‌کشی DC/AC، ادغام اینورتر و باتری، ارت و نشانه‌گذاری مطابق IEC 62446.",
      "Turnkey solar installation by certified EPC crews — mechanical mounting, DC/AC wiring, inverter & battery integration, grounding and labelling to IEC 62446 standards.",
    ),
    features: [
      bi("نصب سازه و پایه پنل", "Mechanical mounting & structural fit-out"),
      bi("سیم‌کشی استرینگ DC و ترمینال MC4", "DC string wiring & MC4 termination"),
      bi("نصب آماده راه‌اندازی اینورتر و باتری", "Inverter & battery commissioning-ready install"),
      bi("ارت، حفاظت اضافه ولتاژ و نشانه‌گذاری", "Grounding, surge protection & labelling"),
      bi("اجراهای ایمن HSE", "HSE-compliant site execution"),
      bi("مستندسازی پیشرفت و تحویل", "Progress documentation & handover pack"),
    ],
    deliverables: [
      bi("آرایه PV نصب و سیم‌کشی شده", "Installed & wired PV array"),
      bi("نقشه As-built", "As-built drawings"),
      bi("پکیج تحویل نصب", "Installation handover pack"),
      bi("عکس و پرونده تست", "Photos & test records"),
    ],
    trust: [bi("نصب مطابق IEC 62446", "IEC 62446 installation"), bi("سابقه ایمنی بدون حادثه", "Zero-LTI safety record"), bi("۱۰ سال گارانتی اجرا", "10-year workmanship warranty")],
    faqs: [
      { q: bi("نصب چقدر طول می‌کشد؟", "How long does installation take?"), a: bi("یک نیروگاه تجاری ۵۰ کیلوواتی پشت‌بومی typically در ۵ تا ۱۰ روز کاری؛ سیستم خانگی ۱ تا ۳ روز نصب می‌شود.", "A typical 50 kWp commercial rooftop installs in 5–10 working days; residential systems in 1–3 days.") },
    ],
    ctaLabel: bi("رزرو بررسی سایت", "Schedule a site survey"),
  },
  {
    slug: "emergency-power-ups",
    icon: BatteryCharging,
    accent: "amber",
    name: bi("برق اضطراری (UPS، باتری، دیزل ژنراتور)", "Emergency Power (UPS, Battery, Generator)"),
    tagline: bi("برق پشتیبان مطمئن برای بارهای حساس.", "Reliable backup power for critical loads."),
    description: bi(
      "طراحی و تامین سیستم برق اضطراری — UPS، بانک باتری، موتور برق و دیزل ژنراتور برای منازل، ادارات، بیمارستان‌ها و صنایع با انتقال بدون قطعی و خودکفایی متناسب با بار حساس شما.",
      "Design and supply of emergency power systems — UPS, battery banks, generators and diesel generators for homes, offices, hospitals and industry with seamless transfer and autonomy matched to your critical loads.",
    ),
    features: [
      bi("طراحی UPS و بانک باتری", "UPS & battery bank design"),
      bi("انتخاب و نصب دیزل ژنراتور", "Diesel generator selection & install"),
      bi("انتقال خودکار ATS", "Automatic transfer switch (ATS)"),
      bi("خودکفایی بار حساس", "Critical-load autonomy sizing"),
      bi("کنترل همزمان خورشید + دیزل + باتری", "Solar + diesel + battery hybrid control"),
      bi("تست بار و راه‌اندازی", "Load testing & commissioning"),
    ],
    deliverables: [bi("سیستم برق اضطراری کامل", "Complete emergency power system"), bi("راه‌اندازی و تست", "Commissioning & testing"), bi("مستندات و آموزش", "Documentation & training")],
    trust: [bi("انتقال <۲۰ms", "Transfer <20 ms"), bi("برندهای معتبر", "Major brands"), bi("پشتیبانی ۲۴/۷", "24/7 support")],
    faqs: [
      { q: bi("UPS بهتر است یا دیزل ژنراتور؟", "UPS or diesel generator — which is better?"), a: bi("UPS برای بارهای حساس کوتاه‌مدت (کامپیوتر، سرور، پزشکی) بدون قطعی مناسب است؛ دیزل ژنراتور برای برق‌رسانی طولانی‌مدت. ترکیب UPS + دیزل + خورشیدی بهترین راه‌حل است.", "UPS suits short-duration critical loads (computers, servers, medical) with no interruption; diesel generators suit long-duration outages. A UPS + diesel + solar hybrid is the best solution.") },
    ],
    ctaLabel: bi("طراحی برق اضطراری", "Design my backup"),
  },
  {
    slug: "maintenance",
    icon: ShieldCheck,
    accent: "solar",
    name: bi("نگهداری و تعمیرات (O&M)", "Maintenance & O&M"),
    tagline: bi("بیشینه تولید با نگهداری پیشگیرانه و اصلاحی.", "Maximize yield with preventive + corrective care."),
    description: bi(
      "نگهداری کامل — شستشوی دوره‌ای، تصویربرداری حرارتی، IV-curve، مدیریت قطعات یدکی و پاسخ اصلاحی سریع برای حفظ دسترسی نیروگاه بالای ۹۸٪.",
      "Comprehensive operations & maintenance — scheduled cleaning, thermal imaging, IV-curve scanning, spare-parts management and rapid corrective response to keep your plant above 98% availability.",
    ),
    features: [
      bi("شستشو و بازرسی دوره‌ای پنل", "Scheduled module cleaning & inspection"),
      bi("تصویربرداری حرارتی با پهپاد", "Drone thermal imaging & fault mapping"),
      bi("IV-curve و عیب‌یابی استرینگ", "IV-curve tracing & string diagnostics"),
      bi("پایش سلامت اینورتر و باتری", "Inverter & battery health monitoring"),
      bi("مدیریت قطعات و پاسخ SLA", "Spare-parts management & SLA response"),
      bi("گزارش ماهانه عملکرد", "Monthly performance & availability reports"),
    ],
    deliverables: [bi("قرارداد SLA نگهداری", "O&M SLA contract"), bi("پایش ۲۴/۷", "24/7 monitoring"), bi("داشبورد KPI ماهانه", "Monthly KPI dashboard")],
    trust: [bi("دسترسی ۹۸٪+", "98%+ availability SLA"), bi("پاسخ ۴ ساعته", "4-hour critical response"), bi("ترموگرافی پهپاد", "Drone thermography")],
    faqs: [
      { q: bi("چقدر باید پنل‌ها را شست؟", "How often should solar panels be cleaned?"), a: bi("در اقلیم‌های گردوغباربار هر ۳ تا ۴ ماه؛ در اقلیم معتدل هر ۶ تا ۱۲ ماه. بدون شستشو افت تولید ۱۰ تا ۲۵ درصدی رایج است.", "In dusty/arid climates every 3–4 months; in temperate climates every 6–12 months. Soiling losses of 10–25% are common without cleaning.") },
    ],
    ctaLabel: bi("درخواست پیش‌فاکتور O&M", "Get an O&M quote"),
  },
  {
    slug: "solar-inverter-repair",
    icon: Zap,
    accent: "solar",
    name: bi("تعمیر اینورتر خورشیدی", "Solar Inverter Repair"),
    tagline: bi("تعمیر در سطح قطعه برای تمام برندهای اصلی.", "Component-level repair for all major brands."),
    description: bi(
      "تعمیر اینورتر خورشیدی در سطح قطعه — تعویض MOSFET/IGBT مدار قدرت، مدار درایور، برد کنترل و نمایش، مشکلات firmware و تست بار کامل برای اینورترهای On-grid، هایبرید و آفگرید.",
      "Component-level solar inverter repair — power stage MOSFET/IGBT replacement, driver circuits, control & display boards, firmware issues and full load testing for on-grid, hybrid and off-grid inverters.",
    ),
    features: [
      bi("تعویض MOSFET/IGBT مدار قدرت", "Power-stage MOSFET/IGBT replacement"),
      bi("تعمیر مدار درایور و گیت", "Driver & gate circuit repair"),
      bi("تعمیر برد کنترل / نمایش", "Control / display board repair"),
      bi("بارگذاری مجدد firmware و پیکربندی", "Firmware reload & configuration"),
      bi("تست بار و حرارت کامل", "Full load & thermal testing"),
      bi("گارانتی تعمیر ۳ تا ۱۲ ماه", "3–12 month repair warranty"),
    ],
    deliverables: [bi("اینورتر تعمیر و تست‌شده", "Repaired & load-tested inverter"), bi("گزارش تست", "Test report"), bi("گارانتی", "Warranty")],
    trust: [bi("تمام برندهای اصلی", "All major brands"), bi("بیش از ۵۰۰۰ تعمیر", "5,000+ inverters repaired"), bi("تعمیر در سطح قطعه", "Component-level")],
    faqs: [
      { q: bi("کدام برندهای اینورتر را تعمیر می‌کنید؟", "Which inverter brands do you repair?"), a: bi("SMA، Victron، Growatt، Deye، Sofar، Luminous، ABB، Schneider و بیشتر. اگر اینورتر خورشیدی است احتمالاً تعمیر می‌شود.", "SMA, Victron, Growatt, Deye, Sofar, Luminous, ABB, Schneider and more. If it's a solar inverter, we can likely repair it.") },
      { q: bi("تعمیر ارزان‌تر از تعویض است؟", "Is repair cheaper than replacement?"), a: bi("معمولاً ۴۰ تا ۷۰٪ ارزان‌تر از دستگاه نو و اغلب عمر اینورتر را ۳ تا ۵ سال افزایش می‌دهد. تشخیص رایگان و پیش‌فاکتور قطعی ارائه می‌دهیم.", "Usually 40–70% cheaper than a new unit, and often extends inverter life by 3–5 years. We provide a free diagnosis and a fixed-price quote.") },
    ],
    ctaLabel: bi("درخواست تعمیر", "Get a repair quote"),
  },
  {
    slug: "electronic-board-repair",
    icon: Cpu,
    accent: "tech",
    name: bi("تعمیر برد الکترونیکی", "Electronic Board Repair"),
    tagline: bi("تعمیر دقیق SMD برای برد کنترل، درایور و BMS.", "Precision SMD repair for control & driver boards."),
    description: bi(
      "تعمیر دقیق SMD برد کنترل اینورتر، برد درایور، برد کنترلر شارژ و برد BMS با استفاده از کاریاب گرم، تشخیص با اسیلوسکوپ و عیب‌یابی در سطح قطعه.",
      "Precision SMD repair of inverter control boards, driver boards, charge-controller boards and BMS boards — using hot-air rework, oscilloscope diagnostics and component-level fault finding.",
    ),
    features: [
      bi("تشخیص با اسیلوسکوپ در سطح قطعه", "Oscilloscope & component-level diagnosis"),
      bi("کاریاب SMD (QFN, BGA, SOT)", "SMD rework (QFN, BGA, SOT packages)"),
      bi("تعویض خازن / MOSFET / IC", "Capacitor / MOSFET / IC replacement"),
      bi("تعمیر برد BMS و کنترلر شارژ", "BMS & charge-controller board repair"),
      bi("تست زیر بار روی نیمکت", "Bench testing under load"),
      bi("پوشش کانفورمال و ریفلو", "Conformal coating & reflow"),
    ],
    deliverables: [bi("برد تعمیرشده", "Repaired board"), bi("گزارش تشخیص", "Diagnostic report"), bi("گارانتی", "Warranty")],
    trust: [bi("آزمایشگاه ESD-safe", "ESD-safe lab"), bi("کاریاب با میکروسکوپ", "Microscope rework"), bi("گارانتی ۳ ماهه", "3-month warranty")],
    faqs: [
      { q: bi("آیا بردهای قدیمی پشتیبانی‌نشده را تعمیر می‌کنید؟", "Can you repair boards no longer supported?"), a: bi("بله. تعمیر در سطح قطعه برای بردهای قدیمی ایده‌آل است — خرابی را مهندسی معکوس می‌کنیم و قطعه معادل تهیه می‌کنیم.", "Yes. Component-level repair is ideal for obsolete boards — we reverse-engineer the fault and source equivalent parts.") },
    ],
    ctaLabel: bi("ارسال برد برای تشخیص", "Send a board for diagnosis"),
  },
  {
    slug: "microgrid-consulting",
    icon: Network,
    accent: "tech",
    name: bi("مشاوره میکروگرید", "Microgrid Consulting"),
    tagline: bi("امکان‌سنجی، توپولوژی و ROI برای انرژی تاب‌آور.", "Feasibility, topology and ROI for resilient energy."),
    description: bi(
      "مشاوره فنی و تجاری مستقل — پروفایل بار، انتخاب توپولوژی (AC/DC coupling)، سایزینگ ذخیره‌ساز، تحلیل تاب‌آوری و مطالعات امکان‌سنجی قابل اعتماد برای میکروگریدهای صنعتی و اجتماعی.",
      "Independent technical and commercial consulting — load profiling, topology selection (AC/DC coupling), storage sizing, resilience analysis and bankable feasibility studies for industrial and community microgrids.",
    ),
    features: [
      bi("پروفایل بار و تحلیل تقاضا", "Load profiling & demand analysis"),
      bi("انتخاب توپولوژی (AC/DC coupling)", "Topology selection (AC/DC coupling)"),
      bi("سایزینگ ذخیره و خودکفایی", "Storage & autonomy sizing"),
      bi("تحلیل تاب‌آوری و جزیره‌ای", "Resilience & island-mode analysis"),
      bi("مدل‌سازی تکنیکال-اقتصادی و ROI", "Techno-economic & ROI modelling"),
      bi("پشتیبانی مناقصه و مشخصات EPC", "Tender & EPC specification support"),
    ],
    deliverables: [bi("مطالعه امکان‌سنجی", "Feasibility study"), bi("مدل تکنیکال-اقتصادی", "Techno-economic model"), bi("مشخصات EPC", "EPC specification")],
    trust: [bi("مستقل از فروشنده", "Vendor-independent"), bi("گزارش قابل اعتماد", "Bankable reports"), bi("۵۰+ مطالعه امکان‌سنجی", "50+ feasibility studies")],
    faqs: [
      { q: bi("تفاوت میکروگرید AC-coupled و DC-coupled چیست؟", "AC vs DC coupled microgrid?"), a: bi("در AC-coupled، اینورتر متصل به شبکه و اینورتر باتری روی باس AC بسته می‌شوند — مناسب بازسازی. در DC-coupled، پنل و باتری روی باس DC مشترک — مناسب آفگرید با راندمان بالاتر.", "AC-coupled couples a grid-tied inverter and battery inverter on the AC bus — best for retrofits. DC-coupled couples PV and batteries on the DC bus — best for new off-grid plants with higher efficiency.") },
    ],
    ctaLabel: bi("شروع مطالعه امکان‌سنجی", "Start a feasibility study"),
  },
  {
    slug: "monitoring",
    icon: Activity,
    accent: "tech",
    name: bi("سیستم‌های پایش", "Monitoring Systems"),
    tagline: bi("دید لحظه‌ای از تمام دارایی‌ها.", "Real-time visibility across every asset."),
    description: bi(
      "پلتفرم‌های پایش ابری و محلی — دیتالاگر Modbus/بی‌سیم، داشبورد اختصاصی، هشدار ناهنجاری و یکپارچه‌سازی API برای مشاهده ۲۴/۷ هر اینورتر، باتری و استرینگ.",
      "Cloud and on-premise monitoring platforms — modbus/wireless data loggers, custom dashboards, anomaly alerts and API integration to keep every inverter, battery and string visible 24/7.",
    ),
    features: [
      bi("دیتالاگر Modbus / Wi-Fi / GSM", "Modbus / Wi-Fi / GSM data loggers"),
      bi("داشبورد KPI اختصاصی", "Custom KPI dashboards"),
      bi("تشخیص ناهنجاری و هشدار", "Anomaly detection & alerts"),
      bi("پایش استرینگ", "String-level monitoring"),
      bi("یکپارچه‌سازی API و SCADA", "API & SCADA integration"),
      bi("اپ موبایل و گزارش ایمیل", "Mobile app & email reports"),
    ],
    deliverables: [bi("پورتال پایش", "Monitoring portal"), bi("پیکربندی هشدار", "Alert configuration"), bi("دسترسی API", "API access")],
    trust: [bi("آپ‌تایم ۹۹.۹٪", "99.9% uptime"), bi("۱۰۰+ نیروگاه پایش‌شده", "100+ plants monitored"), bi("API باز", "Open API")],
    faqs: [
      { q: bi("می‌توانم چند نیروگاه را در یک پورتال ببینم؟", "Multiple plants in one portal?"), a: bi("بله. پورتال چندسایتی ما KPIها را در همه نیروگاه‌ها با drill-down و دسترسی نقش‌محور و خروجی API نشان می‌دهد.", "Yes. Our multi-site portal rolls up KPIs across all plants with per-site drill-down, role-based access and API export.") },
    ],
    ctaLabel: bi("راه‌اندازی پایش", "Set up monitoring"),
  },
];

/* ------------------------------------------------------------------ */
/* Products (solar + emergency power)                                  */
/* ------------------------------------------------------------------ */
export interface Product {
  slug: string;
  name: Bi;
  brand: string;
  category: Bi;
  categoryKey: string;
  icon: LucideIcon;
  tagline: Bi;
  description: Bi;
  specs: { label: Bi; value: Bi }[];
  applications: Bi[];
  faqs: { q: Bi; a: Bi }[];
  priceFrom: Bi;
  badge?: Bi;
}

export const productCategories: { key: string; label: Bi }[] = [
  { key: "all", label: bi("همه", "All") },
  { key: "inverters", label: bi("اینورتر", "Inverters") },
  { key: "batteries", label: bi("باتری", "Batteries") },
  { key: "panels", label: bi("پنل خورشیدی", "Solar Panels") },
  { key: "ups", label: bi("UPS و دیزل ژنراتور", "UPS & Generators") },
  { key: "controllers", label: bi("کنترلر شارژ", "Charge Controllers") },
  { key: "accessories", label: bi("لوازم جانبی", "Accessories") },
];

export const products: Product[] = [
  {
    slug: "deye-hybrid-8kw",
    icon: Zap,
    name: bi("اینورتر هایبرید دای ۸ کیلووات", "Deye 8kW Hybrid Inverter"),
    brand: "Deye",
    category: bi("اینورتر", "Inverters"),
    categoryKey: "inverters",
    tagline: bi("سه‌فاز هایبرید با باتری ۴۸ولت و MPPT دوگانه", "Three-phase hybrid with 48V battery & dual MPPT"),
    description: bi(
      "اینورتر هایبرید سه‌فاز ۸ کیلووات با MPPT دوگانه، سازگار با باتری ۴۸ولت و سوییچ بدون قطعی آفگرید/آنگرید. ایده‌آل برای میکروگرید خانگی و تجاری کوچک.",
      "Three-phase 8kW hybrid inverter with dual MPPT, 48V battery compatibility and seamless off-grid / on-grid switching. Ideal for residential and small commercial microgrids.",
    ),
    specs: [
      { label: bi("توان نامی", "Rated Power"), value: bi("۸ kW / ۱۰ kVA", "8 kW / 10 kVA") },
      { label: bi("فاز", "Phases"), value: bi("سه‌فاز", "3-phase") },
      { label: bi("MPPT", "MPPT"), value: bi("دوبل، ۵۰۰V ماکز", "Dual, 500V max") },
      { label: bi("باتری", "Battery"), value: bi("LiFePO4 / سرب‌اسید ۴۸V", "48V LiFePO4 / Lead-acid") },
      { label: bi("راندمان", "Efficiency"), value: bi("۹۷.۶٪ اوج", "97.6% peak") },
      { label: bi("گارانتی", "Warranty"), value: bi("۵ سال", "5 years") },
    ],
    applications: [bi("پشتیبان خانگی", "Residential backup"), bi("تجاری کوچک", "Small commercial"), bi("میکروگرید هایبرید", "Hybrid microgrid")],
    faqs: [{ q: bi("بدون باتری کار می‌کند؟", "Can it work without a battery?"), a: bi("بله — از AC-coupled آنگرید بدون باتری پشتیبانی می‌کند و بعداً باتری اضافه می‌شود.", "Yes — supports AC-coupled on-grid operation without a battery, and adds battery later for backup.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
    badge: bi("پرفروش", "Best seller"),
  },
  {
    slug: "victron-multigrid-5kw",
    icon: Zap,
    name: bi("Victron MultiGrid ۵ kVA", "Victron MultiGrid 5kVA"),
    brand: "Victron Energy",
    category: bi("اینورتر", "Inverters"),
    categoryKey: "inverters",
    tagline: bi("اینورتر/شارژر سینوسی با پشتیبانی شبکه", "Sinusoidal inverter/charger with grid support"),
    description: bi(
      "Victron MultiGrid ۵ kVA اینورتر/شارژر سینوسی خالص با PowerAssass، feed-in شبکه و انتقال بدون قطعی. استاندارد صنعت برای آفگرید و هایبرید مطمئن.",
      "Victron MultiGrid 5kVA pure sine inverter/charger with PowerAssist, grid feed-in and seamless transfer. Industry-standard for reliable off-grid and hybrid builds.",
    ),
    specs: [
      { label: bi("توان نامی", "Rated Power"), value: bi("۵ kVA", "5 kVA") },
      { label: bi("توپولوژی", "Topology"), value: bi("اینورتر + شارژر", "Inverter + charger") },
      { label: bi("باتری", "Battery"), value: bi("۴۸V", "48V") },
      { label: bi("انتقال", "Transfer"), value: bi("<۲۰ ms", "<20 ms") },
      { label: bi("راندمان", "Efficiency"), value: bi("۹۵٪ اوج", "95% peak") },
      { label: bi("گارانتی", "Warranty"), value: bi("۵ سال", "5 years") },
    ],
    applications: [bi("خانه آفگرید", "Off-grid homes"), bi("سایت تلکام", "Telecom sites"), bi("صنعتی", "Industrial")],
    faqs: [{ q: bi("موازی‌بندی پشتیبانی می‌شود؟", "Parallel stacking?"), a: bi("بله — تا ۶ واحد موازی برای ۳۰ kVA و پیکربندی سه‌فاز.", "Yes — up to 6 units in parallel for 30 kVA, plus 3-phase configuration.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
  },
  {
    slug: "lifepo4-48v-100ah",
    icon: BatteryCharging,
    name: bi("باتری LiFePO4 48V 100Ah رکی", "LiFePO4 48V 100Ah Rack Battery"),
    brand: "Parsa Energy",
    category: bi("باتری", "Batteries"),
    categoryKey: "batteries",
    tagline: bi("لیتیم ۴۰۰۰+ سیکل با BMS هوشمند", "4,000+ cycle lithium rack with smart BMS"),
    description: bi(
      "باتری رکی ۴۸ولت ۱۰۰آمپرساعت (۵.۱۲ کیلووات‌ساعت) LiFePO4 با BMS هوشمند یکپارچه، ارتباط CAN/RS485 و فرم ۱۹ اینچ رک. ماژولار تا ۵۰+ کیلووات‌ساعت.",
      "48V 100Ah (5.12 kWh) LiFePO4 rack battery with integrated smart BMS, CAN/RS485 comms and 19-inch rack form factor. Modular up to 50+ kWh.",
    ),
    specs: [
      { label: bi("ظرفیت", "Capacity"), value: bi("۵.۱۲ kWh", "5.12 kWh") },
      { label: bi("شیمی", "Chemistry"), value: bi("LiFePO4 (LFP)", "LiFePO4 (LFP)") },
      { label: bi("سیکل @ ۸۰٪ DoD", "Cycles @ 80% DoD"), value: bi("۴۰۰۰+", "4,000+") },
      { label: bi("BMS", "BMS"), value: bi("هوشمند، CAN/RS485", "Smart, CAN/RS485") },
      { label: bi("فرم", "Form Factor"), value: bi("رک ۱۹ اینچ ۳U", "19-inch 3U rack") },
      { label: bi("گارانتی", "Warranty"), value: bi("۱۰ سال", "10 years") },
    ],
    applications: [bi("ذخیره آفگرید", "Off-grid storage"), bi("پشتیبان هایبرید", "Hybrid backup"), bi("تلکام", "Telecom")],
    faqs: [{ q: bi("موازی می‌شود؟", "Can I parallel multiple units?"), a: bi("بله — تا ۱۵ واحد موازی برای ۷۶.۸ kWh روی یک باس.", "Yes — up to 15 units in parallel for 76.8 kWh on a single bus.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
    badge: bi("ماژولار", "Modular"),
  },
  {
    slug: "solar-panel-450w",
    icon: Sun,
    name: bi("پنل مونو ۴۵۰ وات نیم‌برش", "PV Mono 450W Half-Cut"),
    brand: "Tier-1",
    category: bi("پنل خورشیدی", "Solar Panels"),
    categoryKey: "panels",
    tagline: bi("۱۴۴ سلول نیم‌برش مونو، راندمان ۲۱.۲٪", "144-cell half-cut mono, 21.2% efficiency"),
    description: bi(
      "پنل مونوکریستالین Tier-1 ۴۵۰ وات نیم‌برش با سلول‌های PERC، شیشه آنتی‌رفلکس و گارانتی عملکرد ۲۵ ساله خطی.",
      "Tier-1 monocrystalline 450W half-cut PV module with PERC cells, anti-reflective glass and 25-year linear performance warranty.",
    ),
    specs: [
      { label: bi("توان نامی", "Rated Power"), value: bi("۴۵۰ Wp", "450 Wp") },
      { label: bi("نوع سلول", "Cell Type"), value: bi("مونو PERC نیم‌برش", "Mono PERC half-cut") },
      { label: bi("راندمان", "Efficiency"), value: bi("۲۱.۲٪", "21.2%") },
      { label: bi("ضریب دما (Pmax)", "Temp Coeff (Pmax)"), value: bi("-۰.۳۵٪/°C", "-0.35%/°C") },
      { label: bi("گارانتی", "Warranty"), value: bi("۱۲ سال محصول / ۲۵ سال عملکرد", "12 yr product / 25 yr perf") },
      { label: bi("گواهی", "Certification"), value: bi("IEC 61215 / 61730", "IEC 61215 / 61730") },
    ],
    applications: [bi("پشت‌بم", "Rooftop"), bi("زمینی", "Ground-mount"), bi("سقف خودرو", "Solar carports")],
    faqs: [{ q: bi("ف volumes عمده می‌فروشید؟", "Do you sell in bulk?"), a: bi("بله — مقادیر کامل کانتینر با قیمت کارخانه‌ای و گزارش bankability تیر-۱.", "Yes — full-container quantities with factory-direct pricing and tier-1 bankability reports.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
  },
  {
    slug: "online-ups-3kva",
    icon: ShieldCheck,
    name: bi("UPS آنلاین ۳ kVA", "Online UPS 3kVA"),
    brand: "Parsa Energy",
    category: bi("UPS و دیزل ژنراتور", "UPS & Generators"),
    categoryKey: "ups",
    tagline: bi("UPS آنلاین Double-conversion با انتقال صفر", "Online double-conversion UPS with zero transfer"),
    description: bi(
      "UPS آنلاین ۳ kVA Double-conversion با شکل موج سینوسی خالص، انتقال صفر و باتری خارجی قابل توسعه برای سرور، پزشکی و بار حساس اداری.",
      "Online 3 kVA double-conversion UPS with pure sine wave, zero transfer time and expandable external battery for servers, medical and sensitive office loads.",
    ),
    specs: [
      { label: bi("توان", "Power"), value: bi("۳ kVA / ۲.۷ kW", "3 kVA / 2.7 kW") },
      { label: bi("توپولوژی", "Topology"), value: bi("آنلاین Double-conversion", "Online double-conversion") },
      { label: bi("انتقال", "Transfer"), value: bi("۰ ms", "0 ms") },
      { label: bi("باطری", "Battery"), value: bi("خارجی قابل توسعه", "External expandable") },
      { label: bi("شکل موج", "Waveform"), value: bi("سینوسی خالص", "Pure sine") },
      { label: bi("گارانتی", "Warranty"), value: bi("۲ سال", "2 years") },
    ],
    applications: [bi("سرور و IT", "Server & IT"), bi("تجهیزات پزشکی", "Medical equipment"), bi("اداری حساس", "Sensitive office")],
    faqs: [{ q: bi("UPS آنلاین و Line-interactive چه فرقی دارند؟", "Online vs Line-interactive UPS?"), a: bi("آنلاین همیشه از اینورتر تغذیه می‌کند (انتقال صفر)؛ Line-interactive در حالت عادی از شبکه و فقط هنگام قطعی از باتری استفاده می‌کند.", "Online always feeds from the inverter (zero transfer); Line-interactive uses grid normally and battery only during outage.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
  },
  {
    slug: "diesel-generator-20kva",
    icon: Gauge,
    name: bi("دیزل ژنراتور ۲۰ kVA", "Diesel Generator 20kVA"),
    brand: "Parsa Energy",
    category: bi("UPS و دیزل ژنراتور", "UPS & Generators"),
    categoryKey: "ups",
    tagline: bi("دیزل ژنراتور سایلنت با ATS، ۲۰ kVA", "Silent diesel generator with ATS, 20 kVA"),
    description: bi(
      "دیزل ژنراتور سایلنت ۲۰ kVA با کانوپی عایق‌دار، ATS خودکار، موتور کم‌مصرف و گارانتی برای برق اضطراری اداری، مغازه و صنعتی.",
      "Silent 20 kVA diesel generator with soundproof canopy, automatic ATS, fuel-efficient engine and warranty for office, shop and industrial emergency power.",
    ),
    specs: [
      { label: bi("توان", "Power"), value: bi("۲۰ kVA / ۱۶ kW", "20 kVA / 16 kW") },
      { label: bi("فاز", "Phases"), value: bi("تک‌فاز / سه‌فاز", "Single / 3-phase") },
      { label: bi("کانوپی", "Canopy"), value: bi("سایلنت عایق‌دار", "Silent soundproof") },
      { label: bi("ATS", "ATS"), value: bi("تعبیه‌شده", "Built-in") },
      { label: bi("مصرف سوخت", "Fuel consumption"), value: bi("~۳.۵ L/hr @ ۷۵٪", "~3.5 L/hr @ 75%") },
      { label: bi("گارانتی", "Warranty"), value: bi("۲ سال / ۲۰۰۰ ساعت", "2 years / 2000 hrs") },
    ],
    applications: [bi("اداری", "Office"), bi("مغازه", "Shop"), bi("صنعتی سبک", "Light industrial")],
    faqs: [{ q: bi("با خورشیدی هماهنگ می‌شود؟", "Can it sync with solar?"), a: bi("بله — با کنترلر هماهنگ‌کننده، دیزل فقط هنگام نیاز و کم‌بار روشن می‌شود تا سوخت و سایش کاهش یابد.", "Yes — with a sync controller, the diesel starts only when needed and at minimum load, reducing fuel and wear.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
  },
  {
    slug: "mppt-controller-60a",
    icon: CircuitBoard,
    name: bi("کنترلر شارژ MPPT 60A", "MPPT Charge Controller 60A"),
    brand: "Parsa Energy",
    category: bi("کنترلر شارژ", "Charge Controllers"),
    categoryKey: "controllers",
    tagline: bi("MPPT 60A، ۱۵۰V، ردیابی ۹۹٪", "60A MPPT, 150V, 99% tracking"),
    description: bi(
      "کنترلر شارژ MPPT ۶۰آمپر با تشخیص خودکار ۱۲/۲۴/۳۶/۴۸ولت، ورودی PV ۱۵۰ولت، ردیابی ۹۹٪ و ترمینال بار/خروجی با حفاظت کامل.",
      "60A 12/24/36/48V auto-detect MPPT charge controller with 150V PV input, 99% tracking efficiency and load/output terminals with full protection.",
    ),
    specs: [
      { label: bi("جریان ماکز", "Max Current"), value: bi("۶۰ A", "60 A") },
      { label: bi("ولتاژ باتری", "Battery Voltage"), value: bi("۱۲/۲۴/۳۶/۴۸V خودکار", "12/24/36/48V auto") },
      { label: bi("ولتاژ PV ماکز", "Max PV Voltage"), value: bi("۱۵۰ V", "150 V") },
      { label: bi("راندمان ردیابی", "Tracking Efficiency"), value: bi("۹۹٪", "99%") },
      { label: bi("نمایش", "Display"), value: bi("LCD + بلوتوث", "LCD + Bluetooth") },
      { label: bi("گارانتی", "Warranty"), value: bi("۳ سال", "3 years") },
    ],
    applications: [bi("کلبه آفگرید", "Off-grid cabins"), bi("تلکام", "Telecom"), bi("RV / دریایی", "RV / marine")],
    faqs: [{ q: bi("MPPT یا PWM؟", "MPPT vs PWM?"), a: bi("MPPT ۲۰ تا ۳۰٪ انرژی بیشتری استخراج می‌کند، به‌ویژه در هوای سرد یا ابری.", "MPPT extracts 20–30% more energy than PWM, especially in cold or cloudy conditions.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
  },
  {
    slug: "solar-dc-cable-6mm",
    icon: PlugZap,
    name: bi("کابل DC خورشیدی ۶mm² PV1-F", "Solar DC Cable 6mm² PV1-F"),
    brand: "Tier-1",
    category: bi("لوازم جانبی", "Accessories"),
    categoryKey: "accessories",
    tagline: bi("TÜV ۱۵۰۰V DC، مقاوم UV، عمر ۲۵ سال", "TÜV 1500V DC, UV-resistant, 25-year life"),
    description: bi(
      "کابل تک‌رشته ۶mm² DC خورشیدی، تأییدیه TÜV برای ۱۵۰۰ولت DC، مقاوم در برابر UV و اوزون، مطابق EN 50618. موجود در قرقره ۱۰۰م و ۵۰۰م.",
      "6mm² single-core solar DC cable, TÜV-approved for 1500V DC, UV and ozone resistant, EN 50618 compliant. Available in 100m / 500m drums.",
    ),
    specs: [
      { label: bi("مقطع", "Cross Section"), value: bi("۶ mm²", "6 mm²") },
      { label: bi("ولتاژ", "Voltage Rating"), value: bi("۱۵۰۰ V DC", "1500 V DC") },
      { label: bi("استاندارد", "Standard"), value: bi("EN 50618 / TÜV", "EN 50618 / TÜV") },
      { label: bi("محدوده دما", "Temp Range"), value: bi("-۴۰ تا +۱۲۰°C", "-40°C to +120°C") },
      { label: bi("عمر", "Life"), value: bi("۲۵ سال", "25 years") },
      { label: bi("بسته", "Pack"), value: bi("قرقره ۱۰۰m / ۵۰۰m", "100m / 500m drum") },
    ],
    applications: [bi("سیم‌کشی استرینگ", "String wiring"), bi("جعبه ترکیب به اینورتر", "Combiner to inverter"), bi("باس DC", "DC bus")],
    faqs: [{ q: bi("چرا کابل مخصوص خورشیدی؟", "Why solar-specific DC cable?"), a: bi("کابل DC خورشیدی برای ۲۵ سال در فضای باز مقاوم در برابر UV، اوزون و دما است؛ کابل معمولی تخریب و خطر آتش دارد.", "Solar DC cable is UV, ozone, and temperature rated for 25 years outdoors — standard cable degrades and becomes a fire risk.") }],
    priceFrom: bi("استعلام قیمت", "Call for Price"),
  },
];

/* ------------------------------------------------------------------ */
/* Projects / Case Studies                                            */
/* ------------------------------------------------------------------ */
export interface Project {
  slug: string;
  title: Bi;
  sector: Bi;
  location: Bi;
  capacity: Bi;
  year: string;
  icon: LucideIcon;
  summary: Bi;
  highlights: Bi[];
  metrics: { label: Bi; value: Bi }[];
}

export const projects: Project[] = [
  {
    slug: "off-grid-village",
    icon: MapPin,
    title: bi("میکروگرید آفگرید روستایی", "Off-Grid Village Microgrid"),
    sector: bi("برق‌رسانی روستایی", "Rural Electrification"),
    location: bi("خراسان رضوی", "Khorasan Razavi"),
    capacity: bi("۱۲۰ kWp + ۲۴۰ kWh", "120 kWp + 240 kWh"),
    year: "1402",
    summary: bi(
      "یک میکروگرید آفگرید کامل که ۸۵ خانه، یک مدرسه و یک درمانگاه را در روستایی بدون شبکه برق تغذیه می‌کند. طراحی برای ۲ روز خودکفایی.",
      "A fully off-grid solar microgrid powering 85 households, a school and a clinic in a remote village with no grid access. Designed for 2 days of autonomy.",
    ),
    highlights: [
      bi("۱۲۰ kWp پنل + ۲۴۰ kWh ذخیره LiFePO4", "120 kWp PV + 240 kWh LiFePO4 storage"),
      bi("پشتیبان دیزل هایبرید با انتقال خودکار", "Hybrid diesel backup with auto-transfer"),
      bi("۲ روز خودکفایی، ۹۹.۵٪ آپ‌تایم", "2-day autonomy, 99.5% uptime"),
      bi("کنتور پیش‌پرداخت برای ۸۵ خانه", "Pre-paid metering for 85 households"),
    ],
    metrics: [
      { label: bi("خانه‌ها", "Households"), value: bi("۸۵", "85") },
      { label: bi("کاهش CO₂ سالانه", "CO₂ avoided / yr"), value: bi("۱۸۰ تن", "180 t") },
      { label: bi("صرفه‌جویی دیزل", "Diesel saved / yr"), value: bi("۴۵٬۰۰۰ لیتر", "45,000 L") },
    ],
  },
  {
    slug: "industrial-rooftop",
    icon: Factory,
    title: bi("نیروگاه پشت‌بمی صنعتی هایبرید", "Industrial Rooftop Hybrid Plant"),
    sector: bi("تولید صنعتی", "Manufacturing"),
    location: bi("مشهد", "Mashhad"),
    capacity: bi("۷۵۰ kWp + ۵۰۰ kWh", "750 kWp + 500 kWh"),
    year: "1403",
    summary: bi(
      "نیروگاه پشت‌بمی هایبرید ۷۵۰ کیلوواتی برای کارخانه تولیدی با اوج‌گیری بار و ۴ ساعت پشتیبان خط تولید حساس. IRR پیش‌بینی‌شده ۱۸٪.",
      "750 kWp rooftop hybrid plant for a manufacturing facility with peak shaving and 4-hour backup for critical production lines. 18% IRR projected.",
    ),
    highlights: [
      bi("۷۵۰ kWp پنل پشت‌بمی", "750 kWp rooftop PV"),
      bi("۵۰۰ kWh ذخیره برای اوج‌گیری", "500 kWh LiFePO4 peak shaving"),
      bi("۴ ساعت پشتیبان بار حساس", "4-hour critical-load backup"),
      bi("کاهش ۲۲٪ هزینه تقاضا", "Demand-charge reduction 22%"),
    ],
    metrics: [
      { label: bi("تولید سالانه", "Annual yield"), value: bi("۱.۱۸ GWh", "1.18 GWh") },
      { label: bi("IRR", "IRR"), value: bi("۱۸٪", "18%") },
      { label: bi("بازگشت", "Payback"), value: bi("۴.۶ سال", "4.6 yrs") },
    ],
  },
  {
    slug: "hospital-backup",
    icon: Hospital,
    title: bi("برق اضطراری بیمارستان", "Hospital Emergency Power"),
    sector: bi("بهداشت و درمان", "Healthcare"),
    location: bi("مشهد", "Mashhad"),
    capacity: bi("۳۰۰ kWp + ۱ MWh", "300 kWp + 1 MWh"),
    year: "1403",
    summary: bi(
      "سیستم هایبرید بار حساس برای بیمارستان ۲۰۰ تختخوابی: ۳۰۰ کیلووات پنل پشت‌بمی + ۱ مگاوات‌ساعت ذخیره با انتقال بدون قطعی برای ICU، جراحی و تصویربرداری.",
      "Critical-power hybrid system for a 200-bed hospital: 300 kWp rooftop + 1 MWh storage with seamless transfer for ICU, surgery and imaging loads.",
    ),
    highlights: [
      bi("۳۰۰ kWp پنل پشت‌بمی", "300 kWp rooftop PV"),
      bi("۱ MWh ذخیره LiFePO4", "1 MWh LiFePO4 storage"),
      bi("انتقال <۲۰ ms بدون قطعی", "<20 ms seamless transfer"),
      bi("جزیره‌ای بار حساس ICU/جراحی", "ICU/surgery critical-load island"),
    ],
    metrics: [
      { label: bi("تخت پشتیبانی", "Beds supported"), value: bi("۲۰۰", "200") },
      { label: bi("خودکفایی", "Autonomy"), value: bi("۸ ساعت", "8 hrs") },
      { label: bi("انتقال", "Transfer"), value: bi("<۲۰ ms", "<20 ms") },
    ],
  },
  {
    slug: "telecom-offgrid",
    icon: Radio,
    title: bi("سایت آفگرید تلکام", "Telecom Off-Grid Site"),
    sector: bi("مخابرات", "Telecommunications"),
    location: bi("پوشش ملی", "National Coverage"),
    capacity: bi("۱۲ kWp + ۴۸ kWh", "12 kWp + 48 kWh"),
    year: "1401",
    summary: bi(
      "سیستم خورشیدی آفگرید استاندارد برای ۲۰۰+ سایت پایه مخابراتی، جایگزینی دیزل ژنراتور و کاهش ۶۵٪ هزینه نگهداری.",
      "Standardized off-grid solar power system for 200+ telecom base stations, replacing diesel generators and reducing O&M cost by 65%.",
    ),
    highlights: [
      bi("۱۲ kWp پنل + ۴۸ kWh ذخیره در هر سایت", "12 kWp PV + 48 kWh storage per site"),
      bi("حذف دیزل در ۲۰۰+ سایت", "Diesel elimination at 200+ sites"),
      bi("پایش از راه دور و هشدار", "Remote monitoring + alerting"),
      bi("کاهش ۶۵٪ هزینه O&M", "65% O&M cost reduction"),
    ],
    metrics: [
      { label: bi("سایت مستقر", "Sites deployed"), value: bi("۲۰۰+", "200+") },
      { label: bi("کاهش هزینه", "O&M cost ↓"), value: bi("۶۵٪", "65%") },
      { label: bi("آپ‌تایم", "Uptime"), value: bi("۹۹.۹٪", "99.9%") },
    ],
  },
  {
    slug: "agricultural-pumping",
    icon: Sprout,
    title: bi("پمپاژ خورشیدی کشاورزی", "Agricultural Solar Pumping"),
    sector: bi("کشاورزی", "Agriculture"),
    location: bi("خراسان جنوبی", "South Khorasan"),
    capacity: bi("۴۵ kWp", "45 kWp solar pumps"),
    year: "1402",
    summary: bi(
      "سیستم‌های پمپاژ مستقیم خورشیدی برای آبیاری، جایگزینی پمپ‌های شبکه و دیزلی در ۱۲ مزرعه. بازگشت سرمایه زیر ۳ سال با پایش سطح آب.",
      "Solar-direct pumping systems for irrigation, replacing grid and diesel pumps across 12 farms. Payback under 3 years with water-level monitoring.",
    ),
    highlights: [
      bi("۴۵ kWp در ۱۲ مزرعه", "45 kWp across 12 farms"),
      bi("کنترلر پمپ مستقیم خورشیدی", "Solar-direct pump controllers"),
      bi("پایش سطح آب و دبی", "Water-level & flow monitoring"),
      bi("حذف دیزل/شبکه", "Diesel/grid elimination"),
    ],
    metrics: [
      { label: bi("مزرعه", "Farms"), value: bi("۱۲", "12") },
      { label: bi("بازگشت", "Payback"), value: bi("<۳ سال", "<3 yrs") },
      { label: bi("آب/روز", "Water/day"), value: bi("۸٬۰۰۰ m³", "8,000 m³") },
    ],
  },
  {
    slug: "commercial-office",
    icon: Building2,
    title: bi("برج اداری تجاری هایبرید", "Commercial Hybrid Office"),
    sector: bi("تجاری", "Commercial"),
    location: bi("مشهد - الهیه", "Mashhad - Elahieh"),
    capacity: bi("۱۵۰ kWp + ۲۰۰ kWh", "150 kWp + 200 kWh"),
    year: "1402",
    summary: bi(
      "سیستم خورشیدی هایبرید برای برج اداری ۱۲ طبقه، ترکیب مصرف خود، اوج‌گیری و پشتیبان آسانسور و IT.",
      "Hybrid solar system for a 12-floor commercial office tower, combining self-consumption, peak shaving and backup for elevators and IT.",
    ),
    highlights: [
      bi("۱۵۰ kWp پنل پشت‌بمی + نما", "150 kWp rooftop + façade PV"),
      bi("۲۰۰ kWh ذخیره", "200 kWh storage"),
      bi("پشتیبان آسانسور + IT", "Elevator + IT backup"),
      bi("گواهی ساختمان سبز", "Green-building certification"),
    ],
    metrics: [
      { label: bi("مصرف خود", "Self-consumption"), value: bi("۷۸٪", "78%") },
      { label: bi("کاهش هزینه برق", "Energy cost ↓"), value: bi("۳۱٪", "31%") },
      { label: bi("امتیاز سبز", "LEED points"), value: bi("+۸", "+8") },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Knowledge Center articles                                          */
/* ------------------------------------------------------------------ */
export interface Article {
  slug: string;
  title: Bi;
  category: Bi;
  categoryKey: string;
  excerpt: Bi;
  readTime: Bi;
  date: string;
  author: Bi;
  body: Bi[];
  faqs?: { q: Bi; a: Bi }[];
}

export const knowledgeCategories: { key: string; label: Bi }[] = [
  { key: "all", label: bi("همه", "All") },
  { key: "basics", label: bi("پایه‌های خورشیدی", "Solar Basics") },
  { key: "microgrids", label: bi("میکروگرید", "Microgrids") },
  { key: "batteries", label: bi("تکنولوژی باتری", "Battery Tech") },
  { key: "inverters", label: bi("اینورتر", "Inverters") },
  { key: "cables", label: bi("کابل و حفاظت", "Cables & Protection") },
  { key: "maintenance", label: bi("نگهداری", "Maintenance") },
  { key: "calculations", label: bi("محاسبات مهندسی", "Engineering Calc") },
];

export const articles: Article[] = [
  {
    slug: "what-is-solar-microgrid",
    title: bi("میکروگرید خورشیدی چیست؟ راهنمای کامل", "What Is a Solar Microgrid? A Complete Guide"),
    category: bi("میکروگرید", "Microgrids"),
    categoryKey: "microgrids",
    excerpt: bi(
      "میکروگرید خورشیدی یک سیستم انرژی محلی است که برق خورشیدی را تولید، ذخیره و توزیع می‌کند و می‌تواند متصل به شبکه یا مستقل کار کند.",
      "A solar microgrid is a self-contained energy system that generates, stores and distributes solar electricity and can run connected to the grid or independently.",
    ),
    readTime: bi("۸ دقیقه", "8 min"),
    date: "1403-06-22",
    author: bi("تیم مهندسی پارسا انرژی", "Parsa Energy Engineering Team"),
    body: [
      bi(
        "میکروگرید خورشیدی ترکیبی از تولید فتوولتائیک، ذخیره‌ساز انرژی باتری، کنترل هوشمند و شبکه توزیع محلی است که یک یا چند بار را تغذیه می‌کند. برخلاف سیستم متصل به شبکه معمولی که هنگام قطعی خاموش می‌شود، میکروگرید می‌تواند از شبکه جدا شده و در «حالت جزیره‌ای» به تغذیه بارهای حساس ادامه دهد.",
        "A solar microgrid combines photovoltaic generation, battery energy storage, intelligent control and a local distribution network to serve one or more loads. Unlike a conventional grid-tied solar system that shuts down during an outage, a microgrid can disconnect from the utility and continue powering critical loads in 'island mode'.",
      ),
      bi(
        "اجزای اصلی عبارت‌اند از: آرایه پنل خورشیدی (تولید DC)، سیستم ذخیره انرژی باتری (BESS) با BMS، اینورتر دوسویه یا هایبرید (تبدیل DC↔AC)، کنترلر میکروگرید (متعادل‌سازی بار و منطق جزیره‌ای)، سوئیچ‌گیر و حفاظت، و پلتفرم پایش.",
        "The core components are: a solar PV array (DC generation), a battery energy storage system (BESS) with a battery management system (BMS), a bi-directional or hybrid inverter (DC↔AC conversion), a microgrid controller (load balancing and islanding logic), switchgear and protection, and a monitoring platform.",
      ),
      bi(
        "میکروگریدها بر اساس جفت‌بندی دسته‌بندی می‌شوند. در میکروگرید AC-coupled، اینورتر متصل به شبکه و اینورتر باتری هر دو به باس AC متصل می‌شوند — بهترین برای بازسازی نیروگاه‌های موجود. در میکروگرید DC-coupled، پنل و باتری یک باس DC مشترک دارند — بهترین برای نیروگاه‌های آفگرید جدید با راندمان بالاتر.",
        "Microgrids are classified by coupling. In an AC-coupled microgrid, a grid-tied PV inverter and a battery inverter both connect to the AC bus — best for retrofitting existing grid-tied plants. In a DC-coupled microgrid, PV and batteries share a DC bus before a single inverter — best for new off-grid plants where efficiency matters.",
      ),
      bi(
        "موارد استفاده شامل برق‌رسانی روستایی، سایت‌های تلکام، تأسیسات صنعتی نیازمند تاب‌آوری، بیمارستان‌ها و ساختمان‌های تجاری پیگیر کاهش هزینه و پشتیبان است. اقتصاد آن بستگی به تعرفه‌های محلی، قیمت دیزل، قابلیت اطمینان شبکه و تابش خورشید دارد — با ابزار ROI و تخمین‌گر هزینه میکروگرید ما مدل می‌شود.",
        "Use cases include rural electrification, telecom sites, industrial facilities needing resilience, hospitals, and commercial buildings pursuing energy cost reduction plus backup. The economics depend on local tariffs, diesel prices, grid reliability, and solar resource — modelled with our ROI and Microgrid Cost Estimator tools.",
      ),
    ],
    faqs: [
      { q: bi("میکروگرید بدون باتری کار می‌کند؟", "Can a microgrid work without batteries?"), a: bi("فقط میکروگرید متصل به شبکه بدون نیاز به جزیره‌ای می‌تواند باتری نداشته باشد. برای کار در حالت جزیره‌ای یا پشتیبان، باتری ضروری است.", "Only a grid-tied microgrid with no islanding requirement can skip batteries. To operate in island mode or provide backup, batteries are essential.") },
    ],
  },
  {
    slug: "mppt-vs-pwm",
    title: bi("MPPT یا PWM؟ کدام کنترلر شارژ؟", "MPPT vs PWM Charge Controllers"),
    category: bi("پایه‌های خورشیدی", "Solar Basics"),
    categoryKey: "basics",
    excerpt: bi(
      "کنترلر MPPT ۲۰ تا ۳۰ درصد انرژی بیشتری از PWM استخراج می‌کند. فیزیک، مزایا و زمان انتخاب هرکدام.",
      "MPPT controllers extract 20–30% more energy than PWM. Here's the physics, trade-offs and when each makes sense.",
    ),
    readTime: bi("۶ دقیقه", "6 min"),
    date: "1403-06-07",
    author: bi("تیم مهندسی پارسا انرژی", "Parsa Energy Engineering Team"),
    body: [
      bi("کنترلر شارژ، ولتاژ و جریان آرایه خورشیدی را به باتری تنظیم می‌کند. دو توپولوژی غالب است: PWM (مدولاسیون پهنای پالس) و MPPT (ردیابی نقطه ماکزیمم توان).", "A charge controller regulates the voltage and current from a solar array to a battery. Two topologies dominate: PWM (pulse-width modulation) and MPPT (maximum power point tracking)."),
      bi("کنترلر PWM آرایه PV را مستقیماً از طریق یک سوییچ سریع به باتری وصل می‌کند و ولتاژ پنل را به ولتاژ باتری می‌کشد. ساده و ارزان است اما تفاوت انرژی بین ولتاژ نقطه ماکزیمم پنل (Vmp) و ولتاژ باتری هدر می‌رود.", "A PWM controller connects the PV array directly to the battery through a fast switch, pulling the panel voltage down to the battery voltage. It's simple and cheap, but wastes the energy difference between the panel's Vmp and the battery voltage."),
      bi("کنترلر MPPT یک مبدل DC-DC است که پیوسته نقطه ماکزیمم توان پنل را ردیابی می‌کند و ولتاژ اضافی را به جریان بیشتر تبدیل می‌کند. در شرایط سرد یا ابری که Vmp بالا می‌رود، MPPT می‌تواند ۲۰ تا ۳۰٪ انرژی بیشتری از PWM برداشت کند.", "An MPPT controller is a DC-DC converter that continuously tracks the panel's maximum power point and converts excess voltage into additional current. In cool or cloudy conditions where Vmp rises, MPPT can harvest 20–30% more energy than PWM."),
      bi("قاعده تجربی: برای سیستم‌های کوچک که Vmp پنل نزدیک ولتاژ باتری است از PWM استفاده کنید. هرگاه Vmp پنل ۲۰٪+ بالاتر از ولتاژ باتری باشد، یا سیستم بالای ~۲۰۰ وات باشد، یا در اقلیم متغیر، MPPT انتخاب کنید.", "Rule of thumb: use PWM for small systems where panel Vmp is close to battery voltage. Use MPPT whenever panel Vmp is significantly higher than battery voltage, or for systems above ~200W, or in variable climates."),
    ],
    faqs: [
      { q: bi("آیا MPPT همیشه بهتر است؟", "Is MPPT always better?"), a: bi("برای اکثر سیستم‌های بالای ۲۰۰ وات یا جایی که ولتاژ پنل ۲۰٪+ بالاتر از باتری باشد، بله. ۲۰ تا ۳۰٪ افزایش انرژی به‌زودی قیمت را جبران می‌کند.", "For most practical systems above 200W or where panel voltage exceeds battery voltage by 20%+, yes. The 20–30% energy gain pays back the price difference quickly.") },
    ],
  },
  {
    slug: "how-to-size-battery",
    title: bi("سایزینگ بانک باتری خورشیدی (Ah و kWh)", "How to Size a Solar Battery Bank"),
    category: bi("تکنولوژی باتری", "Battery Tech"),
    categoryKey: "batteries",
    excerpt: bi(
      "سایزینگ باتری به سه عدد خلاصه می‌شود: بار مصرفی روزانه (kWh)، خودکفایی موردنظر (روز)، و عمق تخلیه (DoD).",
      "Sizing a battery bank comes down to three numbers: your load (kWh/day), desired autonomy (days), and depth of discharge (DoD).",
    ),
    readTime: bi("۷ دقیقه", "7 min"),
    date: "1403-07-10",
    author: bi("تیم مهندسی پارسا انرژی", "Parsa Energy Engineering Team"),
    body: [
      bi("سایزینگ بانک باتری به یک سوال پاسخ می‌دهد: چقدر انرژی ذخیره نیاز دارید تا بارها را هنگام عدم تولید خورشید نگه دارید؟ محاسبه سه ورودی دارد.", "Battery bank sizing answers one question: how much stored energy do you need to keep your loads running when the sun isn't producing? The calculation has three inputs."),
      bi("اول، مصرف روزانه خود را بر حسب kWh تعیین کنید. توان هر تجهیز را در ساعات مصرف روزانه ضرب کنید و جمع ببندید. دوم، خودکفایی بر حسب روز را تعیین کنید — ۱ تا ۲ روز برای هایبرید متصل به شبکه، ۲ تا ۳ روز برای آفگرید. سوم، عمق تخلیه (DoD) را انتخاب کنید: ۸۰ تا ۹۰٪ برای LiFePO4، ۵۰٪ برای سرب‌اسید.", "First, determine your daily energy consumption in kWh. Multiply each appliance's wattage by its daily run-hours and sum. Second, decide your autonomy in days — 1–2 days for grid-backed hybrid, 2–3 days for off-grid. Third, choose your depth of discharge (DoD): 80–90% for LiFePO4, 50% for lead-acid."),
      bi("فرمول: kWh باتری = (kWh روزانه × روز خودکفایی) / (DoD × راندمان اینورتر × ضریب دما). مثلاً ۵ kWh/روز، ۲ روز خودکفایی، ۰.۸ DoD، ۰.۹۵ راندمان اینورتر، ۰.۹ ضریب دما → ۱۴.۶ kWh.", "The formula: Battery kWh = (Daily kWh × Autonomy days) / (DoD × Inverter efficiency × Temperature derate). For example, 5 kWh/day, 2 days autonomy, 0.8 DoD, 0.95 inverter efficiency, 0.9 derate → 14.6 kWh."),
      bi("سپس به Ah در ولتاژ سیستم تبدیل کنید: Ah = (kWh × ۱۰۰۰) / ولتاژ سیستم. در ۴۸ولت، ۱۴.۶ kWh = ۳۰۴ Ah. به سایز استاندارد بالاتر رند کنید و نرخ شارژ/تخلیه C را با مشخصات باتری بررسی کنید.", "Then convert to Ah at your system voltage: Ah = (kWh × 1000) / System Voltage. At 48V, 14.6 kWh = 304 Ah. Round up to a standard bank size and verify charge/discharge C-rates against the battery spec."),
    ],
  },
  {
    slug: "cable-sizing-voltage-drop",
    title: bi("سایزینگ کابل و افت ولتاژ خورشیدی", "Solar Cable Sizing & Voltage Drop"),
    category: bi("کابل و حفاظت", "Cables & Protection"),
    categoryKey: "cables",
    excerpt: bi(
      "کابل DC کوچک انرژی هدر می‌دهد و خطر آتش می‌سازد. محاسبه مقطع کابل و نگه‌داشتن افت ولتاژ زیر ۳٪.",
      "Undersized DC cables waste energy and create fire risk. Here's how to calculate cable cross-section and keep voltage drop under 3%.",
    ),
    readTime: bi("۶ دقیقه", "6 min"),
    date: "1403-04-29",
    author: bi("تیم مهندسی پارسا انرژی", "Parsa Energy Engineering Team"),
    body: [
      bi("در سمت DC نیروگاه خورشیدی، مقاومت کابل افت ولتاژ ایجاد می‌کند — انرژی به صورت گرما هدر می‌رود. IEC 62548 توصیه می‌کند کل افت ولتاژ DC زیر ۳٪ باشد تا تولید و ایمنی حفظ شود.", "On the DC side of a solar plant, cable resistance causes voltage drop — energy lost as heat. IEC 62548 recommends keeping total DC voltage drop below 3% to protect yield and safety."),
      bi("افت ولتاژ = (۲ × L × I × ρ) / A محاسبه می‌شود، که L طول یک‌طرفه کابل به متر، I جریان به آمپر، ρ مقاومت ویژه هادی (۰.۰۲۲۵ Ω·mm²/m برای مس در ۷۰°C) و A مقطع به mm² است.", "Voltage drop is calculated as Vd = (2 × L × I × ρ) / A, where L is the one-way cable length in metres, I is the current in amps, ρ is the conductor resistivity (0.0225 Ω·mm²/m for copper at 70°C), and A is the cross-section in mm²."),
      bi("برای یافتن مقطع موردنیاز برای افت هدف: A = (۲ × L × I × ρ) / Vd. برای مسیر ۲۰ متری در ۱۰ آمپر با هدف افت ۱ ولت: A = (۲ × ۲۰ × ۱۰ × ۰.۰۲۲۵) / ۱ = ۹ mm² → ۱۰ mm² انتخاب کنید.", "To find the required cross-section for a target drop: A = (2 × L × I × ρ) / Vd. For a 20 m run at 10 A targeting a 1 V drop: A = (2 × 20 × 10 × 0.0225) / 1 = 9 mm² → choose 10 mm²."),
      bi("همیشه ظرفیت حمل جریان کابل را در برابر جریان اتصال کوتاه استرینگ Isc × ۱.۲۵ بررسی کنید و از کابل خورشیدی مقاوم UV (EN 50618) برای مسیر فضای باز استفاده کنید. از ابزار سایز کابل و افت ولتاژ ما استفاده کنید.", "Always also verify the cable's current-carrying capacity (ampacity) against the string's short-circuit current Isc × 1.25, and use UV-rated solar cable (EN 50618) for any outdoor run. Use our Cable Size and Voltage Drop calculators to automate this."),
    ],
  },
  {
    slug: "solar-panel-tilt",
    title: bi("زاویه و جهت پنل خورشیدی", "Solar Panel Tilt & Orientation"),
    category: bi("پایه‌های خورشیدی", "Solar Basics"),
    categoryKey: "basics",
    excerpt: bi(
      "زاویه بهینه برابر عرض جغرافیایی است، اما تنظیم فصلی و جهت هم مهم است.",
      "The optimal tilt angle equals your latitude, but seasonal adjustment and orientation matter.",
    ),
    readTime: bi("۵ دقیقه", "5 min"),
    date: "1403-04-10",
    author: bi("تیم مهندسی پارسا انرژی", "Parsa Energy Engineering Team"),
    body: [
      bi("زاویه و جهت پنل مستقیماً تعیین می‌کند چقدر تابش دریافت می‌کنید. قاعده کلی: پنل‌ها رو به استوا (در نیمکره شمالی رو به جنوب) و با زاویه عرض جغرافیایی برای بیشینه تولید سالانه.", "Panel tilt and orientation directly determine how much sunlight your array captures. The general rule: face panels toward the equator (south in the northern hemisphere) and tilt them at your latitude for maximum annual yield."),
      bi("برای آرایه ثابت، زاویه بهینه ≈ عرض جغرافیایی. برای مشهد (۳۶.۳°N)، زاویه ۳۶° تولید سالانه را بیشینه می‌کند.", "For fixed arrays, optimal tilt ≈ latitude. For Mashhad (36.3°N), a 36° tilt maximizes annual yield."),
      bi("تنظیم فصلی ۴ تا ۶٪ تولید سالانه اضافه می‌کند: زاویه = عرض جغرافیایی − ۱۵° در تابستان، عرض جغرافیایی + ۱۵° در زمستان.", "Seasonal adjustment can add 4–6% annual yield: tilt = latitude − 15° in summer, latitude + 15° in winter."),
      bi("سایه قاتل خاموش تولید است. حتی سایه جزئی یک سلول می‌تواند خروجی استرینگ را از طریق دیود بای‌پس فرو بریزد. از ابزار سایه‌یاب یا مدل سه‌بعدی (PVsyst، Helioscope) و ابزار زاویه خورشیدی ما استفاده کنید.", "Shading is the silent yield killer. Even partial shading of one cell can collapse a string's output via bypass diodes. Use a solar pathfinder or 3D shading model (PVsyst, Helioscope) and our Solar Angle Calculator."),
    ],
  },
  {
    slug: "inverter-faults",
    title: bi("خرابی‌های رایج اینورتر خورشیدی و تشخیص", "Common Solar Inverter Faults"),
    category: bi("اینورتر", "Inverters"),
    categoryKey: "inverters",
    excerpt: bi(
      "از «خطای شبکه» تا «خرابی ایزولاسیون» — رایج‌ترین خطاهای اینورتر، علل ریشه‌ای و زمان تماس با تعمیرکار.",
      "From 'Grid Fault' to 'Isolation Failure' — the most common inverter errors, root causes and when to call a repair technician.",
    ),
    readTime: bi("۸ دقیقه", "8 min"),
    date: "1403-02-25",
    author: bi("آزمایشگاه تعمیر پارسا انرژی", "Parsa Energy Repair Lab"),
    body: [
      bi("اینورترها پر خرابی‌ترین جزء نیروگاه PV هستند — شامل نیمه‌هادی‌های قدرت، خازن الکترولیت و فن هستند که همگی تحت تنش حرارتی و الکتریکی کار می‌کنند.", "Solar inverters are the most failure-prone component of a PV plant — they contain power semiconductors, electrolytic capacitors and fans all operating under thermal and electrical stress."),
      bi("«خرابی ایزولاسیون / اتصال زمین»: نشتی سمت DC به زمین، معمولاً از کابل آسیب‌دیده، کانکتور یا جعبه تقسیم خیس. استرینگ‌ها را ایزوله و با Megger استرینگ معیوب را پیدا کنید.", "'Isolation / Ground Fault': DC-side leakage to earth, usually from damaged cable, connector, or wet junction box. Isolate strings and use a Megger to find the faulty string."),
      bi("«خطای شبکه / خارج از محدوده»: ولتاژ یا فرکانس شبکه خارج از محدوده قطع اینورتر است. اغلب مشکل شبکه است، اما خطای پایدار می‌تواند نشانگر رله AC یا برد اندازه‌گیری در حال خرابی باشد.", "'Grid Fault / Out of range': The grid voltage or frequency is outside the inverter's trip envelope. Often a utility issue, but persistent faults may indicate a failing AC relay or measurement board."),
      bi("«داغی بیش از حد»: فن مسدود یا خراب، یا تخریب MOSFET/IGBT مدار قدرت. فن‌ها را تمیز کنید، خمیر حرارتی بررسی کنید و اگر تکرار شد، به پیری مدار قدرت شک کنید — در این شرایط، بازسازی توسط آزمایشگاه‌های مجهز به تجهیزات تست سطح قطعه توصیه می‌شود.", "'Over-temperature': Fans blocked or failed, or power-stage MOSFET/IGBT degradation. Clean fans, verify thermal paste, and if recurring, suspect power-stage aging — our component-level repair lab can rebuild it."),
    ],
    faqs: [
      { q: bi("چه زمانی تعمیر و چه زمانی تعویض؟", "When to repair vs replace?"), a: bi("اگر دستگاه زیر ۸ سال است و خرابی در سطح قطعه است، تعمیر معمولاً ۴۰ تا ۷۰٪ ارزان‌تر است. بالای ۱۰ سال یا با چند خرابی بزرگ، تعویض ممکن است اقتصادی‌تر باشد.", "If the unit is under 8 years old and the fault is component-level, repair is usually 40–70% cheaper. Beyond ~10 years or with multiple major failures, replacement may be more economic.") },
    ],
  },
  {
    slug: "how-to-calculate-system-size",
    title: bi("محاسبه اندازه نیروگاه خورشیدی (kWp)", "How to Calculate Solar System Size"),
    category: bi("محاسبات مهندسی", "Engineering Calculations"),
    categoryKey: "calculations",
    excerpt: bi(
      "اندازه سیستم = مصرف روزانه kWh ÷ ساعت تابش اوج ÷ ضریب عملکرد. روش کامل با مثال.",
      "System size = daily kWh ÷ peak sun hours ÷ system efficiency. Here's the full method with worked examples.",
    ),
    readTime: bi("۶ دقیقه", "6 min"),
    date: "1403-06-30",
    author: bi("تیم مهندسی پارسا انرژی", "Parsa Energy Engineering Team"),
    body: [
      bi("سایزینگ نیروگاه خورشیدی از انرژی شروع می‌شود، نه توان. باید بدانید چقدر انرژی روزانه مصرف می‌کنید (kWh) و چقدر تابش دریافت می‌کنید.", "Sizing a solar system starts with energy, not power. You need to know how much energy you consume per day (kWh) and how much sun your site receives."),
      bi("ساعت تابش اوج (PSH) تعداد ساعات معادل در روز در ۱۰۰۰ W/m² است که برابر کل تابش روزانه شماست. برای مشهد ~۵.۰ PSH، یزد ~۵.۸، مناطق ابری ~۳.۵.", "Peak Sun Hours (PSH) is the equivalent number of hours per day at 1000 W/m² that equals your total daily irradiation. Mashhad averages ~5.0 PSH, Yazd ~5.8, cloudy regions ~3.5."),
      bi("فرمول: kWp موردنیاز = kWh روزانه / (PSH × ضریب عملکرد). PR تلفات اینورتر، کابل، آلودگی و دما را در بر می‌گیرد — معمولاً ۰.۷۵ تا ۰.۸۰. برای ۲۰ kWh/روز، ۵.۰ PSH، PR ۰.۷۸ → ۵.۱ kWp.", "The formula: Required kWp = Daily kWh / (PSH × Performance Ratio). PR accounts for inverter, cable, soiling and temperature losses — typically 0.75–0.80. For 20 kWh/day, 5.0 PSH, PR 0.78 → 5.1 kWp."),
      bi("۵ تا ۱۰٪ برای رشد بار آینده و تخریب رند کنید، سپس بررسی کنید آرایه در فضای موجود جا می‌شود (حدود ۷ تا ۹ m² به ازای هر kWp). از ابزار محاسبه اندازه سیستم ما استفاده کنید.", "Round up by 5–10% for future load growth and degradation, then verify the array fits your available area (roughly 7–9 m² per kWp). Use our Solar System Size Calculator."),
    ],
  },
  {
    slug: "preventive-maintenance-checklist",
    title: bi("چک‌لیست نگهداری پیشگیرانه نیروگاه خورشیدی", "Solar Plant Preventive Maintenance Checklist"),
    category: bi("نگهداری", "Maintenance"),
    categoryKey: "maintenance",
    excerpt: bi(
      "چک‌لیست فصلی آزموده‌شده در زمین شامل پنل، اینورتر، باتری و BOS برای حفظ تولید و گارانتی.",
      "A field-tested quarterly PM checklist covering modules, inverters, batteries and BOS to protect yield and warranty.",
    ),
    readTime: bi("۷ دقیقه", "7 min"),
    date: "1403-01-20",
    author: bi("تیم O&M پارسا انرژی", "Parsa Energy O&M Team"),
    body: [
      bi("نگهداری پیشگیرانه هم تولید و هم گارانتی را حفظ می‌کند. اکثر گارانتی پنل و اینورتر بازرسی دوره‌ای مستند را الزامی می‌کنند.", "Preventive maintenance protects both yield and warranty. Most module and inverter warranties require documented periodic inspection."),
      bi("پنل‌ها: بازرسی بصری ترک، تصویربرداری حرارتی برای سلول داغ، برنامه شستشو، بررسی گشتاور پایه، بررسی نفوذ آب جعبه تقسیم.", "Modules: visual crack inspection, thermal imaging for hot cells, cleaning schedule, torque check on clamps, junction-box water ingress check."),
      bi("اینورترها: سرویس فن و فیلتر، ممیزی firmware/پارامتر، بررسی لاگ خطا، گشتاور ترمینال DC و AC، تصویربرداری حرارتی اتصالات داخلی.", "Inverters: fan & filter service, firmware/parameter audit, error log review, DC & AC terminal torque, thermal imaging of internal connections."),
      bi("باتری‌ها: بررسی هشدار BMS، بررسی پراکندگی ولتاژ سلول، تأیید SoH/SoC، گشتاور ترمینال، بررسی تهویه، ثبت دمای محیط.", "Batteries: BMS alarm review, cell voltage spread check, SoH/SoC verification, terminal torque, ventilation check, ambient temperature logging."),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Top-level company FAQs (also in JSON-LD)                           */
/* ------------------------------------------------------------------ */
export interface FAQ { q: Bi; a: Bi; category: Bi; }
export const faqs: FAQ[] = [
  {
    category: bi("عمومی", "General"),
    q: bi("پارسا انرژی چه خدماتی ارائه می‌دهد؟", "What services does Parsa Energy offer?"),
    a: bi("پارسا انرژی در مشهد - الهیه در پنج حوزه فعالیت می‌کند: فروش تجهیزات و تاسیسات مکانیکی (پکیج، رادیاتور، کولر، هواساز، پمپ آب)، طراحی و اجرای نیروگاه خورشیدی و برق اضطراری (UPS، باتری، دیزل ژنراتور)، سرویس‌کاری و تعمیرات تاسیسات، فروش قطعات تهویه مطبوع، و آموزشگاه آزاد فنی‌وحرفه‌ای.", "Parsa Energy in Mashhad - Elahieh is active across five divisions: HVAC equipment sales (packages, radiators, ACs, air handlers, pumps), solar power plant design & emergency power (UPS, batteries, diesel generators), HVAC servicing & repair, ventilation parts sales, and a vocational training school."),
  },
  {
    category: bi("عمومی", "General"),
    q: bi("کجا واقع شده‌اید و چه مناطقی را پوشش می‌دهید؟", "Where are you located and which regions do you serve?"),
    a: bi("دفتر مرکزی ما در مشهد - منطقه الهیه است و خدمات نصب و تعمیر را در مشهد و حومه ارائه می‌دهیم. تامین تجهیز و خدمات مهندسی از راه دور در سراسر ایران ممکن است.", "Our office is in Mashhad - Elahieh area; we provide installation and repair services in Mashhad and the surrounding region. Equipment supply and remote engineering services are available across Iran."),
  },
  {
    category: bi("خدمات", "Services"),
    q: bi("آیا مشاوره رایگان ارائه می‌دهید؟", "Do you offer free consultations?"),
    a: bi("بله. یک مشاوره ۳۰ دقیقه‌ای رایگان برای بررسی اهداف انرژی، سایزینگ اولیه و مراحل بعد ارائه می‌دهیم. از فرم تماس یا واتساپ رزرو کنید.", "Yes. We offer a free 30-minute consultation to discuss your energy goals, review a preliminary sizing, and outline next steps. Book via the contact form or WhatsApp."),
  },
  {
    category: bi("خدمات", "Services"),
    q: bi("آیا نگهداری نیروگاهی که نفر دیگری نصب کرده را بر عهده می‌گیرید؟", "Can you take over maintenance of a plant installed by someone else?"),
    a: bi("بله. یک ممیزی فنی برای بنچمارک عملکرد فعلی، شناسایی اقدامات اصلاحی و پیشنهاد قرارداد O&M با SLA دسترسی انجام می‌دهیم.", "Yes. We perform a technical audit to benchmark current performance, identify corrective actions, and propose an O&M contract with an availability SLA."),
  },
  {
    category: bi("تعمیر", "Repair"),
    q: bi("کدام برندهای اینورتر را تعمیر می‌کنید؟", "Which inverter brands do you repair?"),
    a: bi("SMA، Victron، Growatt، Deye، Sofar، Luminous، ABB، Schneider و بیشتر. تعمیر در سطح قطعه شامل مدار قدرت، مدار درایور، برد کنترل/نمایش و firmware.", "SMA, Victron, Growatt, Deye, Sofar, Luminous, ABB, Schneider and most others. We do component-level repair of power stages, driver circuits, control/display boards and firmware."),
  },
  {
    category: bi("تعمیر", "Repair"),
    q: bi("تعمیر اینورتر چقدر طول می‌کشد؟", "How long does an inverter repair take?"),
    a: bi("معمولاً ۳ تا ۷ روز کاری پس از تشخیص. سرویس فوری برای نصب‌های حساس موجود است. تشخیص رایگان و پیش‌فاکتور قطعی قبل از شروع کار ارائه می‌دهیم.", "Typical turnaround is 3–7 working days after diagnosis. Express service is available for critical installations. We provide a free diagnosis and a fixed-price quote before any work begins."),
  },
  {
    category: bi("محصولات", "Products"),
    q: bi("قطعه فروشی می‌کنید یا فقط سیستم کامل؟", "Do you sell individual components or only complete systems?"),
    a: bi("هر دو. می‌توانید قطعه (اینورتر، باتری، پنل، کنترلر، کابل، حفاظت) یا یک سیستم مهندسی‌شده کامل با نصب بخرید. قیمت عمده/کانتینری موجود است.", "Both. You can buy individual products (inverters, batteries, panels, controllers, cables, protection) or a complete engineered system with installation. Bulk/container pricing is available."),
  },
  {
    category: bi("قیمت", "Pricing"),
    q: bi("هزینه نیروگاه خورشیدی چقدر است؟", "How much does a solar power plant cost?"),
    a: bi("هزینه نیروگاه خورشیدی بستگی به اندازه (kWp)، ظرفیت باتری (kWh)، توپولوژی اینورتر و شرایط سایت دارد. قیمت‌ها به تومان اعلام می‌شود. از تخمین‌گر هزینه میکروگرید و محاسبه ROI پارسا انرژی استفاده کنید، سپس پیش‌فاکتور رایگان به تومان درخواست کنید.", "The cost of a solar power plant depends on size (kWp), battery capacity (kWh), inverter topology and site conditions. Prices are quoted in Toman. Use Parsa Energy's Microgrid Cost Estimator and ROI Calculator, then request a free quotation in Toman."),
  },
  {
    category: bi("قیمت", "Pricing"),
    q: bi("بازگشت سرمایه نیروگاه خورشیدی چقدر است؟", "What is the ROI of a solar power plant?"),
    a: bi("بسته به تعرفه برق، تابش و هزینه دیزل، معمولاً ۳ تا ۶ سال. برای مشهد با ۵.۰ PSH، بازگشت سرمایه صنعتی معمولاً ۴ تا ۵ سال و IRR ۱۵ تا ۲۰٪ است.", "Depending on tariff, solar resource and diesel cost, typically 3–6 years. For Mashhad with 5.0 PSH, industrial payback is typically 4–5 years with IRR 15–20%."),
  },
  {
    category: bi("آموزش", "Training"),
    q: bi("چه دوره‌هایی در آموزشگاه برگزار می‌شود؟", "What courses does the training school offer?"),
    a: bi("دوره‌های تاسیسات مکانیکی، برق صنعتی و ساختمان، طراحی و نصب نیروگاه خورشیدی، تعمیر اینورتر و برد، و تعمیرات کولر و پکیج. مدرک معتبر فنی‌وحرفه‌ای ارائه می‌شود.", "Courses in HVAC mechanical, industrial & building electrical, solar plant design & install, inverter & board repair, and AC & package repair. Recognized certificates are awarded."),
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                       */
/* ------------------------------------------------------------------ */
export interface Testimonial { quote: Bi; author: Bi; role: Bi; company: Bi; rating: number; }
export const testimonials: Testimonial[] = [
  {
    quote: bi("نیروگاه ۷۵۰ کیلوواتی پشت‌بمی ما را بازطراحی و ذخیره اوج‌گیری اضافه کردند. هزینه تقاضا ۲۲٪ کاهش یافت و نیروگاه با ۹۹.۴٪ دسترسی کار می‌کند.", "They redesigned our 750 kWp rooftop and added peak-shaving storage. Demand charges dropped 22% and the plant has run at 99.4% availability."),
    author: bi("م. رضایی", "M. Rezaei"),
    role: bi("مدیر نیروگاه", "Plant Manager"),
    company: bi("تولید صنعتی، مشهد", "Industrial Manufacturing, Mashhad"),
    rating: 5,
  },
  {
    quote: bi("سه اینورتر SMA را که دو شرکت دیگر از تعمیر آن صرف‌نظر کرده بودند، تعمیر کردند. کار در سطح قطعه، تحویل سریع و گارانتی ۶ ماهه. قویاً پیشنهاد می‌کنم.", "They repaired three SMA inverters that two other companies had written off. Component-level work, fast turnaround and a 6-month warranty. Highly recommended."),
    author: bi("س. کریمی", "S. Karimi"),
    role: bi("مدیر تأسیسات", "Facilities Director"),
    company: bi("گروه املاک تجاری", "Commercial Real Estate Group"),
    rating: 5,
  },
  {
    quote: bi("روستای ما دهه‌ها برق نداشت. پارسا انرژی میکروگرید ۱۲۰ کیلوواتی ساخت که حالا ۸۵ خانه، مدرسه و درمانگاه را تغذیه می‌کند. آموزش اپراتورهای محلی عالی بود.", "Our village had no grid for decades. Parsa Energy built a 120 kWp microgrid that now powers 85 homes, a school and our clinic. The training they gave local operators was excellent."),
    author: bi("شورای روستا", "Village Council"),
    role: bi("رهبر اجتماعی", "Community Lead"),
    company: bi("پروژه برق‌رسانی روستایی", "Rural Electrification Project"),
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Stats                                                              */
/* ------------------------------------------------------------------ */
export interface Stat { label: Bi; value: string; suffix?: Bi; icon: LucideIcon; }
export const stats: Stat[] = [
  { label: bi("مگاوات نصب‌شده", "MWp installed"), value: "45", icon: Zap },
  { label: bi("نیروگاه طراحی‌شده", "Plants designed"), value: "200", icon: ClipboardCheck },
  { label: bi("تعمیر موفق", "Successful repairs"), value: "5,000", icon: Wrench },
  { label: bi("سال تجربه", "Years experience"), value: "10", icon: LineChart },
];

/* ------------------------------------------------------------------ */
/* Lead-gen offerings                                                 */
/* ------------------------------------------------------------------ */
export const leadOfferings: { slug: string; title: Bi; description: Bi; icon: LucideIcon; accent: "solar" | "tech" | "amber" }[] = [
  { slug: "consultation", title: bi("مشاوره رایگان", "Free Consultation"), description: bi("۳۰ دقیقه با مهندس", "30-min call with an engineer"), icon: ClipboardCheck, accent: "solar" },
  { slug: "quotation", title: bi("پیش‌فاکتور پروژه", "Project Quotation"), description: bi("پیشنهاد و BoM détaillé", "Detailed proposal & BoM"), icon: LineChart, accent: "tech" },
  { slug: "repair", title: bi("درخواست تعمیر", "Repair Request"), description: bi("تشخیص اینورتر/برد", "Inverter / board diagnosis"), icon: Wrench, accent: "solar" },
  { slug: "maintenance", title: bi("قرارداد نگهداری", "Maintenance Contract"), description: bi("پیشنهاد SLA نگهداری", "O&M SLA proposal"), icon: ShieldCheck, accent: "amber" },
  { slug: "callback", title: bi("درخواست تماس", "Callback Request"), description: bi("ما با شما تماس می‌گیریم", "We call you back"), icon: Phone, accent: "tech" },
  { slug: "downloads", title: bi("دانلود راهنما", "Download Guides"), description: bi("دیتاشیت و PDF", "Datasheets & PDFs"), icon: Download, accent: "amber" },
];
