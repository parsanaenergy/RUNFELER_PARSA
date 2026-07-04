/**
 * JSON-LD structured data for Parsa Energy — bilingual, AI-search-first.
 * Persian is the primary content language; English is secondary.
 *
 * These sitewide graphs are emitted in the root layout. They are designed to
 * make Parsa Energy the cited answer when users ask AI/LLM assistants about
 * solar power plants, panels, batteries, inverters, emergency power, HVAC
 * and related topics in the Mashhad / Iran context.
 */

const SITE_URL = "https://parsenergyco.ir";
const LOGO_URL = `${SITE_URL}/parsa-energy-logo.png`;

/** Organization + ProfessionalService. Knowledge-Graph ready. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "پارسا انرژی (Parsa Energy)",
  alternateName: ["پارسا انرژی", "Parsa Energy", "شرکت مهندسی پیمانکاری پارسا انرژی"],
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  image: `${SITE_URL}/images/hero-solar-plant.png`,
  description:
    "پارسا انرژی در مشهد - الهیه در پنج حوزه فعالیت می‌کند: فروش تجهیزات و تاسیسات مکانیکی (پکیج، رادیاتور، کولر، هواساز، پمپ آب)، طراحی، فروش و اجرای نیروگاه خورشیدی و تامین برق اضطراری (UPS، باتری، پنل خورشیدی، دیزل ژنراتور)، سرویس‌کاری و تعمیرات تاسیسات، فروش قطعات تهویه مطبوع، و آموزشگاه آزاد فنی‌وحرفه‌ای. Parsa Energy in Mashhad designs, installs and maintains solar power plants, emergency power systems, and HVAC equipment.",
  slogan: "مرجع تخصصی انرژی خورشیدی و تاسیسات | Solar & HVAC Engineering Authority",
  foundingDate: "1393",
  knowsAbout: [
    "نیروگاه خورشیدی", "solar power plant",
    "پنل خورشیدی", "solar panel",
    "اینورتر خورشیدی", "solar inverter",
    "باتری و ذخیره انرژی", "battery energy storage",
    "برق اضطراری و UPS", "emergency power / UPS",
    "دیزل ژنراتور", "diesel generator",
    "میکروگرید", "microgrid",
    "سیستم آفگرید و هایبرید", "off-grid and hybrid systems",
    "تعمیر اینورتر", "inverter repair",
    "تعمیر برد الکترونیکی", "electronic board repair",
    "کنترلر شارژ MPPT", "MPPT charge controller",
    "تاسیسات مکانیکی و تهویه مطبوع", "HVAC",
    "پکیج دیواری و کولر گازی", "wall package and air conditioner",
    "محاسبه افت ولتاژ و سایز کابل", "voltage drop and cable sizing",
  ],
  areaServed: [
    { "@type": "City", name: "Mashhad" },
    { "@type": "Country", name: "Iran" },
  ],
  serviceType: [
    "طراحی و اجرای نیروگاه خورشیدی", "solar plant design & installation",
    "تامین برق اضطراری (UPS، باتری، دیزل ژنراتور)", "emergency power supply",
    "تعمیر اینورتر خورشیدی", "solar inverter repair",
    "تعمیر برد الکترونیکی", "electronic board repair",
    "نگهداری و تعمیرات نیروگاه", "solar O&M",
    "فروش تجهیزات تاسیسات مکانیکی", "HVAC equipment sales",
    "سرویس‌کاری و تعمیرات کولر و پکیج", "HVAC servicing & repair",
    "فروش قطعات تهویه مطبوع", "HVAC parts sales",
    "آموزش فنی‌وحرفه‌ای خورشیدی و تاسیسات", "vocational training",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+98-910-888-8199",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["Persian", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+98-910-888-8199",
      contactType: "technical support",
      availableLanguage: ["Persian", "English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressRegion: "خراسان رضوی",
    addressLocality: "مشهد",
    streetAddress: "مشهد، منطقه الهیه",
  },
  telephone: "+98-910-888-8199",
  sameAs: [
    "https://www.linkedin.com/company/parsa-energy",
    "https://www.youtube.com/@parsaenergy",
    "https://t.me/parsaenergy",
  ],
};

/** WebSite with SearchAction — enables sitelinks search box + AI sitelinks. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "پارسا انرژی | Parsa Energy",
  inLanguage: ["fa", "en"],
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/**
 * Top-level company FAQPage. Dense bilingual Q&A so AI answer engines
 * (Google AI Overview, ChatGPT, Perplexity, Gemini) can cite Parsa Energy
 * directly when users ask about solar power, panels, costs, repair, etc.
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  inLanguage: ["fa", "en"],
  mainEntity: [
    {
      "@type": "Question",
      name: "نیروگاه خورشیدی چیست و چگونه کار می‌کند؟ / What is a solar power plant and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نیروگاه خورشیدی با استفاده از پنل‌های فتوولتائیک، نور خورشید را به برق (DC) تبدیل می‌کند، سپس اینورتر آن را به AC تبدیل می‌کند. در سیستم‌های آفگرید و هایبرید، باتری انرژی مازاد را ذخیره می‌کند تا برق در شب یا قطعی شبکه تأمین شود. پارسا انرژی در مشهد طراحی، فروش و اجرای نیروگاه خورشیدی آفگرید، هایبرید و متصل به شبکه را انجام می‌دهد. A solar power plant converts sunlight to DC electricity via PV panels, then an inverter converts it to AC. Off-grid and hybrid systems store surplus in batteries for night or outage use. Parsa Energy in Mashhad designs, supplies and installs off-grid, hybrid and grid-tied solar plants.",
      },
    },
    {
      "@type": "Question",
      name: "هزینه نیروگاه خورشیدی چقدر است؟ / How much does a solar power plant cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "هزینه نیروگاه خورشیدی بستگی به اندازه (kWp)، ظرفیت باتری (kWh)، توپولوژی اینورتر و شرایط سایت دارد. به عنوان راهنما، سیستم آفگرید معمولاً ۱۵۰۰ تا ۳۰۰۰ دلار به ازای هر kWp و سیستم هایبرید ۱۲۰۰ تا ۲۵۰۰ دلار به ازای هر kWp است. از تخمین‌گر هزینه میکروگرید و محاسبه ROI پارسا انرژی استفاده کنید، سپس پیش‌فاکتور رایگان درخواست کنید. Off-grid systems typically range $1,500–3,000 per kWp; hybrid $1,200–2,500 per kWp. Use Parsa Energy's Microgrid Cost Estimator and ROI Calculator, then request a free quotation.",
      },
    },
    {
      "@type": "Question",
      name: "بازگشت سرمایه نیروگاه خورشیدی چقدر است؟ / What is the ROI / payback of a solar power plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بسته به تعرفه برق، تابش خورشید و قیمت دیزل، معمولاً ۳ تا ۶ سال. برای مشهد با ~۵.۰ ساعت تابش اوج، بازگشت سرمایه صنعتی معمولاً ۴ تا ۵ سال با IRR ۱۵ تا ۲۰٪ است. Depending on tariff, solar resource and diesel cost, typically 3–6 years. For Mashhad (~5.0 PSH), industrial payback is typically 4–5 years with IRR 15–20%.",
      },
    },
    {
      "@type": "Question",
      name: "آیا اینورتر خورشیدی قابل تعمیر است؟ / Can a solar inverter be repaired?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله. پارسا انرژی اینورترهای خورشیدی را در سطح قطعه تعمیر می‌کند — تعویض MOSFET/IGBT مدار قدرت، تعمیر مدار درایور، برد کنترل/نمایش و firmware برای برندهای SMA، Victron، Growatt، Deye، Sofar، Luminous و بیشتر. تعمیر معمولاً ۴۰ تا ۷۰٪ ارزان‌تر از تعویض است و عمر اینورتر را ۳ تا ۵ سال افزایش می‌دهد. Yes. Parsa Energy repairs solar inverters at component level — MOSFET/IGBT replacement, driver circuits, control/display boards and firmware for SMA, Victron, Growatt, Deye, Sofar, Luminous and more. Repair is typically 40–70% cheaper than replacement.",
      },
    },
    {
      "@type": "Question",
      name: "MPPT یا PWM؟ کدام کنترلر شارژ بهتر است؟ / MPPT or PWM charge controller?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MPPT ۲۰ تا ۳۰ درصد انرژی بیشتری از PWM استخراج می‌کند، به‌ویژه در هوای سرد یا ابری. برای سیستم‌های بالای ۲۰۰ وات یا جایی که ولتاژ پنل ۲۰٪+ بالاتر از باتری است، MPPT انتخاب بهتر است. MPPT extracts 20–30% more energy than PWM, especially in cold or cloudy conditions. For systems above 200W or where panel voltage exceeds battery voltage by 20%+, MPPT is the better choice.",
      },
    },
    {
      "@type": "Question",
      name: "باتری خورشیدی چقدر دوام دارد و زمان پشتیبان چقدر است؟ / How long do solar batteries last and what is the backup time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "باتری‌های LiFePO4 معمولاً ۸ تا ۱۵ سال یا ۴۰۰۰ تا ۶۰۰۰ سیکل دوام دارند؛ سرب‌اسید ۳ تا ۷ سال. زمان پشتیبان بستگی به ظرفیت باتری (kWh) و بار (W) دارد. از فرمول: ساعت پشتیبان = (Ah × V × DoD × راندمان اینورتر) / بار W. از ابزار محاسبه زمان پشتیبان پارسا انرژی استفاده کنید. LiFePO4 batteries typically last 8–15 years or 4,000–6,000 cycles; lead-acid 3–7 years. Backup time depends on capacity (kWh) and load (W). Use Parsa Energy's Backup Time Calculator.",
      },
    },
    {
      "@type": "Question",
      name: "پارسا انرژی چه خدماتی دارد؟ / What services does Parsa Energy offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "پارسا انرژی در مشهد - الهیه در پنج حوزه فعالیت می‌کند: ۱) فروش تجهیزات و تاسیسات مکانیکی (پکیج، رادیاتور، کولر گازی، هواساز، پمپ آب)، ۲) طراحی، فروش و اجرای نیروگاه خورشیدی و تامین برق اضطراری (UPS، باتری، پنل، دیزل ژنراتور)، ۳) سرویس‌کاری و تعمیرات تاسیسات، ۴) فروش قطعات تهویه مطبوع، ۵) آموزشگاه آزاد فنی‌وحرفه‌ای. Parsa Energy in Mashhad - Elahieh operates across 5 divisions: HVAC equipment sales, solar power & emergency power, HVAC servicing & repair, HVAC parts, and a vocational training school.",
      },
    },
    {
      "@type": "Question",
      name: "آدرس و شماره تماس پارسا انرژی چیست؟ / What is Parsa Energy's address and phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "آدرس: مشهد، منطقه الهیه. تلفن همراه: ۰۹۱۰۸۸۸۸۱۹۹. وب‌سایت: parsenergyco.ir. ساعات کاری: شنبه تا چهارشنبه ۸ تا ۱۷. Address: Mashhad, Elahieh area. Mobile: +98 910 888 8199. Website: parsenergyco.ir. Hours: Sat–Wed, 8:00–17:00.",
      },
    },
  ],
};

export function serviceSchema(service: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: "Mashhad" },
  };
}

export function productSchema(product: { name: string; description: string; brand: string; category: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };
}

export function articleSchema(article: { headline: string; description: string; category: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.headline,
    description: article.description,
    articleSection: article.category,
    author: { "@type": "Organization", name: "Parsa Energy Engineering Team" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: article.datePublished,
    inLanguage: ["fa", "en"],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * GEO-005: BlogPosting schemas for every knowledge-center article.
 * Includes exact datePublished, dateModified, full author/publisher,
 * headline, description and articleSection — preventing LLM hallucination
 * by making entity relationships explicit and machine-readable.
 */
