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
  {
    slug: "pump-harari-heat-pump-chist",
    title: {
      fa: "پمپ حرارتی (Heat Pump) چیست؟ راهنمای کامل برای خانه و کسب‌وکار",
      en: "What is a Heat Pump? Complete Guide for Homes and Businesses"
    },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "پمپ حرارتی با یک دستگاه هم گرمایش می‌دهد هم سرمایش؛ ۶۰ تا ۷۰ درصد مصرف گاز و برق را کاهش می‌دهد و در شرایط تورم انرژی ایران بهترین جایگزین برای پکیج و کولر گازی است.",
      en: "A heat pump provides both heating and cooling in one unit, cuts gas and electricity bills by 60–70%, and is the best replacement for package heaters and split ACs in Iran's high-energy-cost era."
    },
    readTime: { fa: "۸ دقیقه", en: "8 min" },
    date: "1405-04-22",
    body: {
      fa: [
        {
          h2: "پمپ حرارتی چیست و چرا در ایران ترند شده؟",
          p: "پمپ حرارتی یک دستگاه الکتریکی است که به جای تولید گرما، آن را از بیرون به داخل خانه منتقل می‌کند. در زمستان گرما را از هوای بیرون (حتی در دماهای زیر صفر) می‌گیرد و به داخل می‌برد، و در تابستان این فرایند را برعکس انجام می‌دهد تا خانه را خنک کند. در واقع یک پمپ حرارتی همان اسپلیت است که قابلیت گرمایشی بسیار پیشرفته‌تری دارد. در دو سال گذشته با تورم گاز و برق و قطعی‌های مکرر، پمپ حرارتی در ایران به یکی از پرطرفدارترین سیستم‌های گرمایشی-سرمایشی تبدیل شده است، زیرا با یک دستگاه دو نیاز اصلی خانه را حل می‌کند و در عین حال مصرف انرژی را به شدت کاهش می‌دهد."
        },
        {
          h2: "تفاوت پمپ حرارتی با پکیج و کولر گازی",
          p: "پکیج دیواری برای تولید گرما از گاز استفاده می‌کند و راندمان آن حدود ۹۰ درصد است؛ یعنی از هر واحد گاز، ۰/۹ واحد گرما می‌سازد. کولر گازی اینورتر معمولی هم فقط سرمایش می‌دهد. اما پمپ حرارتی با مصرف یک واحد برق، ۳ تا ۴ واحد گرما یا سرمایش تولید می‌کند (ضریب عملکرد COP بین ۳ تا ۴). یعنی به ازای هر تومانی که برای برق می‌دهید، سه تا چهار برابر آن انرژی گرمایی یا سرمایشی دریافت می‌کنید. در شرایطی که قیمت گاز خانگی در پله‌های بالا به شدت بالا رفته و قبض برق تابستانه ده‌ها برابر شده، این یعنی صرفه‌جویی مستقیم و قابل ملموس در قبض."
        },
        {
          h2: "انواع پمپ حرارتی: هوایی، زمینی و آبی",
          p: "سه نوع اصلی پمپ حرارتی در بازار وجود دارد. نوع هوایی (Air Source) رایج‌ترین گزینه برای منازل ایران است؛ از هوای بیرون استفاده می‌کند، نصب آسانی دارد و قیمت معقول‌تری دارد. نوع زمینی (Ground Source یا GSHP) از گرمای پایدار زمین در عمق دو تا سه متری استفاده می‌کند و راندمان بالاتری دارد، اما نیاز به حفاری حیاط و سرمایه اولیه بیشتری دارد. نوع آبی (Water Source) برای ساختمان‌های کنار رودخانه یا چاه مناسب است. برای آپارتمان و خانه‌های شهری، پمپ حرارتی هوایی (Air-to-Air یا Air-to-Water) تقریباً همیشه انتخاب بهینه است."
        },
        {
          h2: "Air-to-Water یا Air-to-Air؟ کدام برای شما بهتر است",
          p: "اگر ساختمان شما سیستم لوله‌کشی شوفاژ و رادیاتور دارد، پمپ حرارتی Air-to-Water بهترین انتخاب است؛ این مدل جایگزین پکیج می‌شود و آب گرم مصرفی و آب گرم شوفاژ را همزمان تأمین می‌کند. اگر ساختمان جدید می‌سازید یا بازسازی اساسی دارید، پمپ حرارتی Air-to-Air می‌تواند جایگزین کولر گازی شود و سرمایش و گرمایش را با کانال یا اسپلیت داخلی پخش کند. در ایران اکثر مشتریان مدل Air-to-Water را انتخاب می‌کنند، زیرا با زیرساخت موجود ساختمان‌های قدیمی هماهنگ‌تر است و نیاز به بازسازی اساسی ندارد."
        },
        {
          h2: "صرفه‌جویی واقعی در قبض: یک محاسبه ساده",
          p: "فرض کنید یک خانه ۱۰۰ متری در مشهد دارید با مصرف سالانه ۲۰۰۰ مترمکعب گاز (زمستان) و ۳۵۰۰ کیلووات‌ساعت برق (تابستان). با نصب پمپ حرارتی، گاز تقریباً صفر می‌شود (مگر برای پخت‌وپز) و مصرف برق از ۳۵۰۰ به حدود ۲۵۰۰ کیلووات‌ساعت در سال می‌رسد. با تعرفه‌های پلکانی فعلی، این یعنی صرفه‌جویی سالانه ۴۰ تا ۶۰ میلیون تومانی بسته به منطقه. هزینه نصب کامل یک پمپ حرارتی Air-to-Water با کیفیت برای خانه ۱۰۰ متری حدود ۸۰ تا ۱۲۰ میلیون تومان است؛ یعنی بازگشت سرمایه حدود دو تا سه سال. این عدد در شرایط تورم ۴۰ درصدی، سرمایه‌گذاری بسیار منطقی است."
        },
        {
          h2: "نکات فنی هنگام خرید پمپ حرارتی",
          p: "هنگام انتخاب مدل، حتماً به ضریب عملکرد در دمای پایین (SCOP) نگاه کنید، نه فقط راندمان نامی. برای مناطق سردسیر مثل مشهد، تبریز و اراک، مدل‌هایی انتخاب کنید که در دمای منفی ۱۵ درجه سانتی‌گراد هنوز COP بالای ۲/۵ داشته باشند. برندهای معتبر چینی مثل Midea، Gree و Haier مدل‌های اقتصادی با گارانتی خوب دارند، و برندهای اروپایی مثل Daikin و Mitsubishi کیفیت بالاتری می‌دهند اما قیمتشان دو تا سه برابر است. حجم مخزن آب گرم، توان کمپرسور (معمولاً ۵ تا ۱۶ کیلووات برای منازل) و نوع مبرد (R32 یا R410A) را هم حتماً با کارشناس پارسا انرژی بررسی کنید."
        },
        {
          h2: "نگهداری و طول عمر پمپ حرارتی",
          p: "پمپ حرارتی اگر به درستی سرویس شود، بین ۱۵ تا ۲۰ سال کار می‌کند； یعنی دو برابر یک پکیج معمولی. نگهداری سالانه شامل تمیز کردن کندانسور بیرونی، بررسی فشار مبرد، چک کردن شیر انبساط و تمیز کردن فیلتر یونیت داخلی است. در مناطق با آب سخت مثل مشهد و یزد، رسوب‌گیری مبدل حرارتی یک مشکل شایع است؛ استفاده از شیر soften یا رسوب‌گیر مغناطیسی و شستشوی سالانه مبدل با محلول اسید ضعیف ضروری است. تیم تاسیسات پارسا انرژی سرویس دوره‌ای پمپ‌های حرارتی را با قرارداد SLA و پاسخ زیر ۴ ساعت در مشهد و حومه ارائه می‌دهد."
        },
        {
          h2: "آیا پمپ حرارتی با خورشیدی هماهنگ می‌شود؟",
          p: "بله، و این ترکیب بهترین حالت ممکن برای یک خانه سبز و اقتصادی است. اگر نیروگاه خورشیدی متصل به شبکه نصب کنید، در روز برق مصرفی پمپ حرارتی تقریباً رایگان تأمین می‌شود. در شب هم با تعرفه شبانه یا ذخیره‌ساز باتری، هزینه برق پایین می‌ماند. این ترکیب به خانه‌ای می‌رسد که هم در زمستان گرم است، هم در تابستان خنک، هم قبض گاز تقریباً ندارد و هم قبض برق آن به حداقل می‌رسد. پارسا انرژی مشاوره رایگان برای طراحی ترکیبی خورشیدی + پمپ حرارتی متناسب با متراژ و منطقه شما ارائه می‌دهد."
        }
      ],
      en: [
        {
          h2: "What Is a Heat Pump and Why Is It Trending in Iran?",
          p: "A heat pump is an electric device that moves heat rather than generating it. In winter it extracts heat from outdoor air — even at sub-zero temperatures — and brings it inside; in summer it reverses the cycle to cool the home. Think of it as a split AC with far more advanced heating capability. Over the past two years, with soaring gas and electricity prices and frequent outages, heat pumps have become one of Iran's most popular heating-cooling systems because a single unit solves both needs while dramatically cutting energy use."
        },
        {
          h2: "Heat Pump vs. Package Heater and Split AC",
          p: "A wall-hung package boiler burns gas at about 90% efficiency — 0.9 units of heat per unit of gas. A standard inverter split AC only cools. A heat pump, however, delivers 3 to 4 units of heat or cool per unit of electricity (COP of 3–4). With high-tier gas prices and summer electricity bills multiplying tenfold, this means real, immediate savings."
        },
        {
          h2: "Air, Ground, or Water Source — Which Is Right?",
          p: "Three main types exist. Air-source is the most common choice for Iranian homes — easy installation, reasonable price. Ground-source (GSHP) uses stable underground heat with higher efficiency but needs yard excavation and a larger upfront budget. Water-source suits buildings near rivers or wells. For urban apartments and houses, air-source (Air-to-Air or Air-to-Water) is almost always the optimal pick."
        },
        {
          h2: "Air-to-Water or Air-to-Air — Which Fits Your Building?",
          p: "If your building already has radiator piping, Air-to-Water is the best choice — it replaces the package boiler and supplies both domestic hot water and central heating. For new builds or major renovations, Air-to-Air can replace split ACs and distribute heating/cooling via ducts or indoor splits. Most Iranian customers choose Air-to-Water because it matches existing infrastructure."
        },
        {
          h2: "Real Bill Savings — A Simple Calculation",
          p: "Assume a 100 m² home in Mashhad consuming 2,000 m³ of gas in winter and 3,500 kWh of electricity in summer. With a heat pump, gas drops to near zero and electricity falls to about 2,500 kWh/year. At current tiered tariffs, that is 40–60 million toman saved annually. Installation cost for a quality Air-to-Water unit is 80–120 million toman — payback in 2–3 years. At 40% inflation, this is a very logical investment."
        },
        {
          h2: "Technical Tips When Buying a Heat Pump",
          p: "Always check the Seasonal Coefficient of Performance (SCOP) at low temperatures, not just rated efficiency. For cold regions like Mashhad, Tabriz, and Arak, choose models that still deliver COP above 2.5 at -15°C. Quality Chinese brands (Midea, Gree, Haier) offer good warranties; European brands (Daikin, Mitsubishi) give higher quality at 2–3× the price. Always verify hot water tank size, compressor capacity (typically 5–16 kW for homes), and refrigerant type (R32 or R410A) with a Parsa Energy specialist."
        },
        {
          h2: "Maintenance and Lifespan",
          p: "A properly serviced heat pump lasts 15–20 years — twice the life of a package boiler. Annual maintenance includes cleaning the outdoor condenser, checking refrigerant pressure, inspecting the expansion valve, and cleaning the indoor filter. In hard-water areas like Mashhad and Yazd, heat-exchanger scaling is common; a magnetic descaler or water softener plus annual acid wash is essential. Parsa Energy's HVAC team offers SLA-based periodic service with sub-4-hour response in Mashhad and surroundings."
        },
        {
          h2: "Can a Heat Pump Work with Solar?",
          p: "Yes — and this combination is the ideal green, economical home. With a grid-tied solar plant, daytime heat-pump electricity is essentially free. At night, off-peak tariffs or battery storage keep costs low. The result: warm winters, cool summers, near-zero gas bills, minimized electricity bills. Parsa Energy offers free consultation for combined solar + heat pump systems tailored to your home's size and region."
        }
      ]
    },
    faqs: [
      {
        q: { fa: "پمپ حرارتی در زمستان‌های سرد مشهد خوب کار می‌کند؟", en: "Does a heat pump work well in cold Mashhad winters?" },
        a: { fa: "بله، مدل‌های مدرن در دمای منفی ۲۰ درجه هم کار می‌کنند، اما راندمان آن‌ها در دماهای زیر منفی ۱۰ افت می‌کند. برای مشهد، مدلی با SCOP بالا و گرمایش کمکی انتخاب کنید.", en: "Yes, modern models work down to -20°C, but efficiency drops below -10°C. For Mashhad, choose a model with high SCOP and auxiliary heating." }
      },
      {
        q: { fa: "هزینه نصب پمپ حرارتی برای خانه ۱۰۰ متری چقدر است؟", en: "How much does heat pump installation cost for a 100 m² home?" },
        a: { fa: "بسته به برند و نوع، از ۸۰ تا ۱۲۰ میلیون تومان. این شامل دستگاه، نصب، لوله‌کشی و راه‌اندازی است. بازگشت سرمایه معمولاً دو تا سه سال.", en: "Depending on brand and type, 80–120 million toman including unit, installation, piping, and commissioning. Payback is typically 2–3 years." }
      },
      {
        q: { fa: "آیا پمپ حرارتی جایگزین پکیج و کولر گازی همزمان می‌شود؟", en: "Can a heat pump replace both the package boiler and split AC?" },
        a: { fa: "بله، یک پمپ حرارتی Air-to-Water می‌تواند گرمایش، آب گرم مصرفی و با اضافه کردن فن کویل، سرمایش را هم تأمین کند. در نتیجه هم پکیج و هم کولر گازی حذف می‌شوند.", en: "Yes, an Air-to-Water heat pump can provide heating, domestic hot water, and — with a fan coil — cooling. Both the package boiler and split AC can be eliminated." }
      }
    ]
  },
  {
    slug: "home-energy-storage-zaker-energy-khanegi",
    title: {
      fa: "ذخیره‌ساز انرژی خانگی (Home Energy Storage) چیست و چرا در ۱۴۰۵ ضروری است؟",
      en: "Home Energy Storage: What It Is and Why It's Essential in 2025"
    },
    category: "solar",
    categoryLabel: { fa: "خورشیدی", en: "Solar" },
    excerpt: {
      fa: "ذخیره‌ساز انرژی خانگی یک بانک باتری هوشمند است که در ساعات پیک یا قطعی، برق خانه را تأمین می‌کند. در شرایط قطعی‌های برنامه‌ریزی‌شده ۱۴۰۵، این سیستم به یک ضرورت برای هر خانه‌ای تبدیل شده است.",
      en: "Home energy storage is a smart battery bank that powers your home during peak hours or outages. With Iran's 2025 rolling blackouts, it has become a necessity for every household."
    },
    readTime: { fa: "۸ دقیقه", en: "8 min" },
    date: "1405-04-22",
    body: {
      fa: [
        {
          h2: "ذخیره‌ساز انرژی خانگی چیست؟",
          p: "ذخیره‌ساز انرژی خانگی (Home Energy Storage System یا HESS) یک دستگاه مجتمع از باتری لیتیوم-آهن-فسفات (LiFePO4)، اینورتر هوشمند و سیستم مدیریت باتری (BMS) است که برق شبکه را در ساعات کم‌بار ذخیره کرده و در زمان قطعی یا پیک، به مصرف‌کننده خانگی تحویل می‌دهد. در واقع همان Power Wall که شرکت تسلا آن را معرفی کرد، اما نسخه‌های متناسب با بازار ایران با قیمت بسیار پایین‌تر و ولتاژ کاری ۴۸ ولت یا ۵۱/۲ ولت تولید شده‌اند. اگر شما نیروگاه خورشیدی ندارید، ذخیره‌ساز به تنهایی هم می‌تواند یک راهکار بسیار مؤثر برای عبور از قطعی‌های برنامه‌ریزی‌شده باشد."
        },
        {
          h2: "چرا در سال ۱۴۰۵ به ذخیره‌ساز نیاز داریم؟",
          p: "تابستان ۱۴۰۴ و زمستان ۱۴۰۴ نشان داد که قطعی برق در ایران دیگر یک اتفاق نادر نیست، بلکه یک واقعیت برنامه‌ریزی‌شده است. در تابستان به دلیل ناترازی پیک سرمایشی، در بسیاری از استان‌ها قطعی مرحله‌ای اعمال شد و در زمستان هم به دلیل کمبود گاز نیروگاهی، همین مسئله تکرار شد. خانواده‌ها با یخچال‌های فاسد، مودم‌های قطع، غذاهای خراب و آسانسورهای متوقف مواجه شدند. یک ذخیره‌ساز انرژی خانگی با ظرفیت ۵ تا ۱۰ کیلووات‌ساعت می‌تواند در طول قطعی ۴ تا ۸ ساعته، یخچال، مودم، روشنایی، فن و یک کولر کوچک را روشن نگه دارد و این ریسک را به طور کامل حذف کند."
        },
        {
          h2: "تفاوت ذخیره‌ساز با UPS و دیزل ژنراتور",
          p: "UPS برای بارهای حساس کوتاه‌مدت (۱۵ تا ۳۰ دقیقه) مناسب است و فقط برای کامپیوتر یا سرور کاربرد دارد. دیزل ژنراتور برای قطعی‌های طولانی اما با صدای زیاد، آلایندگی، نیاز به سوخت و نگهداری مکرر کار می‌کند. ذخیره‌ساز خانگی اما هیچ صدایی ندارد، هیچ آلایندگی تولید نمی‌کند، نگهداری خاصی هم نیاز ندارد و می‌تواند بدون قطعی در میلی‌ثانیه برق را تحویل دهد. در مناطق آپارتمانی که نصب دیزل ژنراتور به دلیل صدای زیاد و دود ممکن نیست، ذخیره‌ساز تنها گزینه منطقی است."
        },
        {
          h2: "ظرفیت مناسب: ۵، ۱۰ یا ۱۵ کیلووات‌ساعت؟",
          p: "برای یک آپارتمان ۱۰۰ متری با بار حساس شامل یخچال, مودم، روشنایی، یک کولر گازی ۱۲۰۰۰ و دو پنکه، یک ذخیره‌ساز ۵ کیلووات‌ساعت حدود ۴ تا ۶ ساعت دوام می‌آورد و حدود ۸۰ تا ۱۲۰ میلیون تومان هزینه دارد. برای خانه‌ای که می‌خواهد در قطعی ۸ ساعته کامل کار کند (با کولر، پمپ آب و یخچال)، ظرفیت ۱۰ کیلووات‌ساعت منطقی‌تر است (۱۵۰ تا ۲۰۰ میلیون تومان). برای ویلاها و خانه‌های بزرگ با چند کولر و پمپ، ظرفیت ۱۵ تا ۲۰ کیلووات‌ساعت نیاز است. معمولاً پیشنهاد می‌کنیم حداقل ۱۰ کیلووات‌ساعت برای یک خانوار ۴ نفره در نظر بگیرید تا در قطعی‌های واقعی احساس ناامنی نکنید."
        },
        {
          h2: "تنها ذخیره‌ساز یا ترکیب با خورشیدی؟",
          p: "ذخیره‌ساز تنها در حالتی کار می‌کند که در ساعات کم‌بار (شب) از شبکه شارژ شود و در ساعات قطعی تخلیه. این راه‌حل ساده و سریع است، اما در طول قطعی طولانی، فقط به اندازه ظرفیت باتری کار می‌کند. ترکیب با نیروگاه خورشیدی اما یک راه‌حل پایدارتر است: پنل‌ها در روز باتری را شارژ می‌کنند، باتری در شب یا قطعی برق خانه را تأمین می‌کند و در واقع خانه به یک میکروگرید هایبرید مستقل تبدیل می‌شود. این ترکیب برای مناطق با قطعی مکرر و طولانی، بهترین راه‌حل بلندمدت است."
        },
        {
          h2: "نگهداری و طول عمر ذخیره‌ساز",
          p: "باتری‌های LiFePO4 مدرن بین ۴۰۰۰ تا ۶۰۰۰ سیکل شارژ-تخلیه کار می‌کنند، که یعنی ۱۰ تا ۱۵ سال عمر مفید. نگهداری بسیار ساده است: محیط نصب باید خشک، خنک (۱۵ تا ۳۰ درجه) و دارای تهویه باشد. BMS داخلی تمام پارامترها را پایش می‌کند و در صورت ناهنجاری هشدار می‌دهد. مهم‌ترین نکته این است که ذخیره‌ساز را در فضای باز یا گاراژ داغ نصب نکنید، زیرا دمای بالای ۴۰ درجه عمر باتری را به شدت کاهش می‌دهد. تیم پارسا انرژی نصب، تنظیم و پایش از راه دور ذخیره‌سازها را با گارانتی ۵ تا ۱۰ ساله ارائه می‌دهد."
        },
        {
          h2: "هزینه کل مالکیت و بازگشت سرمایه",
          p: "در حال حاضر قیمت یک ذخیره‌ساز ۱۰ کیلووات‌ساعت با کیفیت و گارانتی معتبر، حدود ۱۵۰ تا ۲۰۰ میلیون تومان است. در شرایط قطعی مکرر، صرفه‌جویی مستقیم شامل: جلوگیری از خرابی یخچال (۱۵ تا ۳۰ میلیون تومان در هر بار خرابی)، جلوگیری از خرابی غذای فریزر (۵ تا ۱۰ میلیون تومان)، حفظ فعالیت کسب‌وکار خانگی (۵ تا ۱۰ میلیون تومان در هر روز قطعی) و جلوگیری از استرس و ناراحتی‌های ناشی از قطعی است. با این حساب، بازگشت سرمایه مستقیم حدود ۳ تا ۵ سال است و اگر ارزش‌گذاری‌های غیرمستقیم را هم لحاظ کنیم، بازگشت سرمایه زیر ۲ سال خواهد بود."
        },
        {
          h2: "گام بعدی: انتخاب مدل و نصب",
          p: "اگر به ذخیره‌ساز فکر می‌کنید، اولین گام محاسبه بار حساس خانه است: کدام دستگاه‌ها در زمان قطعی حتماً باید روشن بمانند؟ مصرف هر کدام را در وات ضرب در ساعت مصرف روزانه کنید تا ظرفیت مورد نیاز باتری مشخص شود. سپس با کارشناس پارسا انرژی مشورت کنید تا مدل مناسب (با توجه به فضای نصب، بودجه و نیاز به ترکیب با خورشیدی) انتخاب شود. مشاوره اولیه ۳۰ دقیقه‌ای رایگان است و شامل برآورد هزینه، انتخاب مدل و طراحی سیستم می‌شود. تماس از طریق واتساپ یا فرم تماس سایت."
        }
      ],
      en: [
        {
          h2: "What Is Home Energy Storage?",
          p: "A Home Energy Storage System (HESS) is an integrated unit combining a LiFePO4 battery, smart inverter, and Battery Management System (BMS). It stores grid electricity during low-demand hours and delivers it to household loads during outages or peak pricing. It is essentially Tesla's Power Wall, but Iranian-market versions at far lower cost and 48V or 51.2V operating voltage. Even without a solar plant, a standalone HESS can be a powerful solution to ride through rolling blackouts."
        },
        {
          h2: "Why Do You Need Storage in 2025?",
          p: "The summers and winters of 1404 (2025) proved that Iranian power outages are no longer rare events — they are scheduled reality. Summer brings cooling-peak shortfalls; winter brings gas-plant fuel deficits. Families faced spoiled fridges, dead modems, spoiled food, and stalled elevators. A 5–10 kWh HESS can keep a fridge, modem, lighting, fans, and a small AC running for 4–8 hours of outage, eliminating this risk entirely."
        },
        {
          h2: "Storage vs. UPS and Diesel Generator",
          p: "UPS handles short critical loads (15–30 minutes) for computers or servers. Diesel generators handle long outages but with noise, pollution, fuel needs, and frequent maintenance. A home storage system is silent, emission-free, virtually maintenance-free, and switches in milliseconds. In apartment buildings where generators are impossible due to noise and smoke, storage is the only rational option."
        },
        {
          h2: "Right Capacity: 5, 10, or 15 kWh?",
          p: "For a 100 m² apartment with critical loads (fridge, modem, lights, one 12,000 BTU split, two fans), a 5 kWh unit lasts 4–6 hours and costs 80–120 million toman. For a home that must operate fully through an 8-hour outage (with AC, water pump, fridge), 10 kWh is more reasonable (150–200 million toman). Villas and large homes with multiple ACs and pumps need 15–20 kWh. We recommend at least 10 kWh for a family of four to feel truly safe during real outages."
        },
        {
          h2: "Storage Alone or Combined with Solar?",
          p: "Standalone storage charges from the grid at night and discharges during outages — simple and fast, but limited to battery capacity. Combined with solar, it becomes a sustainable solution: panels charge the battery by day, the battery powers the home at night or during outages — your home becomes an independent hybrid microgrid. For areas with frequent long outages, this combination is the best long-term solution."
        },
        {
          h2: "Maintenance and Lifespan",
          p: "Modern LiFePO4 batteries deliver 4,000–6,000 charge-discharge cycles, meaning 10–15 years of useful life. Maintenance is simple: keep the environment dry, cool (15–30°C), and ventilated. The internal BMS monitors all parameters and alerts on anomalies. The most important rule: never install in an open yard or hot garage — temperatures above 40°C drastically reduce battery life. Parsa Energy offers installation, configuration, and remote monitoring with 5–10 year warranties."
        },
        {
          h2: "Total Cost of Ownership and Payback",
          p: "Today, a quality 10 kWh storage system with warranty costs 150–200 million toman. With frequent outages, direct savings include: preventing fridge failure (15–30 million toman per incident), preventing freezer food spoilage (5–10 million), preserving home business activity (5–10 million per outage day), and eliminating stress-related losses. Direct payback is 3–5 years; including indirect value, payback falls under 2 years."
        },
        {
          h2: "Next Step: Choosing and Installing",
          p: "If you're considering storage, the first step is calculating your home's critical load: which devices must stay on during an outage? Multiply each device's wattage by daily hours to determine required battery capacity. Then consult a Parsa Energy specialist to select the right model (considering installation space, budget, and solar integration). The initial 30-minute consultation is free and includes cost estimate, model selection, and system design. Contact via WhatsApp or the website form."
        }
      ]
    },
    faqs: [
      {
        q: { fa: "ذخیره‌ساز انرژی خانگی چقدر طول می‌کشد باتری را شارژ کند؟", en: "How long does it take to charge a home storage system?" },
        a: { fa: "بسته به ظرفیت و توان شارژ, یک ذخیره‌ساز ۱۰ کیلووات‌ساعت در ۳ تا ۵ ساعت از شبکه کامل شارژ می‌شود. اگر خورشیدی داشته باشید، در یک روز آفتابی کامل شارژ می‌شود.", en: "Depending on capacity and charge power, a 10 kWh unit fully charges from the grid in 3–5 hours. With solar, it charges fully in one sunny day." }
      },
      {
        q: { fa: "آیا ذخیره‌ساز در آپارتمان نصب می‌شود؟", en: "Can storage systems be installed in apartments?" },
        a: { fa: "بله، به شرطی که فضای مناسب (انباری، زیرزمین، یا نزدیک تابلو برق) با تهویه کافی وجود داشته باشد. باتری‌های LiFePO4 کاملاً ایمن و بدون گاز سمی هستند.", en: "Yes, provided there is suitable space (storage room, basement, or near the panel) with adequate ventilation. LiFePO4 batteries are fully safe and emit no toxic gas." }
      },
      {
        q: { fa: "در قطعی ۸ ساعته چقدر دوام می‌آورد؟", en: "How long does it last during an 8-hour outage?" },
        a: { fa: "یک ذخیره‌ساز ۱۰ کیلووات‌ساعت با بار حساس (یخچال، مودم، روشنایی، یک کولر) حدود ۶ تا ۸ ساعت دوام می‌آورد. برای بار کامل خانه، ظرفیت بالاتر لازم است.", en: "A 10 kWh unit with critical loads (fridge, modem, lights, one AC) lasts 6–8 hours. For full home load, higher capacity is needed." }
      }
    ]
  },
  {
    slug: "chiller-jazbi-khanegi-tejari",
    title: {
      fa: "چیلر جذبی چیست؟ راهکار طلایی سرمایش در پیک تابستانه بدون فشار بر شبکه برق",
      en: "What Is an Absorption Chiller? Summer Peak Cooling Without Straining the Grid"
    },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "چیلر جذبی به جای برق، با گاز یا حرارت کار می‌کند و در پیک تابستانه که شبکه برق دچار ناترازی است، بهترین راهکار سرمایش برای ویلاها، مجتمع‌ها و فروشگاه‌های بزرگ است.",
      en: "An absorption chiller runs on gas or heat instead of electricity — the best cooling solution for villas, complexes, and large stores during summer peak when the grid is overloaded."
    },
    readTime: { fa: "۸ دقیقه", en: "8 min" },
    date: "1405-04-22",
    body: {
      fa: [
        {
          h2: "چیلر جذبی چیست و چگونه کار می‌کند؟",
          p: "چیلر جذبی یک سیستم سرمایش است که بر خلاف چیلرهای تراکمی معمولی که با کمپرسور الکتریکی کار می‌کنند، از یک منبع حرارتی (گاز، آب گرم، بخار یا حتی گرمای خورشید) برای تولید سرما استفاده می‌کند. اصول کار آن بر پایه سیکل تبرید جذبی با محلول آب-لیتیوم‌برماید است؛ گرمای خارجی باعث تبخیر مبرد می‌شود و این چرخه سرمایش تولید می‌کند. در نتیجه، مصرف برق چیلر جذبی در مقایسه با چیلر تراکمی معادل، حدود ۹۰ تا ۹۵ درصد کمتر است. این یعنی در پیک تابستانه که شبکه برق ایران دچار ناترازی است، چیلر جذبی تقریباً هیچ فشاری به شبکه وارد نمی‌کند."
        },
        {
          h2: "چرا چیلر جذبی در ایران ترند شده؟",
          p: "سه عامل اصلی باعث شده چیلر جذبی به یک ترند جدی در بازار HVAC ایران تبدیل شود. اول، قطعی‌های مکرر برق تابستانه که باعث می‌شود چیلرهای تراکمی بزرگ در ساعات پیک از کار بیفتند. دوم، تعرفه‌های پلکانی برق که قبض چیلرهای تراکمی صنعتی و تجاری را به ده‌ها میلیون تومان در ماه می‌رساند. سوم، در دسترس بودن گاز طبیعی با قیمت یارانه‌ای برای مصارف تجاری و صنعتی. ترکیب این سه عامل، چیلر جذبی را از یک فناوری خاص به یک راهکار اقتصادی منطقی تبدیل کرده است؛ مخصوصاً برای مجتمع‌های بزرگ، بیمارستان‌ها, هتل‌ها و فروشگاه‌های زنجیره‌ای."
        },
        {
          h2: "کاربردهای چیلر جذبی در ایران",
          p: "چیلرهای جذبی در چهار دسته اصلی کاربرد دارند. اول، ساختمان‌های تجاری بزرگ و مجتمع‌های اداری که بار سرمایشی بالای ۱۰۰ تن دارند. دوم، بیمارستان‌ها که هم به سرمایش پایدار نیاز دارند و هم به دلیل حساسیت بار، نمی‌توانند به برق پیک وابسته باشند. سوم، هتل‌ها و استراحتگاه‌ها که مصرف سرمایشی بالایی در تابستان دارند. چهارم، صنایع غذایی و دارویی که هم سرمایش نیاز دارند و هم گرمای اتلافی فرایند (مثل دیگ بخار یا کوره) دارند که می‌تواند به عنوان منبع حرارتی چیلر جذبی استفاده شود. در سال‌های اخیر، چیلرهای جذبی کوچک (۱۰ تا ۳۰ تن) هم برای ویلاهای بزرگ و عمارت‌ها عرضه شده‌اند که یک بازار جدید در حال شکل‌گیری است."
        },
        {
          h2: "چیلر جذبی یا چیلر تراکمی؟ مقایسه اقتصادی",
          p: "سرمایه اولیه چیلر جذبی معمولاً ۱/۵ تا ۲ برابر چیلر تراکمی معادل است؛ مثلاً یک چیلر جذبی ۱۰۰ تنی حدود ۸۰۰ تا ۱۲۰۰ میلیون تومان، در حالی که چیلر تراکمی معادل ۴۰۰ تا ۶۰۰ میلیون تومان هزینه دارد. اما هزینه بهره‌برداری کاملاً متفاوت است: چیلر تراکمی ۱۰۰ تنی در ماه حدود ۸۰ تا ۱۲۰ میلیون تومان قبض برق دارد، در حالی که چیلر جذبی همان ظرفیت با گاز کار می‌کند و قبض گاز آن حدود ۲۰ تا ۳۰ میلیون تومان در ماه است. یعنی صرفه‌جویی ماهانه ۶۰ تا ۹۰ میلیون تومان، و بازگشت سرمایه اختلاف اولیه در کمتر از دو سال. در طول عمر ۲۰ ساله دستگاه، این یعنی صرفه‌جویی کلان ۱۴ تا ۱۸ میلیارد تومان."
        },
        {
          h2: "انواع چیلر جذبی بر اساس منبع حرارتی",
          p: "چیلرهای جذبی بر اساس منبع حرارتی به سه دسته تقسیم می‌شوند. نوع direct-fired مستقیماً با شعله گاز کار می‌کند و راندمان بالاتری دارد؛ مناسب برای پروژه‌های جدید. نوع indirect-fired با آب گرم یا بخار کار می‌کند و مناسب فضاهایی است که منبع حرارتی از قبل موجود است (مثل دیگ بخار صنعتی). نوع solar-fired با کلکتورهای خورشیدی حرارتی کار می‌کند و یک راهکار کاملاً سبز است； در ایران هنوز در مرحله آزمایشی است اما پتانسیل بزرگی دارد. برای کاربردهای ساختمانی، نوع direct-fired با گاز طبیعی معمولاً انتخاب بهینه است."
        },
        {
          h2: "چیلر جذبی کوچک برای ویلا و عمارت",
          p: "در دو سال اخیر، چیلرهای جذبی کوچک با ظرفیت ۱۰ تا ۳۰ تن برای بازار ویلا و عمارت وارد ایران شده‌اند. این مدل‌ها با گاز کار می‌کنند، صدای بسیار کمتری نسبت به چیلر تراکمی دارند و می‌توانند جایگزین چند کولر گازی در یک عمارت بزرگ شوند. برای ویلاهای بالای ۳۰۰ متر، چیلر جذبی کوچک با فن‌کویل ترکیب می‌شود و هم سرمایش یکنواخت و هم مصرف بهینه ارائه می‌دهد. هزینه نصب کامل برای ویلا ۴۰۰ متری حدود ۳۰۰ تا ۵۰۰ میلیون تومان است، اما صرفه‌جویی سالانه در قبض برق تابستانه ۴۰ تا ۶۰ میلیون تومان یعنی بازگشت سرمایه حدود ۶ تا ۸ سال."
        },
        {
          h2: "نکات فنی هنگام انتخاب چیلر جذبی",
          p: "هنگام خرید چیلر جذبی، چهار پارامتر کلیدی باید بررسی شود. اول، ظرفیت نامی (تن بر ساعت) باید با بار سرمایشی محاسبه‌شده ساختمان مطابقت داشته باشد؛ بزرگ‌تر انتخاب کردن هزینه اولیه و مصرف را بالا می‌برد. دوم، نوع مبرد و محلول (آب-لیتیوم‌برماید استاندارد یا replacing) و سازگاری با آب محلی. سوم، COP (ضریب عملکرد) چیلر جذبی معمولاً ۰/۶ تا ۰/۷ است، که بسیار پایین‌تر از چیلر تراکمی (۳ تا ۴) است، اما به دلیل استفاده از گاز به جای برق، هزینه بهره‌برداری بسیار پایین‌تر است. چهارم، گارانتی و خدمات پس از فروش؛ چیلر جذبی تکنیکال پیچیده‌تر از چیلر تراکمی است و نیاز به سرویس‌کار آموزش‌دیده دارد."
        },
        {
          h2: "نگهداری و عمر چیلر جذبی",
          p: "اگر به درستی نگهداری شود، یک چیلر جذبی ۲۰ تا ۲۵ سال کار می‌کند؛ یعنی تقریباً دو برابر چیلر تراکمی. نگهداری شامل: بررسی و تعویض محلول لیتیوم‌برماید هر ۳ تا ۵ سال، تمیز کردن لوله‌های مبدل حرارتی، چک کردن پمپ‌های محلول و خلاء دستگاه. مهم‌ترین نکته حفظ خلاء دستگاه است؛ هرگونه نشتی هوا باعث افت راندمان می‌شود. تیم تاسیسات پارسا انرژی سرویس دوره‌ای، تعمیر و تأمین قطعات چیلرهای جذبی برندهای اصلی را در مشهد و حومه ارائه می‌دهد."
        }
      ],
      en: [
        {
          h2: "What Is an Absorption Chiller and How Does It Work?",
          p: "An absorption chiller is a cooling system that — unlike conventional compression chillers with electric compressors — uses a heat source (gas, hot water, steam, or even solar heat) to produce cooling. It operates on the absorption refrigeration cycle with a water-lithium bromide solution. External heat evaporates the refrigerant, and this cycle generates cooling. As a result, an absorption chiller uses 90–95% less electricity than an equivalent compression chiller. During Iran's summer peak when the grid is overloaded, absorption chillers place almost no strain on the network."
        },
        {
          h2: "Why Are Absorption Chillers Trending in Iran?",
          p: "Three main factors have made absorption chillers a serious trend in Iran's HVAC market. First, frequent summer blackouts that take large compression chillers offline during peak hours. Second, tiered electricity tariffs that push industrial and commercial compression-chiller bills to tens of millions of toman per month. Third, the availability of natural gas at subsidized rates for commercial and industrial use. The combination has transformed absorption chillers from a niche technology into an economically rational solution — especially for large complexes, hospitals, hotels, and retail chains."
        },
        {
          h2: "Applications of Absorption Chillers in Iran",
          p: "Absorption chillers serve four main categories. First, large commercial buildings and office complexes with cooling loads above 100 tons. Second, hospitals that need reliable cooling and cannot depend on peak-hour electricity. Third, hotels and resorts with high summer cooling demand. Fourth, food and pharmaceutical industries that need cooling and also have process waste heat (boiler or furnace) that can serve as the chiller's heat source. In recent years, small absorption chillers (10–30 tons) have been introduced for large villas and mansions, opening a new market segment."
        },
        {
          h2: "Absorption vs. Compression Chiller — Economic Comparison",
          p: "Absorption chillers typically cost 1.5–2× the equivalent compression chiller. A 100-ton absorption chiller costs 800–1,200 million toman versus 400–600 million for compression. But operating costs differ dramatically: the compression chiller's monthly electricity bill is 80–120 million toman, while the absorption unit running on gas costs 20–30 million toman monthly. That's 60–90 million toman saved monthly — payback on the price premium in under two years. Over a 20-year lifespan, that's 14–18 billion toman in savings."
        },
        {
          h2: "Types of Absorption Chillers by Heat Source",
          p: "Three main types exist. Direct-fired units burn gas directly with higher efficiency — best for new projects. Indirect-fired units use hot water or steam, suitable where a heat source already exists (e.g., industrial boiler). Solar-fired units use thermal solar collectors and are fully green — still experimental in Iran but with huge potential. For building applications, direct-fired gas units are typically the optimal choice."
        },
        {
          h2: "Small Absorption Chillers for Villas and Mansions",
          p: "In the past two years, small absorption chillers (10–30 tons) have entered the Iranian villa and mansion market. These units run on gas, produce far less noise than compression chillers, and can replace multiple split ACs in a large mansion. For villas over 300 m², a small absorption chiller paired with fan coils delivers uniform cooling and efficient operation. Full installation for a 400 m² villa costs 300–500 million toman, with annual summer-bill savings of 40–60 million toman — payback in 6–8 years."
        },
        {
          h2: "Technical Considerations When Choosing an Absorption Chiller",
          p: "Four key parameters must be checked. First, rated capacity (tons per hour) must match the building's calculated cooling load — oversizing raises both capital and operating costs. Second, refrigerant/solution type (standard water-lithium bromide or alternatives) and compatibility with local water. Third, COP (coefficient of performance) — absorption chillers typically deliver 0.6–0.7, far lower than compression (3–4), but operating costs are much lower due to gas instead of electricity. Fourth, warranty and after-sales service — absorption chillers are technically more complex and require trained technicians."
        },
        {
          h2: "Maintenance and Lifespan",
          p: "Properly maintained, an absorption chiller lasts 20–25 years — nearly twice a compression chiller. Maintenance includes: inspecting and replacing the lithium bromide solution every 3–5 years, cleaning heat-exchanger tubes, checking solution pumps, and monitoring unit vacuum. The most critical factor is maintaining vacuum; any air leak reduces efficiency. Parsa Energy's HVAC team offers periodic service, repair, and parts supply for major-brand absorption chillers in Mashhad and surroundings."
        }
      ]
    },
    faqs: [
      {
        q: { fa: "چیلر جذبی برای منزل مسکونی مناسب است؟", en: "Is an absorption chiller suitable for a residential home?" },
        a: { fa: "برای آپارتمان‌های معمولی خیر، اما برای ویلاهای بالای ۳۰۰ متر یا عمارت‌ها، چیلرهای جذبی کوچک ۱۰ تا ۳۰ تنی گزینه مناسبی هستند. هزینه اولیه بالاتر است اما در طول عمر دستگاه صرفه‌جویی قابل توجه ایجاد می‌کند.", en: "For ordinary apartments, no. But for villas over 300 m² or mansions, small 10–30 ton absorption chillers are a good option. Higher upfront cost but significant savings over the unit's lifetime." }
      },
      {
        q: { fa: "آیا چیلر جذبی با گاز کار می‌کند یا برق؟", en: "Does an absorption chiller run on gas or electricity?" },
        a: { fa: "منبع حرارتی اصلی گاز طبیعی است (در نوع direct-fired)، اما دستگاه برای پمپ‌ها و سیستم کنترل به مقدار کمی برق نیاز دارد. مصرف برق آن حدود ۵ تا ۱۰ درصد چیلر تراکمی معادل است.", en: "The primary heat source is natural gas (in direct-fired units), but the device needs a small amount of electricity for pumps and controls. Power consumption is about 5–10% of an equivalent compression chiller." }
      },
      {
        q: { fa: "بازگشت سرمایه چیلر جذبی چقدر است؟", en: "What is the payback period for an absorption chiller?" },
        a: { fa: "برای ساختمان‌های تجاری بزرگ با بار سرمایشی بالا، بازگشت سرمایه اختلاف اولیه با چیلر تراکمی معمولاً ۱۸ تا ۳۰ ماه است. برای ویلاها و کاربردهای کوچک‌تر، حدود ۶ تا ۸ سال.", en: "For large commercial buildings with high cooling loads, payback on the premium over compression chillers is typically 18–30 months. For villas and smaller applications, about 6–8 years." }
      }
    ]
  },
  {
    slug: "ayac-bandi-harari-sakhteman",
    title: {
      fa: "عایق‌بندی حرارتی ساختمان: راه کاهش ۴۰ درصدی قبض گاز و برق",
      en: "Building Thermal Insulation: Cut Gas and Electricity Bills by 40%"
    },
    category: "hvac",
    categoryLabel: { fa: "تاسیسات", en: "HVAC" },
    excerpt: {
      fa: "بیش از ۴۰ درصد هدررفت انرژی در ساختمان‌های ایران از عایق‌نبودن نما، سقف و پنجره‌ها ناشی می‌شود. عایق‌بندی حرارتی با هزینه‌ای معقول، بازگشت سرمایه زیر ۲ سال و کاهش چشمگیر قبض، ضروری‌ترین سرمایه‌گذاری انرژی هر خانه‌ای است.",
      en: "Over 40% of energy loss in Iranian buildings comes from uninsulated facades, roofs, and windows. Thermal insulation offers sub-2-year payback and dramatic bill reduction — the most essential energy investment for any home."
    },
    readTime: { fa: "۸ دقیقه", en: "8 min" },
    date: "1405-04-22",
    body: {
      fa: [
        {
          h2: "چرا عایق‌بندی حرارتی در ایران یک ضرورت است؟",
          p: "بیش از ۷۰ درصد ساختمان‌های مسکونی ایران فاقد هرگونه عایق حرارتی استاندارد هستند. در نتیجه، در زمستان حدود ۳۵ تا ۴۵ درصد گرمای تولیدشده توسط پکیج از طریق دیوارها، سقف و پنجره‌ها هدر می‌رود و در تابستان همین مقدار سرمای تولیدشده توسط کولر گازی فرار می‌کند. این یعنی شما برای گرم یا سرد کردن محیط، دو برابر انرژی لازم مصرف می‌کنید و قبض‌های نجومی دریافت می‌کنید. در شرایط فعلی که قیمت گاز در پله‌های بالا و برق در پیک تابستانه به شدت گران شده، عایق‌بندی دیگر یک انتخاب لوکس نیست، بلکه یک ضرورت اقتصادی است. در ساختمان‌های جدید، مطابق آیین‌نامه ۱۹ ماده ملی ساختمان، عایق‌بندی الزامی است اما در ساختمان‌های قدیمی باید به صورت بعدی اضافه شود."
        },
        {
          h2: "بیشترین هدررفت انرژی از کجاست؟",
          p: "در یک ساختمان معمولی غیرعایق، توزیع هدررفت تقریباً به این شکل است: ۳۵ درصد از طریق سقف (مخصوصاً در طبقه آخر)، ۲۵ درصد از طریق دیوارهای خارجی و نما، ۲۰ درصد از طریق پنجره‌ها، ۱۰ درصد از طریق کف (مخصوصاً در طبقه همکف) و ۱۰ درصد از طریق درزها و نفوذ هوا. برای شروع عایق‌بندی، اولویت اول همیشه سقف است زیرا هوای گرم به سمت بالا حرکت می‌کند و بیشترین هدررفت از سقف اتفاق می‌افتد. اولویت دوم پنجره‌ها هستند که با نسبت مساحت کم، هدررفت بالایی دارند. اولویت سوم دیوارهای خارجی است که با عایق‌بندی نما یا داخل، می‌توان هدررفت را تا ۷۰ درصد کاهش داد."
        },
        {
          h2: "انواع عایق حرارتی و کاربرد هر یک",
          p: "بازار ایران انواع مختلفی از عایق‌های حرارتی را ارائه می‌دهد. فوم پلی‌اورتان (PUF) بهترین عایق در واحد ضخامت است؛ ۵ سانتی‌متر فوم معادل ۵۰ سانتی‌متر آجر است. مناسب برای سقف، کف و دیوارهای داخلی. پشم سنگ و پشم شیشه عایق‌های معدنی غیرقابل اشتعال هستند که برای سقف‌های کاذب و داکت‌ها استفاده می‌شوند. فوم پلی‌استایرن (EPS یا XPS) برای کف و سقف مناسب است و قیمت اقتصادی دارد. ایزوگام و عایق‌های رولی برای سقف شیب‌دار استفاده می‌شوند. عایق‌های انعکاسی (آلومینیومی) برای فضاهای با تابش شدید خورشید کاربرد دارند. برای هر کاربرد، عایق مناسب متفاوت است؛ مشاوره با کارشناس ضروری است."
        },
        {
          h2: "عایق‌بندی نما: داخل یا خارج؟",
          p: "عایق‌بندی نما از بیرون بهتر است زیرا دیوار به صورت یکپارچه عایق می‌شود و پل‌های حرارتی (مثل ستون‌ها و تیرچه‌ها) هم پوشانده می‌شوند. اما در ساختمان‌های قدیمی و آپارتمان‌ها، دسترسی به نمای بیرونی دشوار است و نیاز به داربست دارد. در این موارد، عایق‌بندی از داخل با پانل‌های عایق نازک (مثل پانل‌های پلی‌اورتان پوشش‌دار یا گچ‌board عایق) یک راه‌حل عملی‌تر است. اگرچه ضخامت کمتری از فضای داخلی می‌گیرد (معمولاً ۳ تا ۵ سانتی‌متر)، اما هدررفت حرارتی دیوار را تا ۶۰ تا ۷۵ درصد کاهش می‌دهد. برای ساختمان‌های در حال ساخت، عایق‌بندی خارجی با سیستم‌های کامپوزیتی یا نمای خشک همیشه اولویت دارد."
        },
        {
          h2: "پنجره‌ها: دروازه اصلی هدررفت",
          p: "پنجره‌های تک‌جداره آلومینیومی قدیمی که در اکثر ساختمان‌های قبل از ۱۳۹۰ نصب شده‌اند، یکی از بزرگترین منابع هدررفت انرژی هستند. تعویض آن‌ها با پنجره‌های دوجداره UPVC با گاز آرگون، هدررفت از طریق پنجره را تا ۷۰ درصد کاهش می‌دهد. برای مناطق سردسیر، پنجره‌های سه‌جداره با ضریب انتقال حرارت U زیر ۱/۲ W/m²K پیشنهاد می‌شود. علاوه بر خود شیشه، فریم پنجره هم اهمیت دارد؛ فریم‌های آلومینیومی با شکست حرارتی (thermal break) یا فریم‌های UPVC، بسیار بهتر از فریم‌های آلومینیومی یکپارچه هستند. اگر تعویض کامل پنجره ممکن نیست، استفاده از شیشه‌های دوگانه ثانویه (secondary glazing) یک راه‌حل با هزینه کمتر است."
        },
        {
          h2: "صرفه‌جویی واقعی در قبض: محاسبه",
          p: "فرض کنید یک آپارتمان ۱۰۰ متری در مشهد دارید. بدون عایق، مصرف زمستانه گاز حدود ۳۰۰۰ مترمکعب و مصرف تابستانه برق حدود ۴۵۰۰ کیلووات‌ساعت است. با عایق‌بندی کامل (سقف، نما و پنجره)، این مصرف‌ها به ترتیب به ۱۸۰۰ مترمکعب و ۲۷۰۰ کیلووات‌ساعت کاهش می‌یابند. یعنی صرفه‌جویی سالانه حدود ۴۰ درصد در گاز و ۴۰ درصد در برق. در تعرفه‌های پلکانی فعلی، این صرفه‌جویی معادل ۳۰ تا ۵۰ میلیون تومان در سال است. هزینه عایق‌بندی کامل برای آپارتمان ۱۰۰ متری بسته به نوع عایق و وضعیت ساختمان، بین ۴۰ تا ۸۰ میلیون تومان است؛ یعنی بازگشت سرمایه حدود ۱ تا ۲ سال. این یکی از بهترین سرمایه‌گذاری‌های انرژی است که می‌توانید انجام دهید."
        },
        {
          h2: "عایق‌بندی و ساختمان سبز",
          p: "عایق‌بندی حرارتی فقط به صرفه‌جویی مالی ختم نمی‌شود؛ بلکه آسایش حرارتی خانه را هم به شدت بهبود می‌بخشد. در یک خانه عایق‌شده، اختلاف دمای بین دیوارهای مختلف کمتر از ۱ درجه است، در حالی که در خانه‌های غیرعایق این اختلاف می‌تواند به ۵ درجه برسد. همچنین، عایق‌بندی باعث می‌شود سیستم گرمایش و سرمایش کمتر روشن و خاموش شود، که هم عمر دستگاه بیشتر می‌شود و هم صدای کمتری تولید می‌شود. در ساختمان‌های جدید، ترکیب عایق‌بندی با پمپ حرارتی یا چیلر جذبی، می‌تواند به یک خانه با قبض انرژی نزدیک به صفر (Near Zero Energy Building) برسد که آینده صنعت ساختمان است."
        },
        {
          h2: "گام بعدی: ارزیابی و اجرا",
          p: "اگر به عایق‌بندی فکر می‌کنید، اولین گام یک ممیزی انرژی ساختمان است که در آن با دوربین حرارتی نقاط هدررفت مشخص می‌شوند. تیم تاسیسات پارسا انرژی این ممیزی را با گزارش مکتوب و پیشنهاد عایق‌بندی با اولویت‌بندی اقتصادی ارائه می‌دهد. پس از تایید مشتری، اجرای عایق‌بندی توسط تیم‌های متخصص انجام می‌شود و در پایان، تست حرارتی نهایی برای تأیید عملکرد انجام می‌گیرد. مشاوره اولیه و ارزیابی اولیه رایگان است. تماس از طریق واتساپ یا فرم تماس سایت."
        }
      ],
      en: [
        {
          h2: "Why Thermal Insulation Is Essential in Iran",
          p: "Over 70% of Iranian residential buildings lack standard thermal insulation. As a result, in winter 35–45% of heat generated by the package boiler escapes through walls, roof, and windows; in summer the same share of cooling is lost. This means you consume twice the energy needed and pay astronomical bills. With today's tiered gas and peak-summer electricity prices, insulation is no longer a luxury — it's an economic necessity. New buildings are required by National Building Regulation 19 to be insulated, but older buildings need retrofit."
        },
        {
          h2: "Where Does Most Energy Loss Occur?",
          p: "In a typical uninsulated building, loss distribution is approximately: 35% through the roof (especially top floor), 25% through exterior walls and facade, 20% through windows, 10% through the floor (especially ground floor), and 10% through air infiltration. Roof is always the first priority — warm air rises and the roof has the greatest loss. Windows are second priority — small area but high loss. Exterior walls are third — facade or interior insulation can cut loss by 70%."
        },
        {
          h2: "Types of Thermal Insulation and Their Uses",
          p: "The Iranian market offers many insulation types. Polyurethane foam (PUF) is the best per unit thickness — 5 cm of foam equals 50 cm of brick; ideal for roofs, floors, and interior walls. Rock wool and fiberglass are non-combustible mineral insulations for false ceilings and ducts. Polystyrene foam (EPS or XPS) is economical for floors and roofs. Bituminous membrane and roll insulations suit pitched roofs. Reflective (aluminum) insulations work well in intense solar exposure. Each application requires its specific insulation — expert consultation is essential."
        },
        {
          h2: "Facade Insulation: Inside or Outside?",
          p: "Outside insulation is better — the wall is uniformly insulated and thermal bridges (columns, joists) are covered. But in older buildings and apartments, exterior access is difficult and requires scaffolding. In these cases, interior insulation with thin panels (polyurethane-cored or insulated gypsum board) is more practical. Although it takes less interior space (typically 3–5 cm), it reduces wall heat loss by 60–75%. For new construction, external insulation with composite or dry-facade systems is always the priority."
        },
        {
          h2: "Windows: The Main Gateway of Loss",
          p: "Old single-glazed aluminum windows common in pre-1390 buildings are among the largest sources of energy loss. Replacing them with double-glazed UPVC windows with argon gas cuts window loss by 70%. For cold regions, triple-glazed windows with U-value below 1.2 W/m²K are recommended. Frame material also matters — aluminum frames with thermal break or UPVC frames far outperform monolithic aluminum. If full window replacement is not possible, secondary glazing is a lower-cost alternative."
        },
        {
          h2: "Real Bill Savings — Calculation",
          p: "Assume a 100 m² apartment in Mashhad. Without insulation, winter gas use is about 3,000 m³ and summer electricity about 4,500 kWh. With full insulation (roof, facade, windows), these drop to 1,800 m³ and 2,700 kWh — a 40% reduction in both. At current tiered tariffs, this saves 30–50 million toman annually. Full insulation for a 100 m² apartment costs 40–80 million toman depending on type and condition — payback in 1–2 years. This is one of the best energy investments you can make."
        },
        {
          h2: "Insulation and Green Building",
          p: "Thermal insulation doesn't just save money — it dramatically improves thermal comfort. In an insulated home, temperature difference between walls is less than 1°C; in uninsulated homes it can reach 5°C. Insulation also reduces HVAC cycling — longer equipment life and less noise. In new buildings, combining insulation with a heat pump or absorption chiller can achieve a Near Zero Energy Building — the future of construction."
        },
        {
          h2: "Next Step: Assessment and Installation",
          p: "If you're considering insulation, the first step is a building energy audit using thermal imaging to pinpoint loss areas. Parsa Energy's HVAC team provides this audit with a written report and economically prioritized insulation recommendations. After client approval, installation is performed by specialized teams, with a final thermal test to verify performance. Initial consultation and assessment are free. Contact via WhatsApp or the website form."
        }
      ]
    },
    faqs: [
      {
        q: { fa: "هزینه عایق‌بندی کامل یک آپارتمان ۱۰۰ متری چقدر است؟", en: "How much does full insulation cost for a 100 m² apartment?" },
        a: { fa: "بسته به نوع عایق و وضعیت ساختمان، بین ۴۰ تا ۸۰ میلیون تومان. این شامل عایق‌بندی سقف، نما (از داخل) و تعویض یا بهبود پنجره‌ها است. بازگشت سرمایه معمولاً یک تا دو سال.", en: "Depending on insulation type and building condition, 40–80 million toman. Includes roof, facade (interior), and window replacement or upgrade. Payback is typically 1–2 years." }
      },
      {
        q: { fa: "آیا عایق‌بندی از داخل کارآمد است؟", en: "Is interior insulation effective?" },
        a: { fa: "بله، عایق‌بندی از داخل با پانل‌های نازک (۳ تا ۵ سانتی‌متر) می‌تواند هدررفت دیوار را تا ۶۰ تا ۷۵ درصد کاهش دهد. البته عایق‌بندی از بیرون بهتر است اما در آپارتمان‌ها اغلب ممکن نیست.", en: "Yes, interior insulation with thin panels (3–5 cm) can cut wall loss by 60–75%. Exterior insulation is better but often impossible in apartments." }
      },
      {
        q: { fa: "پنجره‌های دوجداره چقدر صرفه‌جویی ایجاد می‌کنند؟", en: "How much do double-glazed windows save?" },
        a: { fa: "تعویض پنجره‌های تک‌جداره با دوجداله UPVC با گاز آرگون، هدررفت از طریق پنجره را تا ۷۰ درصد کاهش می‌دهد. برای مناطق سردسیر، سه‌جداره توصیه می‌شود.", en: "Replacing single-glazed with double-glazed UPVC argon windows cuts window loss by up to 70%. For cold regions, triple-glazing is recommended." }
      }
    ]
  },
  {
    slug: "sarmāyeh-gozari-khorshidi-tala-arz",
    title: {
      fa: "سرمایه‌گذاری در نیروگاه خورشیدی به جای طلا و ارز: مقایسه بازگشت سرمایه در شرایط تورم ایران",
      en: "Investing in Solar Plants vs. Gold and Currency: ROI Comparison in Iran's Inflation"
    },
    category: "news",
    categoryLabel: { fa: "اخبار و قوانین", en: "News" },
    excerpt: {
      fa: "در شرایط تورم ۴۰ درصدی، سرمایه‌گذاری در نیروگاه خورشیدی با خرید تضمینی برق ساتبا، بازگشت سرمایه ۱۸ تا ۲۲ درصد در سال دارد； بالاتر از طلا، دلار، مسکن و بورس. این مقاله همه گزینه‌ها را مقایسه می‌کند.",
      en: "At 40% inflation, solar plant investment with SATBA guaranteed purchase delivers 18–22% annual returns — higher than gold, USD, real estate, and the stock market. This article compares all options."
    },
    readTime: { fa: "۸ دقیقه", en: "8 min" },
    date: "1405-04-22",
    body: {
      fa: [
        {
          h2: "چرا سرمایه‌گذاری در خورشیدی یک گزینه جدی شده است؟",
          p: "در شرایط تورم ۴۰ درصدی ایران، پیدا کردن سرمایه‌گذاری با بازگشت سرمایه واقعی مثبت، یعنی بالاتر از تورم، بسیار دشوار است. طلا، دلار و مسکن به طور تاریخی حافظ ارزش سرمایه بوده‌اند، اما درآمد جریانی تولید نمی‌کنند؛ یعنی شما فقط امیدوار هستید که قیمت آن‌ها با تورم رشد کند. اما نیروگاه خورشیدی متصل به شبکه با قرارداد خرید تضمینی ۲۰ ساله ساتبا، یک دارایی است که هم ارزش آن با تورم رشد می‌کند، هم درآمد ماهانه پایدار و قابل پیش‌بینی تولید می‌کند، هم از تورم جلوتر است زیرا تعرفه برق هر سال با تصمیم هیئت وزیران به‌روزرسانی می‌شود. این ترکیب، خورشیدی را به یک کلاس دارایی منحصر به فرد تبدیل کرده است."
        },
        {
          h2: "مقایسه چهار دارایی اصلی در شرایط تورم",
          p: "برای مقایسه، فرض کنید ۷۰۰ میلیون تومان سرمایه دارید (معادل یک نیروگاه خورشیدی ۱۰ کیلوواتی). در پنج سال گذشته (۱۴۰۰ تا ۱۴۰۴)، میانگین بازگشت سرمایه سالانه این دارایی‌ها به این شکل بوده است. طلا: رشد的名义ی حدود ۳۵ تا ۴۰ درصد، اما بدون درآمد جریانی. دلار: رشد اسمی ۳۰ تا ۳۵ درصد، بدون درآمد. مسکن: رشد اسمی ۳۰ تا ۴۵ درصد در مناطق برتر، اما هزینه نگهداری، مالیات و نقدشوندگی پایین. بورس: میانگین بازگشت ۲۰ تا ۲۵ درصد، اما با نوسان شدید و ریسک بالا. نیروگاه خورشیدی با قرارداد ساتبا: درآمد سالانه ۱۸ تا ۲۲ درصد + حفظ ارزش دارایی با تورم + رشد تعرفه برق. تفاوت اصلی این است که خورشیدی درآمد ماهانه پایدار دارد، در حالی که بقیه فقط روی کاغذ سود دارند."
        },
        {
          h2: "اقتصاد نیروگاه خورشیدی ۱۰ کیلوواتی",
          p: "بیایید محاسبه دقیق انجام دهیم. یک نیروگاه ۱۰ کیلوواتی متصل به شبکه، در منطقه با ۵ ساعت تابش اوج (PSH) مثل مشهد، سالانه حدود ۱۶۰۰۰ تا ۱۸۰۰۰ کیلووات‌ساعت برق تولید می‌کند. با تعرفه خرید تضمینی ساتبا (بسته به منطقه و نوع قرارداد)، درآمد سالانه ۱۵۰ تا ۲۰۰ میلیون تومان است. هزینه کامل نصب با تجهیزات Tier-1 حدود ۶۰۰ تا ۸۰۰ میلیون تومان است (شامل پنل، اینورتر، سازه، کابل، نصب و راه‌اندازی). با این اعداد، بازگشت سرمایه ساده ۴ تا ۵ سال است. اما نکته مهم این است که قرارداد ساتبا برای ۲۰ سال تضمین شده؛ یعنی پس از بازگشت سرمایه، ۱۵ سال دیگر درآمد خالص دارید. مجموع درآمد ۲۰ ساله با فرض تعرفه ثابت حدود ۳ تا ۴ میلیارد تومان است؛ یعنی ۵ تا ۶ برابر سرمایه اولیه."
        },
        {
          h2: "مزیت اول: درآمد ماهانه پایدار",
          p: "تفاوت اصلی خورشیدی با طلا و دلار، درآمد ماهانه پایدار است. طلا را که می‌خرید، تا زمان فروش هیچ پولی به شما نمی‌دهد. اما نیروگاه خورشیدی هر ماه به حساب شما پول واریز می‌کند. این یعنی می‌توانید از این درآمد برای هزینه‌های جاری زندگی استفاده کنید، یا آن را دوباره سرمایه‌گذاری کنید. برای یک خانواده متوسط، درآمد ماهانه ۱۲ تا ۱۷ میلیون تومان از یک نیروگاه ۱۰ کیلوواتی، یعنی یک درآمد دوم قابل توجه. این درآمد، در شرایط تورم که حقوق کارمندان قدرت خریدشان کاهش می‌یابد، یک شبکه امنیت مالی ایجاد می‌کند."
        },
        {
          h2: "مزیت دوم: رشد تعرفه با تورم",
          p: "تعرفه خرید تضمینی برق خورشیدی هر سال توسط هیئت وزیران بازنگری می‌شود و معمولاً با نرخ تورم یا بالاتر از آن افزایش می‌یابد. این یعنی درآمد شما هر سال به طور خودکار با تورم رشد می‌کند، بدون اینکه کاری انجام دهید. این یک مزیت کلیدی نسبت به سرمایه‌گذاری در اوراق با نرخ ثابت (مثلDeposit سخت یا اوراق) است. در واقع، قرارداد ساتبا یک ابزار مالی هوشمند است که در آن دولت ریسک تورم را از دوش سرمایه‌گذار برمی‌دارد."
        },
        {
          h2: "مزیت سوم: پایداری دارایی",
          p: "نیروگاه خورشیدی یک دارایی فیزیکی با عمر ۲۵ سال یا بیشتر است. بر خلاف سهام بورس که ممکن است یک روز صفر شود، یا سپرده بانکی که با تورم ارزشش را از دست می‌دهد، پنل خورشیدی به طور فیزیکی برق تولید می‌کند که همیشه ارزش دارد. حتی اگر قرارداد ساتبا تمام شود، می‌توانید برق را در بورس انرژی بفروشید، یا برای مصرف خود استفاده کنید و قبض خود را صفر کنید. این چندگانگی خروجی، ریسک سرمایه‌گذاری را به شدت کاهش می‌دهد."
        },
        {
          h2: "ریسک‌ها و چالش‌ها",
          p: "هر سرمایه‌گذاری ریسک دارد و خورشیدی هم مستثنا نیست. اول، ریسک تایید تعرفه توسط ساتبا؛ باید قبل از نصب، تاییدیه اولیه دریافت شود. دوم، ریسک تغییر قانونی در طول قرارداد؛ اگرچه قرارداد ۲۰ ساله تضمین شده، اما همیشه ریسک سیاسی وجود دارد. سوم، ریسک فنی شامل خرابی اینورتر (معمولاً ۸ تا ۱۲ سال عمر) و کاهش راندمان پنل (تقریباً ۰/۵ درصد در سال). برای کاهش این ریسک‌ها، انتخاب پیمانکار معتبر با گارانتی، بیمه نیروگاه، و انتخاب تجهیزات Tier-1 ضروری است. چهارم، نیاز به فضای کافی (حدود ۶۰ تا ۸۰ متر مربع برای ۱۰ کیلووات) که برای آپارتمان‌ها ممکن است چالش باشد؛ در این حالت، اجاره بام یا زمین گزینه‌ای است."
        },
        {
          h2: "گام‌های عملی شروع سرمایه‌گذاری",
          p: "اگر به این سرمایه‌گذاری فکر می‌کنید، مسیر به این شکل است. اول، ارزیابی اولیه: بررسی تابش منطقه، متراژ بام یا زمین در دسترس، و محاسبه ظرفیت ممکن. دوم، مشاوره با پیمانکار معتبر برای دریافت پیش‌فاکتور و طرح اولیه. سوم، دریافت مجوز احداث از ساتبا (پارسا انرژی این مرحله را انجام می‌دهد). چهارم، نصب و راه‌اندازی نیروگاه (یک تا دو هفته). پنجم، اتصال به شبکه و عقد قرارداد ۲۰ ساله خرید تضمینی. ششم، دریافت درآمد ماهانه. کل فرایند از تصمیم تا دریافت اولین درآمد معمولاً دو تا سه ماه طول می‌کشد. پارسا انرژی تمام این مراحل را همراه شما انجام می‌دهد و مشاوره اولیه ۳۰ دقیقه‌ای رایگان است."
        }
      ],
      en: [
        {
          h2: "Why Solar Investment Has Become a Serious Option",
          p: "At 40% inflation in Iran, finding investments with real positive returns — above inflation — is extremely difficult. Gold, USD, and real estate historically preserve value but generate no cash flow; you just hope their prices track inflation. But a grid-tied solar plant with SATBA's 20-year guaranteed purchase contract is an asset that both appreciates with inflation and produces predictable monthly income — and stays ahead of inflation because electricity tariffs are updated annually by cabinet decree. This combination makes solar a unique asset class."
        },
        {
          h2: "Comparing Four Main Assets Under Inflation",
          p: "Assume 700 million toman capital (equivalent to a 10 kW solar plant). Over the past five years (1400–1404), average annual returns have been: Gold — 35–40% nominal growth, no cash flow. USD — 30–35% nominal growth, no income. Real estate — 30–45% nominal growth in prime areas, but holding costs, taxes, low liquidity. Stock market — 20–25% average return, with high volatility and risk. Solar with SATBA contract — 18–22% annual income + asset value preserved with inflation + tariff growth. The key difference: solar generates stable monthly income while the others are paper gains."
        },
        {
          h2: "Economics of a 10 kW Solar Plant",
          p: "Let's calculate precisely. A 10 kW grid-tied plant in a region with 5 peak sun hours (PSH) like Mashhad produces about 16,000–18,000 kWh annually. At SATBA's guaranteed tariff (varying by region and contract type), annual income is 150–200 million toman. Full installation with Tier-1 equipment costs 600–800 million toman (panels, inverter, structure, cabling, installation, commissioning). Simple payback: 4–5 years. But the SATBA contract guarantees 20 years — meaning 15 more years of net income after payback. Total 20-year income at constant tariff: about 3–4 billion toman — 5–6× the initial investment."
        },
        {
          h2: "Advantage 1: Stable Monthly Income",
          p: "The main difference between solar and gold/USD is stable monthly income. Gold produces nothing until sold. But a solar plant deposits money monthly into your account. You can spend this income on living expenses or reinvest it. For a middle-class family, 12–17 million toman monthly income from a 10 kW plant is significant additional revenue. At times when inflation erodes salaries, this creates financial security."
        },
        {
          h2: "Advantage 2: Tariffs Track Inflation",
          p: "SATBA's guaranteed solar tariff is reviewed annually by the cabinet and typically rises with or above inflation. This means your income automatically grows with inflation each year — no action needed. This is a key advantage over fixed-rate instruments (like bank deposits or bonds). The SATBA contract is essentially a smart financial instrument where the government absorbs inflation risk."
        },
        {
          h2: "Advantage 3: Asset Durability",
          p: "A solar plant is a physical asset with a 25+ year lifespan. Unlike stocks that can go to zero, or bank deposits that lose value with inflation, a solar panel physically produces electricity that always has value. Even if the SATBA contract ends, you can sell power on the energy exchange or use it yourself to zero out your bill. This optionality dramatically reduces investment risk."
        },
        {
          h2: "Risks and Challenges",
          p: "Every investment has risks and solar is no exception. First, tariff approval risk — initial SATBA approval must be obtained before installation. Second, regulatory change risk during the contract — though 20 years are guaranteed, political risk always exists. Third, technical risks including inverter failure (typically 8–12 year lifespan) and panel degradation (~0.5% per year). To mitigate: choose a reputable contractor with warranty, insure the plant, and use Tier-1 equipment. Fourth, space requirement (60–80 m² for 10 kW) can be challenging for apartments — roof or land rental is an option."
        },
        {
          h2: "Practical Steps to Start Investing",
          p: "If you're considering this investment, here's the path. First, initial assessment — evaluate regional solar irradiance, available roof/land area, and possible capacity. Second, consult a reputable contractor for proforma invoice and initial design. Third, obtain construction permit from SATBA (Parsa Energy handles this). Fourth, install and commission the plant (1–2 weeks). Fifth, connect to grid and sign the 20-year guaranteed purchase contract. Sixth, receive monthly income. The full process from decision to first income typically takes 2–3 months. Parsa Energy handles all these steps and the initial 30-minute consultation is free."
        }
      ]
    },
    faqs: [
      {
        q: { fa: "بازگشت سرمایه نیروگاه خورشیدی چقدر است؟", en: "What is the ROI of a solar plant?" },
        a: { fa: "با تعرفه خرید تضمینی ساتبا، بازگشت سرمایه ساده ۴ تا ۵ سال است. IRR در طول عمر ۲۰ ساله نیروگاه حدود ۱۸ تا ۲۲ درصد در سال است؛ بالاتر از طلا، دلار و بورس.", en: "With SATBA's guaranteed tariff, simple payback is 4–5 years. IRR over the 20-year life is about 18–22% annually — higher than gold, USD, and the stock market." }
      },
      {
        q: { fa: "برای ۱۰ کیلووات چقدر فضا لازم است؟", en: "How much space is needed for 10 kW?" },
        a: { fa: "حدود ۶۰ تا ۸۰ متر مربع بام یا زمین بدون سایه. اگر بام خود را ندارید، می‌توانید زمین اجاره کنید و در قرارداد ساتبا، مالکیت نیروگاه با شما و درآمد به حساب شما خواهد بود.", en: "About 60–80 m² of unshaded roof or land. If you don't have a roof, you can rent land — the plant ownership and income remain yours under the SATBA contract." }
      },
      {
        q: { fa: "اگر قرارداد ساتبا بعد از ۲۰ سال تمام شود چه می‌شود؟", en: "What happens after the 20-year SATBA contract ends?" },
        a: { fa: "سه گزینه دارید: ۱. تمدید قرارداد با تعرفه جدید ساتبا. ۲. فروش برق در بورس انرژی با قیمت بازار. ۳. مصرف خود و صفر کردن قبض. پنل‌ها هنوز ۵ تا ۱۰ سال عمر مفید دارند.", en: "Three options: 1) Renew the contract at new SATBA tariffs. 2) Sell power on the energy exchange at market price. 3) Self-consume and zero out your bill. Panels still have 5–10 years of useful life." }
      }
    ]
  }
];

