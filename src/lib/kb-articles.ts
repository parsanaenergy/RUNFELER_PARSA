/**
 * Parsa Energy — Knowledge Base articles (bilingual fa/en).
 *
 * ۱۱ مقاله اولیه در دو دسته:
 *  - تاسیسات (HVAC): راهنمای انتخاب سیستم، مزایا/معایب، تعاریف
 *  - خورشیدی (Solar): قطعی برق، توجیه اقتصادی، تعرفه‌ها، قوانین
 *
 * هر مقاله شامل: عنوان، کپسول پاسخ BLUF، بدنه کامل، FAQ.
 * محتوا برای سئو و استناد هوش مصنوعی ساختاریافته است.
 *
 * توجه: اعداد و تعرفه‌های سال ۱۴۰۵ بر اساس اطلاعات عمومی نوشته شده‌اند
 * و باید با منابع رسمی ساتبا و بورس انرژی تأیید شوند.
 */

export interface KB_article {
  slug: string;
  title: { fa: string; en: string };
  category: "hvac" | "solar" | "news";
  categoryLabel: { fa: string; en: string };
  excerpt: { fa: string; en: string }; // BLUF capsule
  readTime: { fa: string; en: string };
  date: string;
  body: { fa: { h2: string; p: string }[]; en: { h2: string; p: string }[] };
  faqs: { q: { fa: string; en: string }; a: { fa: string; en: string } }[];
}

export const kbCategories = [
  { key: "all", label: { fa: "همه", en: "All" } },
  { key: "hvac", label: { fa: "تاسیسات", en: "HVAC" } },
  { key: "solar", label: { fa: "خورشیدی", en: "Solar" } },
  { key: "news", label: { fa: "اخبار و قوانین", en: "News & Laws" } },
] as const;