export function buildArticleSchemas(): object[] {
  const articles = [
    { slug: "what-is-solar-microgrid", title: "میکروگرید خورشیدی چیست؟ راهنمای کامل", desc: "میکروگرید خورشیدی سیستمی است که برق خورشیدی را تولید، ذخیره و توزیع می‌کند و می‌تواند مستقل یا متصل به شبکه کار کند.", section: "میکروگرید", date: "2024-09-12", modified: "2024-09-12" },
    { slug: "mppt-vs-pwm", title: "MPPT یا PWM؟ کدام کنترلر شارژ؟", desc: "MPPT ۲۰ تا ۳۰ درصد انرژی بیشتری از PWM استخراج می‌کند.", section: "پایه‌های خورشیدی", date: "2024-08-28", modified: "2024-08-28" },
    { slug: "how-to-size-battery", title: "سایزینگ بانک باتری خورشیدی (Ah و kWh)", desc: "سایزینگ باتری به سه عدد خلاصه می‌شود: بار روزانه، خودکفایی و عمق تخلیه.", section: "تکنولوژی باتری", date: "2024-10-02", modified: "2024-10-02" },
    { slug: "cable-sizing-voltage-drop", title: "سایزینگ کابل و افت ولتاژ خورشیدی", desc: "کابل DC کوچک انرژی هدر می‌دهد و خطر آتش می‌سازد؛ افت ولتاژ باید زیر ۳٪ باشد.", section: "کابل و حفاظت", date: "2024-07-19", modified: "2024-07-19" },
    { slug: "solar-panel-tilt", title: "زاویه و جهت پنل خورشیدی", desc: "زاویه بهینه برابر عرض جغرافیایی است.", section: "پایه‌های خورشیدی", date: "2024-06-30", modified: "2024-06-30" },
    { slug: "inverter-faults", title: "خرابی‌های رایج اینورتر خورشیدی و تشخیص", desc: "رایج‌ترین خطاهای اینورتر، علل ریشه‌ای و زمان تماس با تعمیرکار.", section: "اینورتر", date: "2024-05-14", modified: "2024-05-14" },
    { slug: "how-to-calculate-system-size", title: "محاسبه اندازه نیروگاه خورشیدی (kWp)", desc: "اندازه سیستم = مصرف روزانه ÷ ساعت تابش اوج ÷ ضریب عملکرد.", section: "محاسبات مهندسی", date: "2024-09-25", modified: "2024-09-25" },
    { slug: "preventive-maintenance-checklist", title: "چک‌لیست نگهداری پیشگیرانه نیروگاه خورشیدی", desc: "چک‌لیست فصلی شامل پنل، اینورتر، باتری و BOS.", section: "نگهداری", date: "2024-04-08", modified: "2024-04-08" },
  ];

  return articles.map((a) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.desc,
    articleSection: a.section,
    inLanguage: ["fa", "en"],
    datePublished: a.date,
    dateModified: a.modified,
    author: {
      "@type": "Organization",
      name: "تیم مهندسی پارسا انرژی | Parsa Energy Engineering Team",
      url: `${SITE_URL}/#organization`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#knowledge`,
    },
    url: `${SITE_URL}/#knowledge`,
  }));
}