export const kbArticles: KB_article[] = [
  /* ============ HVAC ============ */
  {
    slug: "best-heating-cooling-system",
    title: { fa: "کدام سیستم گرمایشی و سرمایشی مناسب است؟", en: "Which heating and cooling system is right for you?" },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "انتخاب سیستم گرمایشی و سرمایشی مناسب به سه عامل بستگی دارد: اقلیم منطقه، مساحت فضا و بودجه. برای مناطق سردسیر، پکیج دیواری + رادیاتور بهترین گزینه گرمایشی است. برای سرمایش، کولر گازی برای فضاهای کوچک و داکت اسپیلت برای فضاهای بزرگ یا چند منظوره پیشنهاد می‌شود.",
      en: "Choosing the right heating/cooling system depends on three factors: climate, space size, and budget. For cold regions, wall package + radiator is the best heating option. For cooling, split AC suits small spaces and ducted split suits large or multi-zone spaces.",
    },
    readTime: { fa: "۷ دقیقه", en: "7 min" },
    date: "1404-10-15",
    body: {
      fa: [
        { h2: "عوامل انتخاب سیستم", p: "برای انتخاب سیستم گرمایشی و سرمایشی، اقلیم منطقه، متراژ فضا، تعداد اتاق‌ها، بودجه و هزینه مصرف انرژی را در نظر بگیرید. سیستم‌های ترکیبی مثل پکیج + رادیاتور + کولر گازی برای منازل معمولی بهترین تعادل بین هزینه و کارایی را دارند." },
        { h2: "گرمایش: پکیج یا زنت؟", p: "پکیج دیواری با رادیاتور برای منازل با سیستم لوله‌کشی شوفاژ مناسب است. زنت (پنکه گرمکن) برای فضاهای باز یا اتاق‌هایی که لوله‌کشی شوفاژ ندارند سریع‌گرما و اقتصادی است ولی رطوبت هوا را کاهش می‌دهد." },
        { h2: "سرمایش: کولر گازی یا داکت اسپیلت؟", p: "کولر گازی (اسپلیت) برای تک‌اتاق نصب آسان و قیمت پایین دارد. داکت اسپیلت برای کل ساختمان یا فضاهای بزرگ با یک یونیت بیرونی و چند کانال داخلی مناسب است و زیبایی معماری را حفظ می‌کند." },
        { h2: "هزینه مصرف انرژی", p: "کولرهای گازی اینورتر دار consumes تا ۳۰٪ برق کمتر از مدل‌های معمولی دارند. پکیج‌های دیواری با راندمان بالا (A++) گاز کمتری مصرف می‌کنند. برای کاهش هزینه برق در تابستان، ترکیب کولر گازی + عایق‌بندی مناسب توصیه می‌شود." },
      ],
      en: [
        { h2: "Selection factors", p: "Consider climate, space size, room count, budget and energy cost. Combined systems like package + radiator + AC offer the best balance for typical homes." },
        { h2: "Heating: package or Zent?", p: "Wall package with radiator suits homes with piped heating. Zent (fan heater) is fast and economical for open spaces or rooms without piped heating but reduces humidity." },
        { h2: "Cooling: split AC or ducted split?", p: "Split AC is easy to install and cheaper for single rooms. Ducted split suits whole-building or large spaces with one outdoor unit and multiple ducts, preserving architecture." },
        { h2: "Energy cost", p: "Inverter ACs consume up to 30% less electricity. High-efficiency (A++) packages use less gas. Combining AC + proper insulation reduces summer electricity costs." },
      ],
    },
    faqs: [
      { q: { fa: "برای آپارتمان ۱۰۰ متری چه سیستمی پیشنهاد می‌دهید؟", en: "What do you recommend for a 100sqm apartment?" }, a: { fa: "پکیج دیواری + رادیاتور برای گرمایش و یک کولر گازی ۲۴۰۰۰ BTU برای客厅 + یک کولر ۱۲۰۰۰ برای اتاق خواب.", en: "Wall package + radiator for heating, one 24,000 BTU AC for living room + one 12,000 for bedroom." } },
    ],
  },
  {
    slug: "radiator-pros-cons",
    title: { fa: "مزایا و معایب رادیاتور شوفاژ", en: "Pros and cons of heating radiators" },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "رادیاتور شوفاژ گرمایی یکنواخت و مطبوع ارائه می‌دهد و با پکیج دیواری ترکیب می‌شود. مزیت اصلی آن دوام بالا (۲۰+ سال) و عدم خشکی هوا است. عیب اصلی آن نیاز به لوله‌کشی، فضای اشغال‌شده روی دیوار و گرم‌شدن کندتر نسبت به زنت است.",
      en: "Heating radiators provide even, comfortable heat and pair with wall packages. Main pros: long life (20+ years) and no air drying. Main cons: need piping, wall space, and slower warm-up than fan heaters.",
    },
    readTime: { fa: "۵ دقیقه", en: "5 min" },
    date: "1404-10-10",
    body: {
      fa: [
        { h2: "مزایای رادیاتور شوفاژ", p: "۱. گرمای یکنواخت و مطبوع در کل فضا. ۲. دوام بالا (۲۰ تا ۳۰ سال با نگهداری مناسب). ۳. عدم خشکی هوا (برخلاف زنت و هیتر). ۴. ترکیب با پکیج دیواری با راندمان بالا. ۵. بی‌صدا بودن در عملکرد. ۶. امکان نصب در انواع اتاق." },
        { h2: "معایب رادیاتور شوفاژ", p: "۱. نیاز به لوله‌کشی اولیه (هزینه نصب بالا). ۲. فضای اشغال‌شده روی دیوار. ۳. گرم‌شدن کندتر (۱۵ تا ۳۰ دقیقه). ۴. خطر نشتی در صورت عدم نگهداری. ۵. در ساختمان‌های قدیمی نیاز به بازسازی." },
        { h2: "انواع رادیاتور", p: "رادیاتور چدنی (دوام بالا، گران)، رادیاتور آلومینیومی (سبک، گرم‌شدن سریع)، رادیاتور پنلی فولادی (مدرن، طراحی شیک). برای منازل جدید، پنلی فولادی یا آلومینیومی پیشنهاد می‌شود." },
        { h2: "نکته نگهداری", p: "هر سال قبل از فصل سرما، هواگیری رادیاتورها و بررسی فشار آب شوفاژ ضروری است. نشتی لوله‌ها را سریع برطرف کنید تا از خوردگی و آسیب به دیوار جلوگیری شود." },
      ],
      en: [
        { h2: "Pros", p: "1. Even, comfortable heat. 2. Long life (20-30 years). 3. No air drying. 4. Pairs with high-efficiency packages. 5. Silent operation. 6. Fits all room types." },
        { h2: "Cons", p: "1. Initial piping cost. 2. Wall space. 3. Slower warm-up (15-30 min). 4. Leak risk without maintenance. 5. Retrofit needed in old buildings." },
        { h2: "Radiator types", p: "Cast iron (durable, expensive), aluminum (light, fast heat), steel panel (modern, sleek). For new homes, steel panel or aluminum recommended." },
        { h2: "Maintenance", p: "Bleed radiators and check water pressure annually before winter. Fix leaks promptly to prevent corrosion and wall damage." },
      ],
    },
    faqs: [],
  },
  {
    slug: "split-ac-pros-cons",
    title: { fa: "مزایا و معایب کولر گازی", en: "Pros and cons of split AC" },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "کولر گازی (اسپلیت) سرمایش سریع، نصب آسان و قیمت مناسب دارد. مزیت اصلی اینورتر دار بودن (کاهش ۳۰٪ مصرف برق) و بی‌صدایی است. عیب اصلی آن مصرف برق بالا در مدل‌های غیراینورتر، نیاز به شارژ گاز دوره‌ای و عدم تهویه هوای تازه است.",
      en: "Split AC offers fast cooling, easy installation and good price. Main pros: inverter (30% less power) and quiet operation. Main cons: high power use in non-inverter models, periodic gas recharge, and no fresh air ventilation.",
    },
    readTime: { fa: "۶ دقیقه", en: "6 min" },
    date: "1404-10-05",
    body: {
      fa: [
        { h2: "مزایای کولر گازی", p: "۱. سرمایش سریع (۵ تا ۱۰ دقیقه). ۲. نصب آسان در تک‌اتاق. ۳. قیمت مناسب نسبت به داکت اسپیلت. ۴. مدل‌های اینورتر تا ۳۰٪ برق کمتر. ۵. بی‌صدا بودن یونیت داخلی. ۶. قابلیت گرمایش در مدل‌های دوطرفه (دوگانه)." },
        { h2: "معایب کولر گازی", p: "۱. مصرف برق بالا در مدل‌های غیراینورتر. ۲. نیاز به شارژ گاز هر ۲ تا ۳ سال. ۳. عدم تهویه هوای تازه (بستن پنجره). ۴. ظاهر یونیت داخلی روی دیوار. ۵. برای کل ساختمان به چند یونیت نیاز است." },
        { h2: "اینورتر یا معمولی؟", p: "کولرهای اینورتر با تنظیم دور کمپرسور، مصرف برق را تا ۳۰٪ کاهش می‌دهند و صدای کمتری دارند. برای استفاده طولانی (تابستان) سرمایه‌گذاری روی اینورتر در ۲ تا ۳ سال بازمی‌گردد. برای استفاده کوتاه، مدل معمولی مقرون‌به‌صرفه‌تر است." },
        { h2: "انتخاب ظرفیت (BTU)", p: "برای هر متر مربع حدود ۶۰۰ BTU نیاز است. اتاق ۱۵ متری = ۹۰۰۰ BTU، اتاق ۲۰ متری = ۱۲۰۰۰ BTU،客厅 ۳۰ متری = ۱۸۰۰۰ BTU. فضاهای بزرگ‌تر به ۲۴۰۰۰ BTU یا بیشتر نیاز دارند." },
      ],
      en: [
        { h2: "Pros", p: "1. Fast cooling (5-10 min). 2. Easy single-room install. 3. Good price vs ducted. 4. Inverter models save 30% power. 5. Quiet indoor unit. 6. Heating in dual models." },
        { h2: "Cons", p: "1. High power use in non-inverter. 2. Gas recharge every 2-3 years. 3. No fresh air (closed window). 4. Indoor unit on wall. 5. Multiple units needed for whole building." },
        { h2: "Inverter or standard?", p: "Inverter ACs adjust compressor speed, saving up to 30% power with less noise. For long summer use, inverter pays back in 2-3 years. For short use, standard is more cost-effective." },
        { h2: "Capacity (BTU)", p: "~600 BTU per sqm. 15sqm = 9,000 BTU, 20sqm = 12,000, 30sqm living room = 18,000. Larger spaces need 24,000+ BTU." },
      ],
    },
    faqs: [
      { q: { fa: "شارژ گاز کولر چند سال یک‌بار لازم است؟", en: "How often to recharge AC gas?" }, a: { fa: "هر ۲ تا ۳ سال در صورت افت سرمایش. اگر نشتی نباشد، شارژ لازم نیست.", en: "Every 2-3 years if cooling drops. Without leaks, no recharge needed." } },
    ],
  },
  {
    slug: "zent-pros-cons",
    title: { fa: "مزایا و معایب زنت", en: "Pros and cons of Zent heaters" },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "زنت (پنکه گرمکن) گرمایش سریع و نقطه‌ای با قیمت پایین ارائه می‌دهد. مزیت اصلی آن گرم‌شدن فوری (۱ تا ۲ دقیقه) و عدم نیاز به لوله‌کشی است. عیب اصلی آن خشکی هوا، مصرف برق بالا و عدم گرمایش یکنواخت کل فضا است.",
      en: "Zent (fan heater) provides fast, spot heating at low cost. Main pros: instant heat (1-2 min) and no piping needed. Main cons: air drying, high power use, and no even whole-space heating.",
    },
    readTime: { fa: "۴ دقیقه", en: "4 min" },
    date: "1404-09-28",
    body: {
      fa: [
        { h2: "مزایای زنت", p: "۱. گرم‌شدن فوری (۱ تا ۲ دقیقه). ۲. عدم نیاز به لوله‌کشی و نصب ثابت. ۳. قیمت پایین (نصف پکیج). ۴. قابلیت جابجایی بین اتاق‌ها. ۵. مناسب فضاهای موقت یا کاری." },
        { h2: "معایب زنت", p: "۱. خشکی هوا (احساس خشکی گلو و پوست). ۲. مصرف برق بالا (۲ تا ۳ کیلووات). ۳. گرمایش نقطه‌ای، نه کل فضا. ۴. صدای پنکه. ۵. خطر سوختگی اگر نزدیک پرده یا مبلمان باشد. ۶. برای گرمایش کل ساختمان مناسب نیست." },
        { h2: "زنت برای چه فضایی مناسب است؟", p: "زنت برای گرمایش موقت یک اتاق، کارگاه، انبار یا فضایی که شوفاژ ندارد مناسب است. برای منزل دائمی با چند اتاق، پکیج + رادیاتور یا پکیج + داکت اسپیلت بهتر است." },
        { h2: "هزینه مصرف برق", p: "یک زنت ۲۰۰۰ واتی در ساعت ۲ کیلووات‌ساعت برق مصرف می‌کند. با تعرفه برق خانگی، استفاده ۸ ساعته روزانه در زمستان حدود ۴۸۰ کیلووات‌ساعت در ماه = هزینه قابل‌توجه. برای کاهش هزینه، ترکیب با شوفاژ یا استفاده از ترموستات توصیه می‌شود." },
      ],
      en: [
        { h2: "Pros", p: "1. Instant heat (1-2 min). 2. No piping or fixed install. 3. Low price (half of package). 4. Portable between rooms. 5. Good for temporary or work spaces." },
        { h2: "Cons", p: "1. Air drying (throat and skin). 2. High power use (2-3 kW). 3. Spot heating, not whole space. 4. Fan noise. 5. Burn risk near curtains/furniture. 6. Not for whole-building heating." },
        { h2: "Where is Zent suitable?", p: "Zent suits temporary single-room heating, workshops, storage, or spaces without central heating. For permanent multi-room homes, package + radiator or ducted split is better." },
        { h2: "Electricity cost", p: "A 2000W Zent uses 2 kWh per hour. At residential tariff, 8-hour daily winter use = ~480 kWh/month = significant cost. Combine with central heating or use thermostat to reduce cost." },
      ],
    },
    faqs: [],
  },
  {
    slug: "what-is-zent",
    title: { fa: "زنت چیست؟", en: "What is a Zent heater?" },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "زنت (پنکه گرمکن) دستگاه گرمایشی برقی است که با عبور هوا از روی المان گرم‌کننده، گرمای فوری تولید می‌کند. زنت برای گرمایش موقت و نقطه‌ای مناسب است و در مدل‌های دیواری، پایه‌دار و قابل‌حمل موجود است.",
      en: "A Zent (fan heater) is an electric heating device that produces instant heat by passing air over a heating element. Zent suits temporary, spot heating and comes in wall-mounted, floor-standing, and portable models.",
    },
    readTime: { fa: "۳ دقیقه", en: "3 min" },
    date: "1404-09-20",
    body: {
      fa: [
        { h2: "زنت چگونه کار می‌کند؟", p: "زنت شامل یک المان گرم‌کننده (مقاومت الکتریکی) و یک پنکه است. وقتی روشن می‌شود، پنکه هوا را از روی المان داغ عبور می‌دهد و هوای گرم را به بیرون می‌فرستد. این فرآیند در ۱ تا ۲ دقیقه گرمای فوری تولید می‌کند." },
        { h2: "انواع زنت", p: "۱. زنت دیواری (نصب ثابت روی دیوار). ۲. زنت پایه‌دار (روی زمین). ۳. زنت قابل‌حمل (با دسته). ۴. زنت سقفی (برای فضاهای تجاری). توان معمول: ۱۵۰۰ تا ۳۰۰۰ وات." },
        { h2: "تفاوت زنت با شوفاژ", p: "شوفاژ با گردش آب گرم در رادیاتور، گرمای یکنواخت و ملایم تولید می‌کند ولی گرم‌شدن آن ۱۵ تا ۳۰ دقیقه طول می‌کشد. زنت گرمای فوری و نقطه‌ای می‌دهد ولی هوا را خشک می‌کند و مصرف برق بالاتری دارد." },
      ],
      en: [
        { h2: "How does Zent work?", p: "Zent has a heating element (electrical resistance) and a fan. When on, the fan pushes air over the hot element, releasing warm air. This produces instant heat in 1-2 minutes." },
        { h2: "Zent types", p: "1. Wall-mounted (fixed). 2. Floor-standing. 3. Portable (with handle). 4. Ceiling (commercial). Typical power: 1500-3000W." },
        { h2: "Zent vs central heating", p: "Central heating circulates hot water in radiators for even, gentle heat but takes 15-30 min to warm up. Zent gives instant spot heat but dries air and uses more electricity." },
      ],
    },
    faqs: [],
  },
  {
    slug: "what-is-ducted-split",
    title: { fa: "داکت اسپیلت چیست؟", en: "What is a ducted split?" },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "داکت اسپیلت سیستم سرمایش و گرمایش مرکزی است که با یک یونیت بیرونی و یک یونیت داخلی (مخفی در سقف کاذب)، هوای مطبوع را از طریق کانال‌ها به چندین اتاق می‌رساند. داکت اسپیلت برای ویلاها، آپارتمان‌های بزرگ و فضاهای تجاری مناسب است.",
      en: "A ducted split is a central heating/cooling system with one outdoor unit and one indoor unit (hidden in false ceiling) that delivers conditioned air through ducts to multiple rooms. Suits villas, large apartments, and commercial spaces.",
    },
    readTime: { fa: "۵ دقیقه", en: "5 min" },
    date: "1404-09-15",
    body: {
      fa: [
        { h2: "ساختار داکت اسپیلت", p: "داکت اسپیلت شامل: یونیت بیرونی (کمپرسور و کندانس)، یونیت داخلی (اواپراتور + فن، در سقف کاذب)، کانال‌های توزیع هوا، و دریچه‌های سقفی. هوای خنک/گرم از طریق کانال‌ها به هر اتاق می‌رسد." },
        { h2: "مزایای داکت اسپیلت", p: "۱. یک سیستم برای کل ساختمان (نه چند کولر). ۲. ظاهر زیبا (فقط دریچه سقفی دیده می‌شود). ۳. توزیع یکنواخت هوا. ۴. بی‌صدا در داخل اتاق‌ها. ۵. قابلیت کنترل هر اتاق با دمپر زون." },
        { h2: "معایب داکت اسپیلت", p: "۱. هزینه نصب بالا (۲ تا ۳ برابر کولر گازی). ۲. نیاز به سقف کاذب برای کانال‌کشی. ۳. فضای سقف اشغال می‌شود. ۴. در صورت خرابی، کل سیستم از کار می‌افتد. ۵. مصرف انرژی بالاتر برای فضاهای کوچک." },
        { h2: "داکت اسپیلت برای چه ساختمانی؟", p: "برای ویلاها و آپارتمان‌های بالای ۱۵۰ متر مربع که زیبایی معماری مهم است، داکت اسپیلت بهترین انتخاب است. برای آپارتمان‌های کوچک‌تر یا تک‌اتاق، کولر گازی مقرون‌به‌صرفه‌تر است." },
      ],
      en: [
        { h2: "Structure", p: "Ducted split includes: outdoor unit (compressor + condenser), indoor unit (evaporator + fan, in false ceiling), air distribution ducts, and ceiling diffusers. Cooled/heated air reaches each room via ducts." },
        { h2: "Pros", p: "1. One system for whole building. 2. Aesthetic (only ceiling diffusers visible). 3. Even air distribution. 4. Quiet in rooms. 5. Zone control with dampers." },
        { h2: "Cons", p: "1. High install cost (2-3x split AC). 2. Needs false ceiling for ducts. 3. Ceiling space used. 4. Whole system down if it fails. 5. Higher energy use for small spaces." },
        { h2: "Which building?", p: "For villas and 150+ sqm apartments where aesthetics matter, ducted split is best. For smaller apartments or single rooms, split AC is more cost-effective." },
      ],
    },
    faqs: [
      { q: { fa: "هزینه نصب داکت اسپیلت چقدر است؟", en: "How much does ducted split installation cost?" }, a: { fa: "برای یک ویلا ۲۰۰ متری حدود ۲ تا ۳ برابر کولر گازی. برای استعلام دقیق تماس بگیرید.", en: "For a 200sqm villa, about 2-3x split AC. Contact us for a precise quote." } },
    ],
  },

  /* ============ Solar ============ */
  {
    slug: "power-outage-solutions",
    title: { fa: "راهکارهای مقابله با قطعی برق شبکه سراسری", en: "Solutions for national grid power outages" },
    category: "solar",
    categoryLabel: { fa: "خورشیدی", en: "Solar" },
    excerpt: {
      fa: "برای مقابله با قطعی برق شبکه سراسری، سه راهکار اصلی وجود دارد: ۱. UPS برای بارهای حساس کوتاه‌مدت (کامپیوتر، یخچال)، ۲. دیزل ژنراتور برای برق‌رسانی طولانی‌مدت، ۳. نیروگاه خورشیدی هایبرید با باتری برای راه‌حل دائمی و اقتصادی. ترکیب این سه بهترین تاب‌آوری را تضمین می‌کند.",
      en: "For national grid outages, three main solutions: 1. UPS for short-duration critical loads (computer, fridge), 2. Diesel generator for long-duration power, 3. Hybrid solar plant with battery for a permanent, economical solution. Combining all three ensures best resilience.",
    },
    readTime: { fa: "۸ دقیقه", en: "8 min" },
    date: "1404-10-12",
    body: {
      fa: [
        { h2: "چرا برق شبکه قطع می‌شود؟", p: "قطعی برق در ایران به دلایل: ناترازی تولید و مصرف (پیک تابستانه)، فرسودگی شبکه، نگهداری برنامه‌ریزی‌شده، و حوادث جوی رخ می‌دهد. در تابستان ۱۴۰۴، قطعی‌های برنامه‌ریزی‌شده در بسیاری از استان‌ها اعمال شد." },
        { h2: "راهکار ۱: UPS", p: "UPS (منبع تغذیه بدون وقفه) برای بارهای حساس کوتاه‌مدت مناسب است — کامپیوتر، مودم، تجهیزات پزشکی. UPS آنلاین با انتقال صفر، برای سرور و تجهیزات حساس ضروری است. ظرفیت معمول: ۱ تا ۱۰ کیلوولت‌آمپر." },
        { h2: "راهکار ۲: دیزل ژنراتور", p: "دیزل ژنراتور برای برق‌رسانی طولانی‌مدت (چند ساعت تا چند روز) مناسب است. با ATS (سوییچ انتقال خودکار)، در صورت قطعی شبکه به‌صورت خودکار روشن می‌شود. برای کارخانه‌ها، بیمارستان‌ها و مجتمع‌های بزرگ ضروری است. مصرف سوخت: ۳ تا ۵ لیتر در ساعت به ازای هر ۱۰ کیلووات." },
        { h2: "راهکار ۳: نیروگاه خورشیدی هایبرید", p: "نیروگاه خورشیدی هایبرید (PV + باتری) راه‌حل دائمی و اقتصادی است. در روز، پنل خورشیدی بار را تأمین و باتری را شارژ می‌کند. در شب یا قطعی، باتری بار را برقرار می‌کند. با ترکیب دیزل ژنراتور به‌عنوان پشتیبان، تاب‌آوری کامل حاصل می‌شود. بازگشت سرمایه: ۴ تا ۶ سال." },
        { h2: "ترکیب بهینه", p: "برای یک منزل: UPS ۳ کیلوولت‌آمپر + خورشیدی هایبرید ۵ کیلووات. برای کارخانه: دیزل ژنراتور ۱۰۰ کیلووات + خورشیدی ۵۰ کیلووات. برای بیمارستان: UPS + دیزل + خورشیدی + ATS. مشاوره رایگان پارسا انرژی برای طراحی سیستم متناسب با نیاز شما." },
      ],
      en: [
        { h2: "Why grid outages?", p: "Outages in Iran happen due to: production-consumption imbalance (summer peak), grid aging, planned maintenance, weather events. Summer 2024 saw scheduled outages in many provinces." },
        { h2: "Solution 1: UPS", p: "UPS suits short-duration critical loads — computers, modems, medical equipment. Online UPS with zero transfer is essential for servers and sensitive gear. Typical: 1-10 kVA." },
        { h2: "Solution 2: Diesel generator", p: "Diesel generators suit long-duration power (hours to days). With ATS, auto-starts on outage. Essential for factories, hospitals, large complexes. Fuel: 3-5 L/hr per 10 kW." },
        { h2: "Solution 3: Hybrid solar plant", p: "Hybrid solar (PV + battery) is a permanent, economical solution. Day: panels power load + charge battery. Night/outage: battery sustains load. Adding diesel as backup gives full resilience. Payback: 4-6 years." },
        { h2: "Optimal combination", p: "Home: 3 kVA UPS + 5 kW hybrid solar. Factory: 100 kW diesel + 50 kW solar. Hospital: UPS + diesel + solar + ATS. Free consultation at Parsa Energy." },
      ],
    },
    faqs: [
      { q: { fa: "UPS بهتر است یا دیزل ژنراتور؟", en: "UPS or diesel generator?" }, a: { fa: "UPS برای بار حساس کوتاه‌مدت (سرور، پزشکی) بدون قطعی؛ دیزل برای برق طولانی‌مدت. ترکیب هر دو بهترین راه‌حل است.", en: "UPS for short critical loads (servers, medical) with no interruption; diesel for long power. Combining both is best." } },
    ],
  },
  {
    slug: "solar-economic-justification-1405",
    title: { fa: "توجیه اقتصادی احداث نیروگاه خورشیدی در سال ۱۴۰۵", en: "Economic justification for solar plants in 1405 (2026)" },
    category: "news",
    categoryLabel: { fa: "اخبار و قوانین", en: "News & Laws" },
    excerpt: {
      fa: "احداث نیروگاه خورشیدی در سال ۱۴۰۵ با تعرفه‌های خرید تضمینی ساتبا، کاهش قیمت پنل و تابش بالای ایران، توجیه اقتصادی بالایی دارد. برای یک نیروگاه ۱۰ کیلوواتی متصل به شبکه، بازگشت سرمایه ۴ تا ۵ سال و IRR حدود ۱۸ تا ۲۲ درصد پیش‌بینی می‌شود. با خرید تضمینی برق، درآمد ماهانه پایدار ایجاد می‌شود.",
      en: "Solar plants in 1405 have strong economic justification thanks to SATBA guaranteed purchase tariffs, falling panel prices, and Iran's high solar irradiation. A 10 kW grid-tied plant has 4-5 year payback and ~18-22% IRR. Guaranteed purchase creates stable monthly income.",
    },
    readTime: { fa: "۱۰ دقیقه", en: "10 min" },
    date: "1404-10-18",
    body: {
      fa: [
        { h2: "چرا سال ۱۴۰۵ زمان مناسبی است؟", p: "در ۱۴۰۵، سه عامل توجیه‌کننده وجود دارد: ۱. تعرفه‌های خرید تضمینی برق خورشیدی توسط ساتبا (سازمان انرژی‌های تجدیدپذیر). ۲. کاهش قیمت جهانی پنل خورشیدی (افت ۴۰٪ در ۲ سال اخیر). ۳. تابش بالای ایران (میانگین ۵ ساعت اوج در روز)." },
        { h2: "هزینه‌ها", p: "برای یک نیروگاه ۱۰ کیلوواتی متصل به شبکه: پنل + اینورتر + نصب = حدود ۶۰۰ تا ۸۰۰ میلیون تومان (قیمت‌ها متغیر). شامل: ۱۰ کیلووات پنل، اینورتر ۱۰ کیلووات، ساختار نصب، کابل و حفاظت، نصب و راه‌اندازی." },
        { h2: "درآمد", p: "با تعرفه خرید تضمینی ساتبا (برای نیروگاه‌های کوچک)، فروش برق تولیدی درآمد ماهانه پایدار ایجاد می‌کند. تولید سالانه ۱۰ کیلووات = حدود ۱۸۰۰۰ کیلووات‌ساعت. درآمد سالانه بسته به تعرفه منطقه و نوع قرارداد محاسبه می‌شود. برای استعلام تعرفه روز، با ساتبا تماس بگیرید." },
        { h2: "بازگشت سرمایه (ROI)", p: "با فرض هزینه ۷۰۰ میلیون تومان و درآمد سالانه ۱۵۰ تا ۲۰۰ میلیون تومان، بازگشت سرمایه ساده ۴ تا ۵ سال است. با در نظر گرفتن عمر ۲۵ ساله پنل، سود خالص ۲۰ سال = ۳ تا ۴ میلیارد تومان. IRR حدود ۱۸ تا ۲۲ درصد." },
        { h2: "رisks و نکات", p: "۱. تأیید نهایی تعرفه با ساتبا. ۲. دریافت مجوز اتصال به شبکه. ۳. انتخاب پیمانکار معتبر با گارانتی. ۴. پایش عملکرد برای حفظ تولید. ۵. بیمه نیروگاه. پارسا انرژی تمام مراحل از اخذ مجوز تا راه‌اندازی را همراه شما انجام می‌دهد." },
      ],
      en: [
        { h2: "Why 1405?", p: "Three drivers: 1. SATBA guaranteed purchase tariffs. 2. Falling global panel prices (40% drop in 2 years). 3. Iran's high solar irradiation (avg 5 peak hours/day)." },
        { h2: "Costs", p: "For a 10 kW grid-tied plant: panel + inverter + install = ~600-800 million Toman (prices vary). Includes 10 kW panels, 10 kW inverter, mounting structure, cable/protection, install/commissioning." },
        { h2: "Revenue", p: "With SATBA guaranteed tariff, selling generated power creates stable monthly income. Annual output of 10 kW = ~18,000 kWh. Annual revenue depends on regional tariff and contract type. Check current tariff with SATBA." },
        { h2: "ROI", p: "Assuming 700M Toman cost and 150-200M Toman annual revenue, simple payback = 4-5 years. With 25-year panel life, 20-year net profit = 3-4 billion Toman. IRR ~18-22%." },
        { h2: "Risks & notes", p: "1. Confirm tariff with SATBA. 2. Get grid-connection permit. 3. Choose reputable contractor with warranty. 4. Monitor performance. 5. Insure the plant. Parsa Energy handles all steps from permit to commissioning." },
      ],
    },
    faqs: [
      { q: { fa: "تعرفه خرید تضمینی برق خورشیدی چقدر است؟", en: "What is the guaranteed solar purchase tariff?" }, a: { fa: "تعرفه توسط ساتبا تعیین و به‌روزرسانی می‌شود. برای تعرفه روز به سایت ساتبا مراجعه یا با ما تماس بگیرید.", en: "Tariff is set and updated by SATBA. Check SATBA website or contact us for current rates." } },
    ],
  },
  {
    slug: "guaranteed-power-tariff-1405",
    title: { fa: "تعرفه‌های خرید برق تضمینی در سال ۱۴۰۵", en: "Guaranteed power purchase tariffs in 1405" },
    category: "news",
    categoryLabel: { fa: "اخبار و قوانین", en: "News & Laws" },
    excerpt: {
      fa: "تعرفه خرید تضمینی برق خورشیدی توسط ساتبا (سازمان انرژی‌های تجدیدپذیر و بهره‌وری انرژی ایران) تعیین می‌شود. این تعرفه برای نیروگاه‌های کشوری و خانگی متفاوت است و هر سال توسط هیئت وزیران تصویب می‌شود. برای اطلاع از تعرفه دقیق روز، باید با ساتبا استعلام کنید.",
      en: "Guaranteed solar purchase tariffs are set by SATBA (Renewable Energy and Energy Efficiency Organization of Iran). Tariffs differ for utility-scale and residential plants and are approved annually by the cabinet. Contact SATBA for current rates.",
    },
    readTime: { fa: "۶ دقیقه", en: "6 min" },
    date: "1404-10-08",
    body: {
      fa: [
        { h2: "تعرفه تضمینی چیست؟", p: "تعرفه تضمینی قیمتی است که دولت (از طریق ساتبا) متعهد می‌شود برق تولیدی از نیروگاه‌های تجدیدپذیر را برای مدت معین (معمولاً ۲۰ سال) خریداری کند. این تضمین، امنیت سرمایه‌گذاری را فراهم می‌کند." },
        { h2: "انواع تعرفه", p: "۱. تعرفه کشوری (نیروگاه‌های بزرگ، بالای ۱ مگاوات). ۲. تعرفه خانگی/صنعتی کوچک (زیر ۱ مگاوات). ۳. تعرفه مزایده‌ای (برای نیروگاه‌های بزرگ جدید). هر کدام قیمت و شرایط متفاوتی دارند." },
        { h2: "نحوه استعلام", p: "برای اطلاع از تعرفه روز: ۱. مراجعه به سایت satba.gov.ir. ۲. تماس با دفتر ساتبا. ۳. مشاوره با پیمانکاران مجاز (مثل پارسا انرژی). تعرفه‌ها بر اساس منطقه، ظرفیت و نوع قرارداد متفاوت است." },
        { h2: "نکات مهم", p: "۱. تعرفه برای ۲۰ سال تضمین می‌شود. ۲. پرداخت معمولاً ماهانه است. ۳. برای享受 تعرفه، باید مجوز احداث از ساتبا دریافت کنید. ۴. نیروگاه باید به شبکه متصل باشد. ۵. پایش و گزارش تولید الزامی است." },
      ],
      en: [
        { h2: "What is guaranteed tariff?", p: "Guaranteed tariff is the price the government (via SATBA) commits to pay for renewable electricity for a set period (usually 20 years). This guarantees investment security." },
        { h2: "Tariff types", p: "1. Utility-scale (>1 MW). 2. Residential/small industrial (<1 MW). 3. Auction-based (new large plants). Each has different price and terms." },
        { h2: "How to check", p: "For current tariff: 1. Visit satba.gov.ir. 2. Call SATBA office. 3. Consult authorized contractors (like Parsa Energy). Tariffs vary by region, capacity, contract type." },
        { h2: "Key points", p: "1. Guaranteed for 20 years. 2. Usually monthly payment. 3. Need SATBA construction permit. 4. Must be grid-connected. 5. Production monitoring and reporting mandatory." },
      ],
    },
    faqs: [],
  },
  {
    slug: "solar-power-stock-market-laws",
    title: { fa: "قوانین فروش برق خورشیدی در بورس", en: "Laws for selling solar power on the stock exchange" },
    category: "news",
    categoryLabel: { fa: "اخبار و قوانین", en: "News & Laws" },
    excerpt: {
      fa: "از سال ۱۳۹۹، فروش برق نیروگاه‌های تجدیدپذیر در بورس انرژی ایران مجاز شده است. نیروگاه‌های بالای ۱ مگاوات می‌توانند برق خود را به‌جای تعرفه تضمینی، در بورس با قیمت بازار بفروشند. این کار ریسک قیمت دارد ولی در زمان پیک، درآمد بالاتری ایجاد می‌کند.",
      en: "Since 1399 (2020), selling renewable electricity on the Iran Energy Exchange is allowed. Plants above 1 MW can sell at market price instead of guaranteed tariff. This has price risk but higher revenue during peak.",
    },
    readTime: { fa: "۷ دقیقه", en: "7 min" },
    date: "1404-10-03",
    body: {
      fa: [
        { h2: "بورس انرژی چیست؟", p: "بورس انرژی ایران بازار رسمی معامله برق است که در آن تولیدکنندگان و مصرف‌کنندگان بزرگ برق را با قیمت بازار معامله می‌کنند. این بورس از سال ۱۳۹۳ فعال است و از ۱۳۹۹ تجدیدپذیرها هم اجازه ورود دارند." },
        { h2: "شرایط فروش در بورس", p: "۱. نیروگاه باید بالای ۱ مگاوات باشد. ۲. مجوز احداث از ساتبا. ۳. اتصال به شبکه انتقال. ۴. ثبت در بورس انرژی. ۵. تعهد به تحویل برق مطابق برنامه. نیروگاه‌های کوچک‌تر باید از تعرفه تضمینی استفاده کنند." },
        { h2: "مزایا و معایب", p: "مزایا: ۱. قیمت بازار در پیک تابستانه می‌تواند ۲ تا ۳ برابر تعرفه تضمینی باشد. ۲. انعطاف در فروش. ۳. شفافیت قیمت. معایب: ۱. ریسک نوسان قیمت. ۲. در زمستان قیمت پایین‌تر. ۳. نیاز به مدیریت تولید." },
        { h2: "تصمیم: تضمینی یا بورس؟", p: "برای سرمایه‌گذاران ریسک‌پذیر با نیروگاه بزرگ، بورس درآمد بالاتری دارد. برای امنیت، تعرفه تضمینی بهتر است. مشاوره با کارشناس توصیه می‌شود. پارسا انرژی مشاوره رایگان ارائه می‌دهد." },
      ],
      en: [
        { h2: "What is energy exchange?", p: "Iran Energy Exchange is the official electricity market where large producers and consumers trade at market price. Active since 1393 (2014); renewables allowed since 1399 (2020)." },
        { h2: "Conditions", p: "1. Plant must be >1 MW. 2. SATBA construction permit. 3. Connected to transmission grid. 4. Registered at exchange. 5. Commit to deliver per schedule. Smaller plants must use guaranteed tariff." },
        { h2: "Pros & cons", p: "Pros: 1. Peak summer price can be 2-3x guaranteed. 2. Sales flexibility. 3. Price transparency. Cons: 1. Price volatility risk. 2. Lower winter prices. 3. Need production management." },
        { h2: "Decision: guaranteed or exchange?", p: "For risk-tolerant investors with large plants, exchange yields more. For security, guaranteed tariff is better. Expert consultation recommended. Parsa Energy offers free consultation." },
      ],
    },
    faqs: [],
  },
  {
    slug: "make-money-from-solar",
    title: { fa: "چگونه از انرژی خورشیدی پول در بیاوریم؟", en: "How to make money from solar energy" },
    category: "solar",
    categoryLabel: { fa: "خورشیدی", en: "Solar" },
    excerpt: {
      fa: "سه راه اصلی درآمد از انرژی خورشیدی: ۱. فروش برق به شبکه (تعرفه تضمینی یا بورس). ۲. صرفه‌جویی در قبض برق با مصرف خود. ۳. اجاره بام به سرمایه‌گذار. برای منزل، ترکیب مصرف خود + فروش مازاد بهترین راه است. برای زمین کشاورزی، نیروگاه ۱۰۰+ کیلوواتی درآمد قابل‌توجه ایجاد می‌کند.",
      en: "Three main solar income paths: 1. Sell power to grid (guaranteed tariff or exchange). 2. Save on bills via self-consumption. 3. Rent roof to investor. For homes, combine self-use + sell surplus. For farmland, 100+ kW plants generate significant income.",
    },
    readTime: { fa: "۹ دقیقه", en: "9 min" },
    date: "1404-09-25",
    body: {
      fa: [
        { h2: "راه ۱: فروش برق به شبکه", p: "با احداث نیروگاه متصل به شبکه، برق تولیدی را به ساتبا می‌فروشید. تعرفه تضمینی برای ۲۰ سال درآمد پایدار ایجاد می‌کند. برای نیروگاه ۱۰ کیلوواتی، درآمد ماهانه قابل‌توجه است. برای نیروگاه‌های بزرگ (بالای ۱ مگاوات)، فروش در بورس انرژی سود بیشتری دارد." },
        { h2: "راه ۲: صرفه‌جویی در قبض", p: "با نصب پنل روی بام، برق مصرفی خود را از خورشیدی تأمین می‌کنید و قبض شبکه را کاهش می‌دهید. در مناطق با تعرفه پله‌ای، صرفه‌جویی در پله‌های بالا بسیار اقتصادی است. برای منزل با مصرف ۵۰۰ کیلووات‌ساعت در ماه، نیروگاه ۵ کیلوواتی قبض را تا ۸۰٪ کاهش می‌دهد." },
        { h2: "راه ۳: اجاره بام/زمین", p: "اگر بام بزرگ یا زمین دارید ولی سرمایه نصب ندارید، می‌توانید فضا را به سرمایه‌گذار یا پیمانکار اجاره دهید. قرارداد معمولاً ۲۰ ساله با درآمد ثابت یا درصد از فروش برق. پارسا انرژی این مدل را پشتیبانی می‌کند." },
        { h2: "مدل ترکیبی بهینه", p: "برای منزل: نیروگاه ۵ کیلووات هایبرید + مصرف خود + فروش مازاد = صرفه‌جویی قبض + درآمد فروش. برای باغ: نیروگاه ۲۰ کیلووات + مصرف پمپ آب + فروش مازاد. برای زمین: نیروگاه ۱۰۰+ کیلووات فقط فروش." },
        { h2: "گام‌های شروع", p: "۱. بررسی تابش منطقه (با ما مشاوره کنید). ۲. محاسبه مصرف و ظرفیت. ۳. اخذ مجوز ساتبا. ۴. نصب و راه‌اندازی. ۵. عقد قرارداد فروش برق. ۶. دریافت درآمد ماهانه. پارسا انرژی همه مراحل را همراه شما انجام می‌دهد." },
      ],
      en: [
        { h2: "Path 1: Sell to grid", p: "Build a grid-tied plant and sell power to SATBA. Guaranteed tariff creates stable 20-year income. A 10 kW plant yields significant monthly revenue. For >1 MW plants, exchange sales are more profitable." },
        { h2: "Path 2: Save on bills", p: "Install rooftop panels and supply your own consumption, cutting grid bills. In tiered-tariff areas, high-tier savings are very economical. A 5 kW plant cuts an 80% bill for a 500 kWh/month home." },
        { h2: "Path 3: Rent roof/land", p: "If you have space but no capital, rent to an investor/contractor. Contracts are usually 20-year with fixed income or % of sales. Parsa Energy supports this model." },
        { h2: "Optimal hybrid model", p: "Home: 5 kW hybrid + self-use + sell surplus = bill savings + sales income. Farm: 20 kW + water pump use + sell surplus. Land: 100+ kW sell-only." },
        { h2: "Start steps", p: "1. Check regional irradiation (consult us). 2. Calculate load and capacity. 3. Get SATBA permit. 4. Install. 5. Sign sales contract. 6. Receive monthly income. Parsa Energy handles all steps." },
      ],
    },
    faqs: [
      { q: { fa: "برای شروع چقدر سرمایه لازم است؟", en: "How much capital to start?" }, a: { fa: "برای نیروگاه ۵ کیلووات خانگی حدود ۳۰۰ تا ۴۰۰ میلیون تومان. برای استعلام دقیق تماس بگیرید.", en: "For a 5 kW home plant, ~300-400M Toman. Contact us for a precise quote." } },
    ],
  },
];
