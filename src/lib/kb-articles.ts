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
    date: "1405-04-24",
    body: {
      fa: [
        { h2: "عوامل انتخاب سیستم", p: "برای انتخاب سیستم گرمایشی و سرمایشی، اقلیم منطقه، متراژ فضا، تعداد اتاق‌ها، بودجه و هزینه مصرف انرژی را در نظر بگیرید. سیستم‌های ترکیبی مثل پکیج + رادیاتور + کولر گازی برای منازل معمولی بهترین تعادل بین هزینه و کارایی را دارند." },
        { h2: "گرمایش: پکیج یا زنت؟", p: "پکیج دیواری با رادیاتور برای منازل با سیستم لوله‌کشی شوفاژ مناسب است. زنت (پنکه گرمکن) برای فضاهای باز یا اتاق‌هایی که لوله‌کشی شوفاژ ندارند سریع‌گرما و اقتصادی است ولی رطوبت هوا را کاهش می‌دهد." },
        { h2: "سرمایش: کولر گازی یا داکت اسپیلت؟", p: "کولر گازی (اسپلیت) برای تک‌اتاق نصب آسان و قیمت پایین دارد. داکت اسپیلت برای کل ساختمان یا فضاهای بزرگ با یک یونیت بیرونی و چند کانال داخلی مناسب است و زیبایی معماری را حفظ می‌کند." },
        { h2: "هزینه مصرف انرژی", p: "کولرهای گازی اینورتردار تا ۳۰٪ برق کمتری مصرف می‌کنند نسبت به مدل‌های معمولی. پکیج‌های دیواری با راندمان بالا (A++) گاز کمتری مصرف می‌کنند. برای کاهش هزینه برق در تابستان، ترکیب کولر گازی + عایق‌بندی مناسب توصیه می‌شود." },
      ],
      en: [
        { h2: "Selection factors", p: "Consider climate, space size, room count, budget and energy cost. Combined systems like package + radiator + AC offer the best balance for typical homes." },
        { h2: "Heating: package or Zent?", p: "Wall package with radiator suits homes with piped heating. Zent (fan heater) is fast and economical for open spaces or rooms without piped heating but reduces humidity." },
        { h2: "Cooling: split AC or ducted split?", p: "Split AC is easy to install and cheaper for single rooms. Ducted split suits whole-building or large spaces with one outdoor unit and multiple ducts, preserving architecture." },
        { h2: "Energy cost", p: "Inverter ACs consume up to 30% less electricity. High-efficiency (A++) packages use less gas. Combining AC + proper insulation reduces summer electricity costs." },
      ],
    },
    faqs: [
      { q: { fa: "برای آپارتمان ۱۰۰ متری چه سیستمی پیشنهاد می‌دهید؟", en: "What do you recommend for a 100sqm apartment?" }, a: { fa: "پکیج دیواری + رادیاتور برای گرمایش و یک کولر گازی ۲۴۰۰۰ BTU برای پذیرایی + یک کولر ۱۲۰۰۰ برای اتاق خواب.", en: "Wall package + radiator for heating, one 24,000 BTU AC for living room + one 12,000 for bedroom." } },
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
        { h2: "انتخاب ظرفیت (BTU)", p: "به‌طور تقریبی برای هر متر مربع در شرایط استاندارد (سقف ۳ متر، عایق‌بندی متوسط و اقلیم معتدل)، حدود ۴۰۰ تا ۶۰۰ BTU نیاز است. (توجه: محاسبه دقیق نیازمند بررسی جهت جغرافیایی، تعداد پنجره‌ها و بار حرارتی است). اتاق ۱۵ متری = ۹۰۰۰ BTU، اتاق ۲۰ متری = ۱۲۰۰۰ BTU، پذیرایی ۳۰ متری = ۱۸۰۰۰ BTU. فضاهای بزرگ‌تر به ۲۴۰۰۰ BTU یا بیشتر نیاز دارند." },
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
    date: "1405-04-20",
    body: {
      fa: [
        { h2: "چرا سال ۱۴۰۵ زمان مناسبی است؟", p: "در ۱۴۰۵، سه عامل توجیه‌کننده وجود دارد: ۱. تعرفه‌های خرید تضمینی برق خورشیدی توسط ساتبا (سازمان انرژی‌های تجدیدپذیر). ۲. کاهش قیمت جهانی پنل خورشیدی (افت ۴۰٪ در ۲ سال اخیر). ۳. تابش بالای ایران (میانگین ۵ ساعت اوج در روز)." },
        { h2: "هزینه‌ها", p: "برای یک نیروگاه ۱۰ کیلوواتی متصل به شبکه: پنل + اینورتر + نصب = حدود ۶۰۰ تا ۸۰۰ میلیون تومان (قیمت‌ها متغیر). شامل: ۱۰ کیلووات پنل، اینورتر ۱۰ کیلووات، ساختار نصب، کابل و حفاظت، نصب و راه‌اندازی." },
        { h2: "درآمد", p: "با تعرفه خرید تضمینی ساتبا (برای نیروگاه‌های کوچک)، فروش برق تولیدی درآمد ماهانه پایدار ایجاد می‌کند. تولید سالانه ۱۰ کیلووات = حدود ۱۸۰۰۰ کیلووات‌ساعت. درآمد سالانه بسته به تعرفه منطقه و نوع قرارداد محاسبه می‌شود. برای استعلام تعرفه روز، با ساتبا تماس بگیرید." },
        { h2: "بازگشت سرمایه (ROI)", p: "با فرض هزینه ۷۰۰ میلیون تومان و درآمد سالانه ۱۵۰ تا ۲۰۰ میلیون تومان، بازگشت سرمایه ساده ۴ تا ۵ سال است. با در نظر گرفتن عمر ۲۵ ساله پنل، سود خالص ۲۰ سال = ۳ تا ۴ میلیارد تومان. IRR حدود ۱۸ تا ۲۲ درصد." },
        { h2: "ریسک‌ها و نکات", p: "۱. تأیید نهایی تعرفه با ساتبا. ۲. دریافت مجوز اتصال به شبکه. ۳. انتخاب پیمانکار معتبر با گارانتی. ۴. پایش عملکرد برای حفظ تولید. ۵. بیمه نیروگاه. برای اجرای این فرآیند، مشاوره با تیم‌های فنی مجرب و دریافت مجوزهای لازم از ساتبا توصیه می‌شود." },
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
    date: "1405-03-15",
    body: {
      fa: [
        { h2: "تعرفه تضمینی چیست؟", p: "تعرفه تضمینی قیمتی است که دولت (از طریق ساتبا) متعهد می‌شود برق تولیدی از نیروگاه‌های تجدیدپذیر را برای مدت معین (معمولاً ۲۰ سال) خریداری کند. این تضمین، امنیت سرمایه‌گذاری را فراهم می‌کند." },
        { h2: "انواع تعرفه", p: "۱. تعرفه کشوری (نیروگاه‌های بزرگ، بالای ۱ مگاوات). ۲. تعرفه خانگی/صنعتی کوچک (زیر ۱ مگاوات). ۳. تعرفه مزایده‌ای (برای نیروگاه‌های بزرگ جدید). هر کدام قیمت و شرایط متفاوتی دارند." },
        { h2: "نحوه استعلام", p: "برای اطلاع از تعرفه روز: ۱. مراجعه به سایت satba.gov.ir. ۲. تماس با دفتر ساتبا. ۳. مشاوره با پیمانکاران مجاز (مثل پارسا انرژی). تعرفه‌ها بر اساس منطقه، ظرفیت و نوع قرارداد متفاوت است." },
        { h2: "نکات مهم", p: "۱. تعرفه برای ۲۰ سال تضمین می‌شود. ۲. پرداخت معمولاً ماهانه است. ۳. برای بهره‌مندی از تعرفه، باید مجوز احداث از ساتبا دریافت کنید. ۴. نیروگاه باید به شبکه متصل باشد. ۵. پایش و گزارش تولید الزامی است." },
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
  },
// ============================================================================
// مقاله ۱: استخراج ارز دیجیتال با نیروگاه خورشیدی - دسته: solar
// ============================================================================
{
  slug: "mining-arz-dijital-khorshidi",
  title: {
    fa: "استخراج ارز دیجیتال با نیروگاه خورشیدی: راهکار قانونی و اقتصادی برای ماینرهای ایرانی",
    en: "Crypto Mining with Solar Power: Legal and Economic Solution for Iranian Miners"
  },
  category: "solar",
  categoryLabel: { fa: "خورشیدی", en: "Solar" },
  excerpt: {
    fa: "ترکیب ماینینگ با نیروگاه خورشیدی متصل به شبکه، مشکل مصرف برق و قطعی ماینرها را حل می‌کند و یک منبع درآمد دلاری قانونی با بازگشت سرمایه ۱۸ تا ۲۴ ماه ایجاد می‌کند.",
    en: "Combining crypto mining with a grid-tied solar plant solves miners' power and outage problems, creating a legal USD-denominated income stream with 18–24 month payback."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "چرا ماینینگ در ایران به بن‌بست رسیده است؟",
        p: "استخراج ارز دیجیتال در ایران به دلیل برق ارزان و تورم بالا، سال‌ها یک کسب‌وکار پرسود برای هزاران خانوار بود. اما در دو سال گذشته، سه چالش بزرگ این حوزه را به بن‌بست رسانده است. اول، قطعی مکرر برق در تابستان و زمستان که باعث خاموش شدن ماینرها و کاهش شدید درآمد می‌شود. دوم، جریمه‌های سنگین توانیر برای ماینرهای غیرمجاز که گاهی به صدها میلیون تومان می‌رسد. سوم،مجوزگیری سختگیرانه که اکثر ماینرهای خانگی و کوچک را از بازار خارج کرده. در این شرایط، تنها راهکار پایدار برای فعالان این حوزه، ترکیب ماینینگ با نیروگاه خورشیدی متصل به شبکه است که هم مشکل مصرف برق را حل می‌کند، هم مجوز قانونی می‌آورد و هم درآمد دلاری پایدار ایجاد می‌کند."
      },
      {
        h2: "اقتصاد ماینینگ با خورشیدی: محاسبه واقعی",
        p: "بیایید یک سناریو را محاسبه کنیم. یک دستگاه ماینر Antminer S19j Pro با مصرف ۳۰۰۰ وات، روزانه حدود ۰/۰۰۰۲ بیت‌کوین تولید می‌کند که با قیمت فعلی معادل ۴ تا ۶ میلیون تومان در روز است. در ماه، درآمد ناخالص ۱۲۰ تا ۱۸۰ میلیون تومان است. اگر این ماینر از شبکه برق تغذیه شود، با تعرفه پلکانی صنعتی، قبض برق ماهانه ۹۰ تا ۱۲۰ میلیون تومان می‌شود؛ یعنی سود خالص فقط ۳۰ تا ۶۰ میلیون تومان. اما با نیروگاه خورشیدی ۵ کیلوواتی متصل به شبکه، در روز ۲۵ تا ۳۰ کیلووات‌ساعت برق تولید می‌شود که تقریباً تمام مصرف ماینر را پوشش می‌دهد. هزینه نیروگاه ۳۰۰ تا ۴۰۰ میلیون تومان است. با سود خالص ۱۰۰ تا ۱۴۰ میلیون تومان در ماه، بازگشت سرمایه نیروگاه و ماینر حدود ۱۸ تا ۲۴ ماه است."
      },
      {
        h2: "چرا خورشیدی متصل به شبکه بهتر از آفگرید است؟",
        p: "برای ماینینگ دو گزینه خورشیدی داریم: آفگرید (مستقل) و متصل به شبکه. در حالت آفگرید، ماینر در شب به باتری وابسته است که هزینه‌اش ۲ تا ۳ برابر نیروگاه می‌شود و راندمان هم پایین است. اما در حالت متصل به شبکه، برق تولیدی در روز به شبکه فروخته می‌شود (با تعرفه ساتبا) و در شب برق شبکه برای ماینر مصرف می‌شود. این یعنی شبکه به عنوان یک باتری بزرگ و رایگان عمل می‌کند. در نتیجه، هزینه سرمایه اولیه به نصف کاهش می‌یابد و در عین حال تمام مصرف ماینر از نظر قانونی از محل تولید خورشیدی تأمین می‌شود."
      },
      {
        h2: "مسائل قانونی: مجوز و مالیات",
        p: "طبق قانون، استخراج ارز دیجیتال در ایران یک صنعت محسوب می‌شود و نیاز به مجوز از وزارت صنعت، معدن و تجارت دارد. اما اگر ماینر به یک نیروگاه خورشیدی متصل به شبکه با قرارداد ساتبا وصل باشد، شرایط بسیار ساده‌تر می‌شود. اول، برق مصرفی ماینر از محل تولید خورشیدی خود نیروگاه تأمین می‌شود و هیچ فشار اضافی به شبکه وارد نمی‌کند، که یکی از شروط اصلی مجوز است. دوم، درآمد حاصل از فروش برق مازاد به ساتبا، قانونی و شفاف است و مالیات مشخصی دارد. سوم، درآمد ارزی حاصل از فروش ارز دیجیتال در صرافی‌های داخلی، با رعایت قوانین پولی و بانکی مرکزی، قابل تسویه است. پارسا انرگی مشاوره حقوقی و فنی برای این مسیر ارائه می‌دهد."
      },
      {
        h2: "انتخاب دستگاه و توان مناسب",
        p: "برای ترکیب با خورشیدی، انتخاب دستگاه ماینر بسیار مهم است. دستگاه‌های جدید مثل Antminer S19 Pro، WhatsMiner M30S+ و AvalonMiner 1246 بهترین راندمان را دارند (مصرف حدود ۲۵ تا ۳۰ وات به ازای هر تراهش در ثانیه). برای شروع، یک نیروگاه خورشیدی ۵ تا ۱۰ کیلوواتی با ۲ تا ۴ دستگاه ماینر یک ترکیب منطقی است. اگر فضای بزرگتر دارید (بام کارخانه یا زمین)، می‌توانید با ۵۰ کیلووات خورشیدی و ۱۵ تا ۲۰ دستگاه ماینر به درآمد ماهانه ۵۰۰ تا ۸۰۰ میلیون تومان برسید. مهم است که ماینرها در فضای خنک و تهویه‌شده نصب شوند، زیرا دمای بالا عمر دستگاه را به شدت کاهش می‌دهد."
      },
      {
        h2: "چالش حرارتی و راهکار خنک‌کاری",
        p: "هر ماینر حدود ۳ کیلووات گرما تولید می‌کند. در یک اتاق با ۵ ماینر، این یعنی ۱۵ کیلووات گرما که بدون تهویه مناسب، دما به ۵۰ درجه می‌رسد و دستگاه‌ها خراب می‌شوند. راهکار اول، نصب ماینرها در فضای باز با سایبان و فن قدرتمند است. راهکار دوم، استفاده از سیستم خنک‌کاری غوطه‌ور (Immersion Cooling) که ماینرها در روغن دی‌الکتریکی غوطه‌ور می‌شوند و راندمان را ۲۰ تا ۳۰ درصد بالا می‌برد. این روش در ایران هنوز گران است اما برای ماینرهای حرفه‌ای توجیه دارد. راهکار سوم، نصب در فضای زیرزمینی یا انبار با تهویه طبیعی است که برای مقیاس کوچک مناسب است."
      },
      {
        h2: "ریسک‌ها و راهکار کاهش",
        p: "سرمایه‌گذاری در ماینینگ با خورشیدی با چند ریسک مواجه است. اول، نوسان قیمت بیت‌کوین که می‌تواند درآمد را ۵۰ درصد کاهش یا افزایش دهد؛ راهکار، تنوع‌سازی در ارزها (ماین کردن چند ارز) و نگهداری طولانی‌مدت است. دوم، تغییر الگوریتم بیت‌کوین (halving) که هر چهار سال یک‌بار پاداش را نصف می‌کند؛ راهکار، ارتقای مداوم دستگاه‌هاست. سوم، تغییر قانونی در ایران؛ راهکار، رعایت کامل قوانین و داشتن مجوز است. چهارم، خرابی دستگاه؛ راهکار، خرید دستگاه‌های نو با گارانتی و نگهداری دوره‌ای است. پارسا انرژی برای کاهش این ریسک‌ها، مشاوره کامل فنی، حقوقی و مالی ارائه می‌دهد."
      },
      {
        h2: "گام‌های عملی شروع",
        p: "اگر به این سرمایه‌گذاری فکر می‌کنید، مسیر به این شکل است. اول، ارزیابی فضای موجود (بام، زمین، انبار) و محاسبه ظرفیت ممکن خورشیدی. دوم، مشاوره با پارسا انرژی برای طراحی نیروگاه متناسب با تعداد ماینر مورد نظر. سوم، دریافت مجوز احداث نیروگاه از ساتبا. چهارم، نصب نیروگاه و خرید ماینرها. پنجم، راه‌اندازی و تنظیم نرم‌افزار ماینینگ. ششم، پایش عملکرد و بهینه‌سازی. کل فرایند از تصمیم تا شروع درآمد معمولاً ۲ تا ۳ ماه طول می‌کشد. مشاوره اولیه ۳۰ دقیقه‌ای رایگان است."
      }
    ],
    en: [
      {
        h2: "Why Crypto Mining in Iran Has Hit a Dead End",
        p: "Crypto mining in Iran was for years a profitable business for thousands of households due to cheap electricity and high inflation. But in the past two years, three major challenges have brought the sector to a standstill. First, frequent summer and winter blackouts that shut down miners and slash income. Second, heavy Tavanir fines for unauthorized miners, sometimes reaching hundreds of millions of toman. Third, restrictive licensing that has pushed most home and small miners out of the market. In this environment, the only sustainable solution for active players is combining mining with a grid-tied solar plant — solving power consumption, providing legal authorization, and creating stable USD income."
      },
      {
        h2: "Economics of Solar Mining — Real Calculation",
        p: "Let's calculate a scenario. An Antminer S19j Pro consuming 3,000 W produces about 0.0002 BTC daily, currently worth 4–6 million toman. Monthly gross income: 120–180 million toman. If powered from the grid at industrial tiered tariffs, the monthly electricity bill is 90–120 million toman — net profit only 30–60 million. But with a 5 kW grid-tied solar plant producing 25–30 kWh daily, almost all miner consumption is covered. Solar plant cost: 300–400 million toman. With net profit of 100–140 million toman monthly, payback for both solar and miner is 18–24 months."
      },
      {
        h2: "Why Grid-Tied Beats Off-Grid for Mining",
        p: "For solar mining, two options exist: off-grid and grid-tied. Off-grid requires nighttime battery storage that doubles or triples plant cost with low efficiency. Grid-tied sells daytime solar to the grid (at SATBA tariff) and uses grid power for the miner at night. The grid acts as a free, large battery. Capital cost halves, and all miner consumption is legally sourced from the solar plant's generation."
      },
      {
        h2: "Legal Issues: Licensing and Taxation",
        p: "Under Iranian law, crypto mining is an industrial activity requiring a Ministry of Industry permit. But when a miner is connected to a grid-tied solar plant with a SATBA contract, conditions simplify dramatically. First, miner electricity is sourced from the solar plant's own generation, adding no grid strain — a key licensing requirement. Second, surplus electricity sales revenue is legal and transparent with defined tax treatment. Third, USD income from selling mined crypto can be settled via domestic exchanges following Central Bank rules. Parsa Energy provides legal and technical consultation for this path."
      },
      {
        h2: "Choosing the Right Device and Capacity",
        p: "For solar integration, miner selection is critical. New devices like Antminer S19 Pro, WhatsMiner M30S+, and AvalonMiner 1246 offer the best efficiency (~25–30 W per TH/s). For starters, a 5–10 kW solar plant with 2–4 miners is a sensible combination. With larger space (factory roof or land), 50 kW solar with 15–20 miners can deliver 500–800 million toman monthly. Miners must be installed in ventilated, cool spaces — high temperatures drastically reduce device lifespan."
      },
      {
        h2: "Thermal Challenges and Cooling Solutions",
        p: "Each miner produces about 3 kW of heat. Five miners in a room mean 15 kW of heat — without ventilation, temperature reaches 50°C and devices fail. First solution: outdoor installation with shade and powerful fans. Second: immersion cooling, where miners are submerged in dielectric fluid, boosting efficiency 20–30%. Still expensive in Iran but justified for professional setups. Third: basement or warehouse installation with natural ventilation for small scale."
      },
      {
        h2: "Risks and Mitigation",
        p: "Solar mining investments face several risks. First, Bitcoin price volatility can cut or boost income by 50%; mitigate by mining multiple coins and long-term holding. Second, Bitcoin halving every four years halves rewards; mitigate by continuous device upgrades. Third, regulatory changes in Iran; mitigate by full legal compliance and licensing. Fourth, device failure; mitigate with new warranted devices and periodic maintenance. Parsa Energy provides complete technical, legal, and financial consultation to reduce these risks."
      },
      {
        h2: "Practical Steps to Start",
        p: "If considering this investment, the path is: First, assess available space (roof, land, warehouse) and calculate possible solar capacity. Second, consult Parsa Energy for plant design matched to desired miner count. Third, obtain construction permit from SATBA. Fourth, install the plant and purchase miners. Fifth, commission and configure mining software. Sixth, monitor performance and optimize. The full process from decision to first income typically takes 2–3 months. Initial 30-minute consultation is free."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "آیا ماینینگ با خورشیدی در ایران قانونی است؟", en: "Is solar crypto mining legal in Iran?" },
      a: { fa: "بله، اگر نیروگاه خورشیدی مجوز ساتبا را داشته باشد و ماینر دارای مجوز صنعت باشد. در این حالت برق مصرفی ماینر از تولید خورشیدی تأمین می‌شود و هیچ فشاری به شبکه وارد نمی‌شود.", en: "Yes, if the solar plant has a SATBA permit and the miner has an industrial license. Miner electricity comes from solar generation, adding no grid strain." }
    },
    {
      q: { fa: "بازگشت سرمایه ماینینگ با خورشیدی چقدر است؟", en: "What is the payback for solar mining?" },
      a: { fa: "با یک نیروگاه ۵ کیلوواتی و ۲ دستگاه ماینر، بازگشت سرمایه کل (نیروگاه + ماینر) معمولاً ۱۸ تا ۲۴ ماه است. این عدد به قیمت بیت‌کوین و تعرفه برق بستگی دارد.", en: "With a 5 kW plant and 2 miners, total payback (solar + miners) is typically 18–24 months, depending on Bitcoin price and electricity tariff." }
    },
    {
      q: { fa: "در شب چه اتفاقی می‌افتد؟", en: "What happens at night?" },
      a: { fa: "در شب، ماینر از برق شبکه استفاده می‌کند. اما در روز، نیروگاه خورشیدی برق مازاد را به شبکه می‌فروشد. در نتیجه، مصرف شبکه در شب با فروش خورشیدی در روز خنثی می‌شود و قبض نهایی صفر می‌شود.", en: "At night, the miner uses grid power. But during the day, the solar plant sells surplus to the grid. Net grid consumption is zero, and the final bill is zero." }
    }
  ]
},

// ============================================================================
// مقاله ۲: سایبان خورشیدی پارکینگ (Solar Carport) - دسته: solar
// ============================================================================
{
  slug: "solar-carport-sayban-parkink",
  title: {
    fa: "سایبان خورشیدی پارکینگ (Solar Carport): هم سایه، هم برق، هم درآمد",
    en: "Solar Carport: Shade, Power, and Income in One Structure"
  },
  category: "solar",
  categoryLabel: { fa: "خورشیدی", en: "Solar" },
  excerpt: {
    fa: "سایبان خورشیدی پارکینگ با نصب پنل روی ساختار سایبان، هم خودروها را از آفتاب و باران محافظت می‌کند، هم برق تولید می‌کند، هم درآمد ایجاد می‌کند. یک سرمایه‌گذاری سه‌گانه برای مجتمع‌های تجاری و اداری.",
    en: "A solar carport installs panels on shade structures, protecting vehicles from sun and rain while generating power and income. A triple-benefit investment for commercial and office complexes."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "سایبان خورشیدی چیست و چه تفاوتی با پشت‌بام دارد؟",
        p: "سایبان خورشیدی (Solar Carport) یک ساختار فلزی است که روی پارکینگ نصب می‌شود و روی آن پنل خورشیدی قرار می‌گیرد. در واقع، به جای اینکه پنل‌ها را روی سقف ساختمان نصب کنید، آن‌ها را روی یک سایبان بالای خودروهای پارک‌شده می‌گذارید. این ایده ساده اما هوشمندانه، سه کاربرد همزمان دارد: اول، سایه برای خودروها ایجاد می‌کند که در اقلیم گرم ایران یک مزیت بزرگ است؛ دوم، برق تولید می‌کند که می‌تواند مصرف ساختمان را تأمین کند یا به شبکه فروخته شود؛ سوم، از زمین بهینه استفاده می‌کند بدون نیاز به فضای اضافی. در حالی که نصب پشت‌بام فقط برق تولید می‌کند و در ساختمان‌هایی که بام کوچک یا پر از تجهیزات است محدودیت دارد، سایبان خورشیدی ظرفیت تولید را چند برابر می‌کند."
      },
      {
        h2: "چرا Solar Carport در ایران ترند شده؟",
        p: "سه عامل اصلی باعث شده سایبان خورشیدی به یک ترند جدی در بازار ایران تبدیل شود. اول، قیمت زمین و فضا در شهرهای بزرگ به حدی رسیده که استفاده از پارکینگ به عنوان فضای تولید انرژی، یک ارزش افزوده بزرگ است. دوم، در مجتمع‌های تجاری و اداری که بام معمولاً برای تجهیزات تهویه، چیلر و آب‌گرم‌کن اشغال شده، نصب پنل روی بام ممکن نیست و پارکینگ تنها فضای باقی‌مانده است. سوم، آفتاب شدید ایران باعث داغ شدن داخل خودرو و کاهش عمر رنگ و باطری می‌شود؛ سایبان خورشیدی این مشکل را هم حل می‌کند. در تهران، مشهد و اصفهان چند پروژه نمونه اجرا شده و توجه مجتمع‌سازان را جلب کرده است."
      },
      {
        h2: "کاربردهای اصلی سایبان خورشیدی",
        p: "سایبان خورشیدی در چهار دسته اصلی کاربرد دارد. اول، مجتمع‌های تجاری و فروشگاه‌های بزرگ که پارکینگ وسیع دارند و می‌توانند با برق تولیدی، مصرف روشنایی، اسانسور و تهویه فروشگاه را تأمین کنند. دوم، بیمارستان‌ها و مراکز درمانی که هم به برق پایدار نیاز دارند و هم می‌خواهند تصویر سبز خود را تقویت کنند. سوم، ادارات و سازمان‌های دولتی که طبق قانون باید بخشی از انرژی خود را از تجدیدپذیر تأمین کنند. چهارم، آپارتمان‌های مسکونی بزرگ که پارکینگ مشترک دارند و می‌توانند با درآمد فروش برق، هزینه‌های نگهبانی و نگهداری را پوشش دهند. در همه این موارد، سایبان خورشیدی به جای استفاده از فضای مرده، یک دارایی درآمدزا ایجاد می‌کند."
      },
      {
        h2: "توجیه اقتصادی: محاسبه واقعی",
        p: "بیایید یک مثال واقعی محاسبه کنیم. یک مجتمع تجاری با پارکینگ ۱۰۰۰ متر مربع می‌تواند ۳۰۰ تا ۴۰۰ کیلووات پنل خورشیدی روی سایبان نصب کند. هزینه کامل اجرا (شامل ساختار، پنل، اینورتر، نصب) حدود ۸ تا ۱۲ میلیارد تومان است. این نیروگاه سالانه ۵۵۰ تا ۷۰۰ مگاوات‌ساعت برق تولید می‌کند که با تعرفه فروش به شبکه یا صرفه‌جویی در قبض، درآمد سالانه ۱/۵ تا ۲/۵ میلیارد تومان ایجاد می‌کند. یعنی بازگشت سرمایه ساده ۴ تا ۶ سال. اما مزایای غیرمستقیم هم قابل توجه است: کاهش دمای داخل خودرو ۱۰ تا ۱۵ درجه، افزایش عمر رنگ و باطری خودروها، حفاظت از باران و تگرگ، و افزایش ارزش برند مجتمع به عنوان یک فضای سبز. در مجموع، ROI واقعی با احتساب این مزایا به ۳ تا ۴ سال کاهش می‌یابد."
      },
      {
        h2: "طراحی و اجرا: نکات کلیدی",
        p: "طراحی سایبان خورشیدی متفاوت از نصب پشت‌بام است و نیاز به مهندسی تخصصی دارد. اول، ارتفاع سایبان باید به گونه‌ای باشد که خودروها به راحتی زیر آن قرار گیرند (معمولاً ۲/۵ تا ۳/۵ متر). دوم، شیب پنل باید برای زهکشی آب و بهینه‌سازی تابش طراحی شود (در ایران معمولاً ۲۰ تا ۳۰ درجه به سمت جنوب). سوم، ساختار فلزی باید برای بار باد، بارش برف و وزن پنل محاسبه شود. چهارم، در پارکینگ‌های زیرزمینی یا نیمه‌زیرزمینی، باید از طریق سیستم پیچ و مهره به سازه اصلی متصل شود. تیم پارسا انرژی با تجربه طراحی و اجرای سایبان‌های خورشیدی برای مجتمع‌های مختلف، تمام این نکات را در طراحی لحاظ می‌کند."
      },
      {
        h2: "مقایسه با نصب پشت‌بام",
        p: "مهمترین پرسش این است: سایبان خورشیدی بهتر است یا نصب پشت‌بام؟ پاسخ به شرایط بستگی دارد. اگر بام خالی و مناسب است، نصب پشت‌بام ارزان‌تر است (حدود ۲۰ تا ۳۰ درصد کمتر) و سریع‌تر اجرا می‌شود. اما اگر بام پر است یا کشش برای سایه وجود دارد، سایبان گزینه بهتری است. در بسیاری از پروژه‌های بزرگ، ترکیب هر دو بهترین راه‌حل است: پنل روی بام برای حداکثر تولید و سایبان روی پارکینگ برای مزایای ترکیبی. در نهایت، تصمیم باید بر اساس ارزیابی سایت، بودجه و اهداف پروژه گرفته شود."
      },
      {
        h2: "نمونه‌های موفق در ایران",
        p: "در سال‌های اخیر چندین پروژه سایبان خورشیدی در ایران اجرا شده است. در تهران، یک مجتمع تجاری بزرگ با ۸۰۰ کیلووات سایبان خورشیدی، تمام مصرف روزانه خود را از این طریق تأمین می‌کند. در مشهد، یک بیمارستان ۳۰۰ تختخوابی با ۲۰۰ کیلووات سایبان، بخش قابل توجهی از بار حساس خود را پوشش می‌دهد. در اصفهان، یک شرکت صنعتی با ۱/۵ مگاوات سایبان، قبض برق خود را به صفر رسانده و مازاد را به شبکه می‌فروشد. این پروژه‌ها نشان می‌دهند که سایبان خورشیدی نه تنها یک ایده تجاری است، بلکه یک راهکار قابل اجرا و سودآور در شرایط ایران است."
      },
      {
        h2: "گام‌های اجرایی شروع پروژه",
        p: "اگر به اجرای سایبان خورشیدی فکر می‌کنید، مسیر به این شکل است. اول، ارزیابی سایت و محاسبه مساحت پارکینگ قابل پوشش. دوم، مشاوره با پارسا انرژی برای طراحی اولیه و پیش‌فاکتور. سوم، اخذ مجوزهای لازم از ساتبا و شهرداری. چهارم، ساخت و نصب ساختار فلزی سایبان. پنجم، نصب پنل و اینورتر و اتصال به شبکه. ششم، راه‌اندازی و پایش عملکرد. مدت زمان اجرای یک پروژه متوسط (۲۰۰ تا ۵۰۰ کیلووات) معمولاً ۳ تا ۵ ماه است. مشاوره اولیه رایگان است و شامل ارزیابی سایت، برآورد هزینه و طراحی اولیه می‌شود."
      }
    ],
    en: [
      {
        h2: "What Is a Solar Carport and How Does It Differ from Rooftop?",
        p: "A solar carport is a metal structure installed over a parking area with solar panels on top. Instead of mounting panels on the building roof, you place them on a shade canopy above parked vehicles. This simple but smart idea serves three purposes simultaneously: shade for vehicles (a major benefit in Iran's hot climate), electricity generation for the building or grid sale, and optimal land use without requiring additional space. While rooftop installation only generates power and is limited in buildings with small or equipment-filled roofs, carports multiply generation capacity."
      },
      {
        h2: "Why Are Solar Carports Trending in Iran?",
        p: "Three main factors have made solar carports a serious trend in Iran. First, land and space prices in major cities have made parking-lot energy generation a significant value-add. Second, in commercial and office complexes where roofs are typically occupied by HVAC, chillers, and water heaters, parking is the only remaining space. Third, Iran's intense sun heats vehicle interiors and reduces paint and battery life — carports solve this too. Several pilot projects in Tehran, Mashhad, and Isfahan have drawn developer attention."
      },
      {
        h2: "Main Applications of Solar Carports",
        p: "Solar carports serve four main categories. First, commercial complexes and large retail stores with extensive parking can use generated power for lighting, elevators, and HVAC. Second, hospitals and medical centers needing reliable power and wanting to boost their green image. Third, government offices required by law to source part of their energy from renewables. Fourth, large residential complexes with shared parking where sales income can cover security and maintenance costs. In all cases, carports turn dead space into an income-generating asset."
      },
      {
        h2: "Economic Justification — Real Calculation",
        p: "Let's calculate a real example. A commercial complex with 1,000 m² of parking can install 300–400 kW of solar panels on a carport. Full installation cost (structure, panels, inverter, installation) is 8–12 billion toman. The plant produces 550–700 MWh annually, generating 1.5–2.5 billion toman yearly from grid sales or bill savings. Simple payback: 4–6 years. Indirect benefits include: 10–15°C cooler vehicle interiors, longer paint and battery life, rain and hail protection, and brand value as a green space. With all benefits, real ROI drops to 3–4 years."
      },
      {
        h2: "Design and Installation — Key Considerations",
        p: "Solar carport design differs from rooftop installation and requires specialized engineering. First, carport height must allow easy vehicle access (typically 2.5–3.5 m). Second, panel slope must balance drainage and irradiance (in Iran typically 20–30° facing south). Third, the metal structure must be engineered for wind, snow, and panel weight. Fourth, for underground or semi-underground parking, the structure must be bolted to the main building. Parsa Energy's experience in carport design and installation addresses all these points."
      },
      {
        h2: "Comparison with Rooftop Installation",
        p: "The key question: carport or rooftop? If the roof is empty and suitable, rooftop is cheaper (20–30% less) and faster. But if the roof is occupied or shade is desired, carports are better. For many large projects, combining both is optimal — rooftop for maximum generation, carport for combined benefits. The decision depends on site assessment, budget, and project goals."
      },
      {
        h2: "Successful Examples in Iran",
        p: "Several solar carport projects have been completed in Iran in recent years. In Tehran, a large commercial complex with 800 kW of carports covers its entire daytime consumption. In Mashhad, a 300-bed hospital with 200 kW of carports covers a significant share of critical loads. In Isfahan, an industrial company with 1.5 MW of carports has zeroed its electricity bill and sells surplus to the grid. These projects show that solar carports are not just a commercial concept — they are an executable, profitable solution in Iranian conditions."
      },
      {
        h2: "Practical Steps to Start",
        p: "If considering a solar carport, the path is: First, site assessment and calculation of coverable parking area. Second, consultation with Parsa Energy for preliminary design and proforma. Third, obtain permits from SATBA and municipality. Fourth, fabricate and install the metal carport structure. Fifth, install panels and inverter and connect to grid. Sixth, commission and monitor performance. A medium project (200–500 kW) typically takes 3–5 months. Initial consultation is free and includes site assessment, cost estimate, and preliminary design."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه نصب سایبان خورشیدی برای پارکینگ ۱۰۰ متر مربع چقدر است؟", en: "How much does solar carport installation cost for 100 m² of parking?" },
      a: { fa: "برای ۱۰۰ متر مربع می‌توان ۲۰ تا ۳۰ کیلووات پنل نصب کرد. هزینه کامل اجرا حدود ۱/۵ تا ۲/۵ میلیارد تومان است. بازگشت سرمایه با توجه به صرفه‌جویی و درآمد فروش برق، حدود ۴ تا ۶ سال.", en: "For 100 m², 20–30 kW of panels can be installed. Full installation costs 1.5–2.5 billion toman. Payback from savings and sales income is 4–6 years." }
    },
    {
      q: { fa: "سایبان خورشیدی بهتر است یا نصب پشت‌بام؟", en: "Is a solar carport better than rooftop installation?" },
      a: { fa: "اگر بام خالی و مناسب است، نصب پشت‌بام ارزان‌تر است (۲۰ تا ۳۰ درصد). اما اگر بام پر است یا به سایه نیاز دارید، سایبان گزینه بهتری است. در بسیاری موارد ترکیب هر دو بهترین راه‌حل است.", en: "If the roof is empty and suitable, rooftop is 20–30% cheaper. But if the roof is occupied or shade is needed, carports are better. Often combining both is optimal." }
    },
    {
      q: { fa: "آیا سایبان خورشیدی برای پارکینگ آپارتمان‌های مسکونی مناسب است؟", en: "Are solar carports suitable for residential apartment parking?" },
      a: { fa: "بله، اگر پارکینگ مشترک با مساحت کافی داشته باشید. درآمد حاصل از فروش برق می‌تواند هزینه‌های نگهبانی، روشنایی و نگهداری ساختمان را پوشش دهد.", en: "Yes, if you have shared parking with sufficient area. Income from electricity sales can cover security, lighting, and maintenance costs." }
    }
  ]
},

// ============================================================================
// مقاله ۳: اینورتر صنعتی VFD - دسته: hvac
// ============================================================================
{
  slug: "inverter-sanaati-vfd",
  title: {
    fa: "اینورتر صنعتی VFD: راه کاهش ۳۰ تا ۵۰ درصدی قبض برق کارخانه‌ها",
    en: "Industrial VFD: Cut Factory Electricity Bills by 30–50%"
  },
  category: "hvac",
  categoryLabel: { fa: "تاسیسات", en: "HVAC" },
  excerpt: {
    fa: "نصب اینورتر صنعتی (VFD) روی پمپ‌ها، فن‌ها و کمپرسورها می‌تواند ۳۰ تا ۵۰ درصد مصرف برق صنایع را کاهش دهد. با بازگشت سرمایه زیر یک سال، VFD بزرگترین فرصت صرفه‌جویی انرژی در صنایع ایران است.",
    en: "Installing industrial VFDs on pumps, fans, and compressors can cut factory electricity use by 30–50%. With sub-one-year payback, VFDs are the biggest energy-saving opportunity in Iranian industry."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "اینورتر صنعتی (VFD) چیست و چگونه کار می‌کند؟",
        p: "اینورتر صنعتی یا VFD (Variable Frequency Drive) یک دستگاه الکترونیکی است که فرکانس و ولتاژ ورودی به موتور الکتریکی را کنترل می‌کند و در نتیجه دور موتور را به طور دقیق تنظیم می‌کند. در حالت عادی، یک موتور الکتریکی همیشه با حداکثر سرعت کار می‌کند و برای کنترل جریان سیال یا هوا، از شیر یا دمپر استفاده می‌شود که انرژی زیادی هدر می‌رود. اما با VFD، موتور فقط به اندازه نیاز کار می‌کند. مثلاً اگر یک پمپ آب فقط نیاز دارد ۵۰ درصد ظرفیت خود را بدهد، VFD دور موتور را به نصف کاهش می‌دهد و مصرف برق را به حدود ۱۲/۵ درصد مصرف نامی می‌رساند (طبق قانون پمپ، مصرف با مکعب سرعت تغییر می‌کند). این یعنی صرفه‌جویی ۸۷/۵ درصدی در آن لحظه."
      },
      {
        h2: "چرا VFD در صنایع ایران یک ضرورت است؟",
        p: "بیش از ۶۰ درصد مصرف برق صنایع ایران به موتورهای الکتریکی مربوط می‌شود؛ پمپ‌های آب، فن‌های تهویه، کمپرسورهای هوای فشرده، نوار نقاله و دستگاه‌های فرآوری. در اکثر این موارد، بار متغیر است اما موتور همیشه با حداکثر ظرفیت کار می‌کند و کنترل با شیر، دمپر یا throttle انجام می‌شود. این روش، انرژی زیادی هدر می‌دهد. در شرایطی که تعرفه برق صنعتی پلکانی است و قبض ماهانه یک کارخانه متوسط به صدها میلیون تومان می‌رسد، نصب VFD بزرگترین فرصت صرفه‌جویی است. به طور متوسط، نصب VFD روی یک پمپ یا فن، ۳۰ تا ۵۰ درصد مصرف آن دستگاه را کاهش می‌دهد و بازگشت سرمایه زیر یک سال دارد."
      },
      {
        h2: "کاربردهای اصلی VFD در صنایع",
        p: "VFD در پنج دسته اصلی کاربرد دارد. اول، پمپ‌های آب صنعتی و شهری که با بار متغیر کار می‌کنند؛ مثلاً پمپ تأمین آب یک کارخانه که بسته به مصرف تغییر می‌کند. دوم، فن‌های تهویه و دودکش که بسته به دما و فشار هوا باید سرعتشان تنظیم شود. سوم، کمپرسورهای هوای فشرده که در صنایع نساجی، غذایی و فلزی بسیار پرکاربردند. چهارم، نوار نقاله و سیستم‌های انتقال که باید با سرعت متغیر کار کنند. پنجم، دستگاه‌های فرآوری مثل میکسر، آسیا و اکسترودر که نیاز به کنترل دقیق دور دارند. در همه این موارد، نصب VFD می‌تواند صرفه‌جویی قابل توجهی ایجاد کند."
      },
      {
        h2: "صرفه‌جویی واقعی: یک مثال محاسباتی",
        p: "بیایید یک مثال واقعی محاسبه کنیم. یک کارخانه نساجی در مشهد با ۳ کمپرسور هوای فشرده ۷۵ کیلوواتی کار می‌کند. این کمپرسورها بدون VFD، همیشه با حداکثر ظرفیت کار می‌کنند و با شیر خروجی کنترل می‌شوند. مصرف فعلی هر کمپرسور ۶۵ کیلووات است، یعنی مجموع ۱۹۵ کیلووات در ساعت. در ماه ۷۲ ساعت کاری، مصرف ۱۴۰ هزار کیلووات‌ساعت و قبض ۸۰۰ میلیون تومان است. با نصب VFD، مصرف هر کمپرسور به ۳۵ کیلووات کاهش می‌یابد (کاهش ۴۶ درصدی). یعنی قبض ماهانه به ۴۳۰ میلیون تومان می‌رسد. صرفه‌جویی ماهانه ۳۷۰ میلیون تومان. هزینه نصب VFD برای سه دستگاه با گارانتی ۳ سال، حدود ۳۰۰ میلیون تومان. یعنی بازگشت سرمایه کمتر از یک ماه!"
      },
      {
        h2: "انتخاب درایو مناسب",
        p: "انتخاب VFD مناسب به چند عامل بستگی دارد. اول، توان موتور (کیلووات یا اسب بخار) که باید با VFD مطابقت داشته باشد. دوم، نوع بار: بار با گشتاور ثابت (مثل نوار نقاله) نیاز به VFD با کنترل vector دارد، در حالی که بار با گشتاور متغیر (مثل پمپ و فن) با VFD ساده‌تر کار می‌کند. سوم، محیط نصب: در محیط‌های گردوغباری، گرم یا مرطوب، باید VFD با درجه حفاظت IP55 یا بالاتر انتخاب شود. چهارم، برند و گارانتی: برندهای معتبر مثل ABB، Siemens، Schneider، Delta و Inovance کیفیت بالا و خدمات پس از فروش خوبی در ایران دارند. تیم پارسا انرژی مشاوره انتخاب و تأمین VFD با قیمت رقابتی ارائه می‌دهد."
      },
      {
        h2: "نصب و راه‌اندازی VFD",
        p: "نصب VFD باید توسط تکنسین آموزش‌دیده انجام شود. مهم‌ترین نکات نصب شامل: محل نصب باید خنک، خشک و بدون گردوغبار باشد (یا از کابینت IP55 استفاده شود). کابل‌های ورودی و خروجی VFD باید از یکدیگر جدا باشند تا نویز الکترومغناطیسی ایجاد نکنند. ارت باید با مقاومت کم به زمین وصل شود. فیلتر EMI در ورودی نصب شود تا نویز به شبکه برق نرود. تنظیمات پارامترهای VFD (مثل حداقل و حداکثر فرکانس، شیب شتاب، گشتاور راه‌اندازی) باید بر اساس نوع بار تنظیم شود. نصب نادرست می‌تواند باعث خرابی موتور یا خود VFD شود. پارسا انرژی نصب حرفه‌ای با تنظیم دقیق پارامترها و تست کامل ارائه می‌دهد."
      },
      {
        h2: "نگهداری و طول عمر VFD",
        p: "اگر به درستی نگهداری شود، یک VFD صنعتی ۱۰ تا ۱۵ سال کار می‌کند. نگهداری شامل: تمیز کردن فیلترهای هوا هر ۳ تا ۶ ماه، بررسی و tighten کردن ترمینال‌ها هر سال، چک کردن خازن‌های DC هر ۳ سال (که با老化 کاهش ظرفیت می‌دهند)، پایش دمای کابینت و فن‌های خنک‌کننده. مهم‌ترین عامل خرابی VFD، دمای بالای محیط است؛ اگر محیط نصب بالای ۴۰ درجه باشد، عمر VFD به نصف کاهش می‌یابد. در مناطق گرم ایران مثل خوزستان و کرمان، استفاده از کابینت با تهویه فعال یا کولر ضروری است. تیم پارسا انرژی قراردادهای SLA نگهداری VFD با پاسخ زیر ۴ ساعت ارائه می‌دهد."
      },
      {
        h2: "ترکیب VFD با اتوماسیون و IoT",
        p: "VFD مدرن قابلیت اتصال به شبکه و کنترل از راه دور دارد. با اضافه کردن PLC و سیستم SCADA، می‌توان چندین VFD را همزمان کنترل کرد و عملکرد کل خط تولید را بهینه کرد. مثلاً در یک سیستم آب‌رسانی، چند پمپ با VFD می‌توانند با توجه به فشار شبکه به طور خودکار روشن و خاموش شوند و سرعت هر کدام تنظیم شود. با اضافه کردن IoT و پایش ابری، مدیر کارخانه می‌تواند از هر کجای دنیا مصرف برق، وضعیت VFD و هشدارهای خرابی را ببیند. این ترکیب، یک سیستم مدیریت انرژی کامل ایجاد می‌کند که می‌تواند ۵ تا ۱۰ درصد اضافه بر صرفه‌جویی VFD، صرفه‌جویی ایجاد کند."
      }
    ],
    en: [
      {
        h2: "What Is a VFD and How Does It Work?",
        p: "An industrial VFD (Variable Frequency Drive) is an electronic device that controls the input frequency and voltage to an electric motor, precisely regulating motor speed. Normally, an electric motor always runs at maximum speed and flow is controlled with valves or dampers — wasting much energy. With a VFD, the motor runs only as needed. For example, if a water pump needs only 50% capacity, the VFD halves motor speed, cutting power consumption to about 12.5% of rated (per the pump affinity law, power varies with the cube of speed). That's an 87.5% saving at that moment."
      },
      {
        h2: "Why Are VFDs Essential in Iranian Industry?",
        p: "Over 60% of Iranian industrial electricity use goes to electric motors — water pumps, ventilation fans, compressed air compressors, conveyors, and processing equipment. In most cases, the load varies but the motor runs at full capacity with valve, damper, or throttle control — wasting energy. With tiered industrial electricity tariffs and medium-factory bills reaching hundreds of millions of toman monthly, VFD installation is the biggest savings opportunity. On average, a VFD on a pump or fan cuts 30–50% of that device's consumption with sub-one-year payback."
      },
      {
        h2: "Main VFD Applications in Industry",
        p: "VFDs serve five main categories. First, industrial and municipal water pumps with variable loads. Second, ventilation and chimney fans needing speed control based on temperature and pressure. Third, compressed air compressors widely used in textile, food, and metal industries. Fourth, conveyors and transport systems requiring variable speed. Fifth, processing equipment like mixers, mills, and extruders needing precise speed control. In all cases, VFDs deliver significant savings."
      },
      {
        h2: "Real Savings — A Calculation Example",
        p: "Let's calculate a real example. A Mashhad textile factory runs three 75 kW compressed air compressors. Without VFDs, they run at full capacity and are controlled with output valves. Current consumption per compressor: 65 kW, totaling 195 kW. Monthly (720 hours): 140,000 kWh, bill 800 million toman. With VFDs, each compressor drops to 35 kW (46% reduction). Monthly bill: 430 million toman. Monthly savings: 370 million toman. VFD installation for three units with 3-year warranty: about 300 million toman. Payback: less than one month!"
      },
      {
        h2: "Choosing the Right Drive",
        p: "Selecting the right VFD depends on several factors. First, motor power (kW or HP) must match the VFD. Second, load type: constant-torque loads (conveyors) need vector-control VFDs, while variable-torque loads (pumps and fans) work with simpler VFDs. Third, installation environment: dusty, hot, or humid environments need IP55 or higher protection. Fourth, brand and warranty: ABB, Siemens, Schneider, Delta, and Inovance offer quality and good Iranian after-sales service. Parsa Energy provides VFD selection and supply consultation at competitive prices."
      },
      {
        h2: "VFD Installation and Commissioning",
        p: "VFD installation must be performed by trained technicians. Key points: install location must be cool, dry, and dust-free (or use IP55 cabinet). Input and output cables must be separated to avoid electromagnetic noise. Ground must be low-resistance. EMI filters at input prevent noise from reaching the grid. Parameter settings (min/max frequency, ramp, starting torque) must match the load type. Improper installation can damage the motor or VFD itself. Parsa Energy provides professional installation with precise parameter tuning and full testing."
      },
      {
        h2: "Maintenance and Lifespan",
        p: "Properly maintained, an industrial VFD lasts 10–15 years. Maintenance includes: cleaning air filters every 3–6 months, checking and tightening terminals annually, inspecting DC capacitors every 3 years (they degrade with age), monitoring cabinet temperature and cooling fans. The main VFD failure factor is high ambient temperature — above 40°C, lifespan halves. In hot Iranian regions like Khuzestan and Kerman, cabinets with active ventilation or cooling are essential. Parsa Energy offers VFD maintenance SLA contracts with sub-4-hour response."
      },
      {
        h2: "Combining VFD with Automation and IoT",
        p: "Modern VFDs support network connectivity and remote control. Adding PLC and SCADA systems enables simultaneous control of multiple VFDs and optimization of the entire production line. For example, in a water supply system, multiple VFD-equipped pumps can automatically start/stop based on network pressure with individual speed control. Adding IoT and cloud monitoring lets factory managers view consumption, VFD status, and failure alerts from anywhere. This combination creates a complete energy management system that can add 5–10% savings on top of VFD savings."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "بازگشت سرمایه نصب VFD چقدر است؟", en: "What is the payback period for VFD installation?" },
      a: { fa: "بسته به نوع بار و ساعات کار، معمولاً ۶ تا ۱۸ ماه. برای کمپرسورها و پمپ‌هایی که همیشه روشن‌اند، گاهی کمتر از ۳ ماه.", en: "Depending on load type and operating hours, typically 6–18 months. For always-on compressors and pumps, sometimes under 3 months." }
    },
    {
      q: { fa: "آیا VFD روی هر موتوری قابل نصب است؟", en: "Can a VFD be installed on any motor?" },
      a: { fa: "اکثر موتورهای سه‌فاز استاندارد قابل نصب VFD هستند. اما موتورهای قدیمی یا تک‌فاز نیاز به بررسی دارند. موتور باید با قدرت VFD مطابقت داشته باشد و عایق‌بندی مناسب برای فرکانس متغیر داشته باشد.", en: "Most standard three-phase motors accept VFDs. Old or single-phase motors need evaluation. The motor must match VFD capacity and have proper insulation for variable frequency." }
    },
    {
      q: { fa: "تفاوت VFD با soft starter چیست؟", en: "What's the difference between a VFD and a soft starter?" },
      a: { fa: "Soft starter فقط جریان راه‌اندازی را کاهش می‌دهد اما دور موتور را کنترل نمی‌کند. VFD هم جریان راه‌اندازی را کنترل می‌کند هم دور موتور را به طور پیوسته تنظیم می‌کند و صرفه‌جویی واقعی ایجاد می‌کند.", en: "A soft starter only reduces starting current but doesn't control motor speed. A VFD controls both starting current and continuously regulates motor speed, delivering real savings." }
    }
  ]
},

// ============================================================================
// مقاله ۴: سیستم VRF برای ساختمان‌های بزرگ - دسته: hvac
// ============================================================================
{
  slug: "vrf-system-sakhteman-bozorg",
  title: {
    fa: "سیستم VRF چیست؟ بهترین گرمایش و سرمایش برای برج‌ها، هتل‌ها و بیمارستان‌ها",
    en: "What Is VRF? The Best HVAC System for Towers, Hotels, and Hospitals"
  },
  category: "hvac",
  categoryLabel: { fa: "تاسیسات", en: "HVAC" },
  excerpt: {
    fa: "سیستم VRF با یک یونیت بیرونی، ده‌ها یونیت داخلی مستقل را کنترل می‌کند. برای ساختمان‌های بزرگ که کنترل مستقل هر فضا مهم است، VRF جایگزین مدرن داکت اسپلیت و چیلر-فن‌کویل است.",
    en: "A VRF system controls dozens of independent indoor units with one outdoor unit. For large buildings needing independent space control, VRF is the modern replacement for ducted splits and chiller-fan coil systems."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "سیستم VRF چیست و چگونه کار می‌کند؟",
        p: "VRF (Variable Refrigerant Flow) یک سیستم تهویه مدرن است که در آن یک یونیت بیرونی می‌تواند چندین یونیت داخلی (تا ۶۰ واحد) را با طول لوله تا ۱۰۰ متر تغذیه کند. مهم‌ترین ویژگی VRF این است که جریان مبرد به هر یونیت داخلی به طور مستقل کنترل می‌شود؛ یعنی در یک اتاق می‌توان سرمایش کامل، در اتاق دیگر گرمایش و در اتاق سوم خاموش داشت. این انعطاف‌پذیری، VRF را برای ساختمان‌های بزرگ با نیازهای متفاوت ایده‌آل می‌کند. در حالی که در چیلر-فن‌کویل یا داکت اسپلیت، کل سیستم یک حالت (سرمایش یا گرمایش) دارد و در اسپلیت معمولی، هر یونیت بیرونی فقط یک یونیت داخلی دارد. VRF ترکیبی از انعطاف اسپلیت و ظرفیت چیلر را ارائه می‌دهد."
      },
      {
        h2: "تفاوت VRF با داکت اسپلیت و چیلر-فن‌کویل",
        p: "داکت اسپلیت برای کل ساختمان یک سیستم مرکزی است که با کانال‌کشی، هوای مطبوع را به اتاق‌ها می‌رساند. مشکل این است که نمی‌توان دمای هر اتاق را مستقل تنظیم کرد و اگر یک اتاق خالی باشد، انرژی هدر می‌رود. چیلر-فن‌کویل هم مشکل مشابهی دارد و علاوه بر آن، نیاز به موتورخانه و فضای بزرگ دارد. اما VRF با لوله‌های مبرد نازک (به جای کانال بزرگ)، هر یونیت داخلی را مستقل کنترل می‌کند. این یعنی در یک هتل، مهمانی اتاق ۲۰۱ می‌تواند سرمایش ۱۸ درجه بخواهد و همزمان اتاق ۲۰۲ گرمایش ۲۴ درجه داشته باشد و اتاق ۲۰۳ کاملاً خاموش باشد. هیچ سیستمی دیگر این انعطاف را ارائه نمی‌دهد."
      },
      {
        h2: "مزایای VRF برای ساختمان‌های بزرگ",
        p: "VRF هفت مزیت اصلی برای ساختمان‌های بزرگ دارد. اول، کنترل مستقل هر فضا که هم آسایش را بالا می‌برد و هم انرژی را ذخیره می‌کند. دوم، راندمان بالا (COP تا ۵/۵) که مصرف برق را ۲۰ تا ۳۰ درصد نسبت به چیلر کاهش می‌دهد. سوم، نصب آسان‌تر با لوله‌های نازک مبرد به جای کانال‌های بزرگ. چهارم، عملکرد بی‌صدا (یونیت داخلی زیر ۳۰ دسی‌بل). پنجم، عدم نیاز به موتورخانه و فضای کم برای یونیت بیرونی. ششم، قابلیت بازیافت حرارت (Heat Recovery) که می‌تواند همزمان گرمایش و سرمایش تولید کند. هفتم، طول عمر بالا (۱۵ تا ۲۰ سال) با نگهداری مناسب. این مزایا VRF را برای برج‌های تجاری، هتل‌ها، بیمارستان‌ها و مجتمع‌های مسکونی لوکس به انتخاب اول تبدیل کرده است."
      },
      {
        h2: "انواع VRF: cooling-only، heat pump و heat recovery",
        p: "سه نوع اصلی VRF در بازار وجود دارد. نوع cooling-only فقط سرمایش تولید می‌کند و برای مناطق گرمسیری مناسب است. نوع heat pump (پمپ حرارتی) هم سرمایش و هم گرمایش تولید می‌کند، اما در یک زمان فقط یک حالت؛ یعنی کل سیستم یا سرمایش می‌دهد یا گرمایش. این نوع برای مناطقی که در فصل مشخص، کل ساختمان نیاز یکسان دارد مناسب است. نوع heat recovery پیشرفته‌ترین نوع است و می‌تواند همزمان در یک اتاق سرمایش و در اتاق دیگر گرمایش تولید کند؛ این کار با بازیافت گرمای اتاق‌های خنک و انتقال آن به اتاق‌های گرم انجام می‌شود. این نوع برای ساختمان‌هایی با نیازهای متنوع (مثل هتل با استخر، اتاق‌های آفتاب‌گیر و سایه) ایده‌آل است و می‌تواند ۳۰ درصد اضافه بر VRF معمولی، صرفه‌جویی ایجاد کند."
      },
      {
        h2: "طراحی و سایزینگ VRF",
        p: "طراحی VRF یک کار تخصصی است و باید توسط مهندس آموزش‌دیده انجام شود. مهم‌ترین نکات طراحی شامل: محاسبه بار سرمایش و گرمایش هر فضا به طور جداگانه، انتخاب ظرفیت یونیت بیرونی (معمولاً ۸ تا ۵۰ اسب بخار) و یونیت‌های داخلی متناسب با بار هر اتاق، بررسی طول لوله مبرد (حداکثر ۱۰۰ متر) و اختلاف ارتفاع (حداکثر ۵۰ متر)، انتخاب نوع سیستم (cooling-only، heat pump یا heat recovery)، و طراحی سیستم کنترل (شامل ترموستات هر اتاق، کنترل مرکزی و اتصال به BMS). برای ساختمان‌های بزرگ، معمولاً چند یونیت بیرونی لازم است که هر کدام یک zone مستقل را پوشش می‌دهند. تیم پارسا انرژی طراحی کامل VRF با نرم‌افزار تخصصی برندهای اصلی ارائه می‌دهد."
      },
      {
        h2: "هزینه و مقایسه اقتصادی",
        p: "هزینه نصب VRF برای یک ساختمان ۱۰۰۰ متری (مثل یک هتل کوچک یا برج اداری) حدود ۱/۵ تا ۲/۵ میلیارد تومان است؛ یعنی حدود ۱/۵ تا ۲ میلیون تومان به ازای هر متر مربع. در مقایسه، داکت اسپلیت ۸۰۰ هزار تا ۱/۲ میلیون تومان و چیلر-فن‌کویل ۶۰۰ هزار تا ۹۰۰ هزار تومان به ازای هر متر مربع هزینه دارد. اما در طول ۲۰ سال عمر، VRF به دلیل راندمان بالاتر و کنترل مستقل، ۲۵ تا ۳۵ درصد مصرف برق کمتری دارد. برای یک برج ۱۰۰۰ متری با قبض ماهانه ۱۰۰ میلیون تومان، صرفه‌جویی ۳۰ درصدی یعنی ۳۰ میلیون تومان در ماه و ۳۶۰ میلیون تومان در سال. یعنی بازگشت سرمایه اختلاف اولیه با چیلر در کمتر از ۳ سال."
      },
      {
        h2: "نگهداری و طول عمر VRF",
        p: "VRF اگر به درستی نگهداری شود، ۱۵ تا ۲۰ سال کار می‌کند. نگهداری شامل: تمیز کردن فیلتر یونیت‌های داخلی هر ۳ ماه، بررسی فشار مبرد هر سال، چک کردن اتصالات لوله مبرد هر ۲ سال، تمیز کردن کندانسور یونیت بیرونی هر ۶ ماه، و بررسی سیستم کنترل و سنسورها. مهم‌ترین عامل خرابی، نشت مبرد است؛ زیرا لوله‌های مبرد نازک و طولانی هستند و در صورت نشت، تشخیص مکان آن دشوار است. استفاده از تجهیزات تشخیص نشت الکترونیکی و انجام تست فشار سالانه ضروری است. تیم پارسا انرژی نگهداری تخصصی VRF برندهای Daikin، Mitsubishi، LG، Samsung و Hisense را در مشهد و حومه ارائه می‌دهد."
      },
      {
        h2: "گام بعدی: انتخاب و طراحی",
        p: "اگر برای یک ساختمان بزرگ به دنبال سیستم تهویه هستید، اولین گام مشاوره با کارشناس VRF است. در این مشاوره، نوع کاربری ساختمان، متراژ، تعداد اتاق‌ها، نیاز به کنترل مستقل و بودجه بررسی می‌شود. سپس طراحی اولیه با انتخاب نوع VRF، تعداد و ظرفیت یونیت‌ها و چیدمان لوله‌کشی انجام می‌شود. پس از تایید مشتری، نصب توسط تیم متخصص انجام می‌شود و در پایان، راه‌اندازی و تست کامل سیستم صورت می‌گیرد. مشاوره اولیه ۳۰ دقیقه‌ای رایگان است. تماس از طریق واتساپ یا فرم تماس سایت."
      }
    ],
    en: [
      {
        h2: "What Is VRF and How Does It Work?",
        p: "VRF (Variable Refrigerant Flow) is a modern HVAC system where one outdoor unit can feed multiple indoor units (up to 60) with pipe runs up to 100 meters. The key VRF feature is that refrigerant flow to each indoor unit is independently controlled — one room can have full cooling, another heating, a third off. This flexibility makes VRF ideal for large buildings with diverse needs. While chiller-fan coil and ducted splits operate the whole system in one mode (cooling or heating) and standard splits pair one outdoor with one indoor unit, VRF combines split flexibility with chiller capacity."
      },
      {
        h2: "VRF vs. Ducted Split and Chiller-Fan Coil",
        p: "Ducted splits are centralized systems distributing conditioned air via ducts. The problem: independent room temperature control is impossible, and empty rooms waste energy. Chiller-fan coil has similar issues and additionally needs a mechanical room and large space. VRF with thin refrigerant pipes (instead of large ducts) controls each indoor unit independently. In a hotel, room 201 can request 18°C cooling while room 202 has 24°C heating and room 203 is fully off. No other system offers this flexibility."
      },
      {
        h2: "VRF Advantages for Large Buildings",
        p: "VRF offers seven main advantages for large buildings. First, independent space control improves comfort and saves energy. Second, high efficiency (COP up to 5.5) cuts electricity 20–30% versus chillers. Third, easier installation with thin refrigerant pipes instead of large ducts. Fourth, quiet operation (indoor unit under 30 dB). Fifth, no mechanical room needed and small outdoor unit footprint. Sixth, heat recovery capability for simultaneous heating and cooling. Seventh, long lifespan (15–20 years) with proper maintenance. These advantages make VRF the top choice for commercial towers, hotels, hospitals, and luxury residential complexes."
      },
      {
        h2: "VRF Types: Cooling-Only, Heat Pump, and Heat Recovery",
        p: "Three main VRF types exist. Cooling-only produces only cooling, suitable for hot climates. Heat pump produces both cooling and heating, but only one mode at a time — for buildings with uniform seasonal needs. Heat recovery is the most advanced type, simultaneously producing cooling in one room and heating in another by recovering heat from cooled rooms and transferring it to heated rooms. Ideal for buildings with diverse needs (hotels with pools, sun-exposed and shaded rooms) and can save 30% more than standard VRF."
      },
      {
        h2: "VRF Design and Sizing",
        p: "VRF design is specialized work requiring trained engineers. Key design points include: calculating each space's cooling and heating load separately, selecting outdoor unit capacity (typically 8–50 HP) and indoor units matching each room's load, verifying refrigerant pipe length (max 100 m) and height difference (max 50 m), selecting system type (cooling-only, heat pump, or heat recovery), and designing control system (per-room thermostat, central control, BMS integration). Large buildings typically need multiple outdoor units, each covering an independent zone. Parsa Energy provides complete VRF design with major-brand specialized software."
      },
      {
        h2: "Cost and Economic Comparison",
        p: "VRF installation for a 1,000 m² building (small hotel or office tower) costs about 1.5–2.5 billion toman — 1.5–2 million toman per m². Ducted splits cost 800,000–1,200,000 toman/m² and chiller-fan coil 600,000–900,000 toman/m². But over 20 years, VRF's higher efficiency and independent control deliver 25–35% lower electricity use. For a 1,000 m² tower with 100 million toman monthly bill, 30% savings mean 30 million toman/month and 360 million toman/year — payback on the premium over chiller in under 3 years."
      },
      {
        h2: "VRF Maintenance and Lifespan",
        p: "Properly maintained, VRF lasts 15–20 years. Maintenance includes: cleaning indoor unit filters every 3 months, checking refrigerant pressure annually, inspecting refrigerant pipe connections every 2 years, cleaning outdoor condenser every 6 months, and checking control system and sensors. The main failure factor is refrigerant leak — long thin pipes make leak location difficult. Electronic leak detection equipment and annual pressure testing are essential. Parsa Energy provides specialized VRF maintenance for Daikin, Mitsubishi, LG, Samsung, and Hisense in Mashhad and surroundings."
      },
      {
        h2: "Next Step: Selection and Design",
        p: "If you're seeking an HVAC system for a large building, the first step is consulting a VRF specialist. The consultation covers building use, area, room count, independent control needs, and budget. Preliminary design follows with VRF type selection, unit count and capacity, and pipe layout. After client approval, installation is performed by specialists with full commissioning and testing. Initial 30-minute consultation is free. Contact via WhatsApp or website form."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه نصب VRF برای هر متر مربع چقدر است؟", en: "How much does VRF installation cost per square meter?" },
      a: { fa: "حدود ۱/۵ تا ۲ میلیون تومان به ازای هر متر مربع برای ساختمان‌های بزرگ. این شامل یونیت‌های داخلی و بیرونی، لوله‌کشی مبرد، کنترل و نصب است.", en: "About 1.5–2 million toman per m² for large buildings, including indoor and outdoor units, refrigerant piping, controls, and installation." }
    },
    {
      q: { fa: "VRF برای ساختمان‌های کوچک هم مناسب است؟", en: "Is VRF suitable for small buildings too?" },
      a: { fa: "VRF برای ساختمان‌های بالای ۳۰۰ متر مربع یا با ۸ اتاق به بالا اقتصادی است. برای ساختمان‌های کوچک‌تر، اسپلیت اینورتر یا داکت اسپلیت مقرون‌به‌صرفه‌تر است.", en: "VRF is economical for buildings over 300 m² or with 8+ rooms. For smaller buildings, inverter splits or ducted splits are more cost-effective." }
    },
    {
      q: { fa: "آیا VRF می‌تواند همزمان سرمایش و گرمایش تولید کند؟", en: "Can VRF produce cooling and heating simultaneously?" },
      a: { fa: "بله، اما فقط در نوع heat recovery. در این نوع، گرمای اتاق‌های خنک‌شده بازیافت و به اتاق‌های گرم منتقل می‌شود. این قابلیت ۳۰ درصد اضافه بر VRF معمولی صرفه‌جویی ایجاد می‌کند.", en: "Yes, but only in heat recovery type. Heat from cooled rooms is recovered and transferred to heated rooms. This capability adds 30% savings over standard VRF." }
    }
  ]
},

// ============================================================================
// مقاله ۵: آب شیرین‌کن خورشیدی - دسته: solar
// ============================================================================
{
  slug: "ab-shirin-kon-khorshidi",
  title: {
    fa: "آب شیرین‌کن خورشیدی: راهکار بحران آب شرب در مناطق ساحلی و کویری ایران",
    en: "Solar Water Desalination: Solution to Drinking Water Crisis in Iran's Coastal and Desert Regions"
  },
  category: "solar",
  categoryLabel: { fa: "خورشیدی", en: "Solar" },
  excerpt: {
    fa: "آب شیرین‌کن خورشیدی (RO + PV) با ترکیب اسمز معکوس و پنل خورشیدی، آب شور چاه یا دریا را به آب شرب تبدیل می‌کند. برای بندرعباس، چابهار و کویر، یک راهکار پایدار و اقتصادی است.",
    en: "Solar water desalination (RO + PV) combines reverse osmosis with solar panels to convert brackish well or seawater into drinking water. A sustainable, economic solution for Bandar Abbas, Chabahar, and desert regions."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "بحران آب شرب در ایران و ضرورت راهکارهای نوین",
        p: "ایران در فقر آب قرار دارد و در بسیاری از مناطق ساحلی و کویری، آب شرب کیفیت قابل قبولی ندارد. در هرمزگان، سیستان و بلوچستان، بوشهر و خوزستان، آب شرب یا شور است یا شوری بالایی دارد. در روستاهای کویر مرکزی، عمق چاه‌ها به ۲۰۰ متر رسیده و کیفیت آب به شدت پایین است. در این شرایط، دولت با دستگاه‌های آب شیرین‌کن صنعتی و انتقال لوله‌ای به شهرها تلاش می‌کند، اما راهکارهای متمرکز همیشه پرهزینه و ناکارآمد هستند. آب شیرین‌کن خورشیدی کوچک و محلی، یک راهکار توزیع‌شده است که در خود محل потреб، آب شرب سالم تولید می‌کند، بدون نیاز به شبکه برق یا لوله‌کشی طولانی. این رویکرد، آینده تأمین آب شرب در مناطق بحرانی ایران است."
      },
      {
        h2: "آب شیرین‌کن خورشیدی چگونه کار می‌کند؟",
        p: "آب شیرین‌کن خورشیدی ترکیب دو فناوری است: اسمز معکوس (RO) و پنل خورشیدی. در فرایند RO، آب شور با فشار بالا (معمولاً ۱۰ تا ۲۰ بار) از غشای نیمه‌تراوا عبور می‌کند. این غشاء، نمک و آلاینده‌ها را حذف می‌کند و فقط مولکول‌های آب عبور می‌کنند. نتیجه، آب شیرین با TDS زیر ۵۰۰ میلی‌گرم در لیتر است که برای شرب مناسب است. انرژی لازم برای پمپ فشار بالا، از پنل‌های خورشیدی تأمین می‌شود. در حالت ساده، پنل‌ها در روز به پمپ برق می‌دهند و آب تولیدشده در مخزن ذخیره می‌شود. در حالت پیشرفته، با باتری LiFePO4، سیستم ۲۴ ساعته کار می‌کند. بازده کلی سیستم بسته به شوری آب ورودی و دما، بین ۱۰ تا ۳۰ درصد است."
      },
      {
        h2: "ظرفیت‌ها و کاربردها",
        p: "آب شیرین‌کن خورشیدی در چهار مقیاس اصلی کاربرد دارد. اول، مقیاس خانگی (۱۰۰ تا ۵۰۰ لیتر در روز) برای یک خانوار روستایی که آب چاه شور دارد. این دستگاه‌ها کوچک، قابل حمل و با قیمت ۳۰ تا ۸۰ میلیون تومان عرضه می‌شوند. دوم، مقیاس روستایی (۲ تا ۱۰ مترمکعب در روز) برای تأمین آب شرب یک روستای کوچک یا مدرسه. هزینه این سیستم‌ها ۲۰۰ تا ۶۰۰ میلیون تومان است. سوم، مقیاس کشاورزی (۲۰ تا ۱۰۰ مترمکعب در روز) برای تأمین آب کشاورزی گلخانه‌ای در مناطق کویری. چهارم، مقیاس صنعتی (بالای ۱۰۰ مترمکعب در روز) برای صنایع غذایی، دارویی و پتروشیمی. پارسا انرژی در هر چهار مقیاس طراحی و اجرا ارائه می‌دهد."
      },
      {
        h2: "توجیه اقتصادی: مقایسه با alternatives",
        p: "بیایید آب شیرین‌کن خورشیدی را با گزینه‌های دیگر مقایسه کنیم. گزینه اول، انتقال آب با تانکر از شهر نزدیک: هزینه هر مترمکعب حدود ۵۰ تا ۱۵۰ هزار تومان، کیفیت نامطمئن، وابسته به جاده. گزینه دوم، آب شیرین‌کن برقی متصل به شبکه: هزینه هر مترمکعب ۳۰ تا ۶۰ هزار تومان، اما در مناطق دورافتاده شبکه برق نیست یا قطع می‌شود. گزینه سوم، آب شیرین‌کن خورشیدی: هزینه سرمایه اولیه بالا (مثلاً ۴۰۰ میلیون تومان برای ۵ مترمکعب در روز) اما هزینه بهره‌برداری بسیار پایین (۵ تا ۱۰ هزار تومان به ازای هر مترمکعب). با تولید روزانه ۵ مترمکعب در ۳۰۰ روز آفتابی، سالانه ۱۵۰۰ مترمکعب آب با ارزش ۷۵ میلیون تومان (با قیمت پایین) تولید می‌شود. بازگشت سرمایه حدود ۵ تا ۷ سال. در طول عمر ۲۰ ساله دستگاه، این یعنی صرفه‌جویی کلان."
      },
      {
        h2: "انتخاب غشاء و سیستم RO",
        p: "قلب آب شیرین‌کن، غشاء RO است. انتخاب غشاء به شوری آب ورودی بستگی دارد. برای آب شور با TDS زیر ۳۰۰۰ میلی‌گرم در لیتر (مثل آب چاه‌های سطحی)، غشاء Brackish Water (BWRO) مناسب است. برای آب دریا با TDS بالای ۱۰۰۰۰ میلی‌گرم در لیتر، غشاء Sea Water (SWRO) لازم است که فشار بالاتر و انرژی بیشتری نیاز دارد. در ایران، اکثر چاه‌های شور در دشت‌های مرکزی TDS بین ۲۰۰۰ تا ۵۰۰۰ دارند و از غشاء BWRO استفاده می‌شود. عمر غشاء معمولاً ۳ تا ۵ سال است و باید با پیش‌تصفیه مناسب (فیلتر شنی، فیلتر کارتریج، ضدعفونی UV) محافظت شود. تیم پارسا انرژی غشاء‌های برندهای Filmtec، Hydranautics و Toray را با گارانتی تأمین می‌کند."
      },
      {
        h2: "نمونه‌های موفق در ایران",
        p: "چندین پروژه آب شیرین‌کن خورشیدی در ایران اجرا شده است. در بندرعباس، یک روستای ماهیگیری با سیستم ۵ مترمکعب در روز، آب شرب ۸۰ خانوار را تأمین می‌کند. در چابهار، یک مدرسه دخترانه با دستگاه ۵۰۰ لیتری، آب شرب ۳۰۰ دانش‌آموز را تولید می‌کند. در کویر یزد، یک گاوداری با سیستم ۲۰ مترمکعبی، آب مصرف دام‌ها را از چاه شور تأمین می‌کند و قبض برق را به صفر رسانده است. در سیستان و بلوچستان، خیرین چند ده دستگاه خانگی نصب کرده‌اند. این پروژه‌ها نشان می‌دهند که آب شیرین‌کن خورشیدی نه تنها یک راهکار فنی است، بلکه یک راهکار قابل اجرا و اقتصادی در شرایط ایران است."
      },
      {
        h2: "نگهداری و طول عمر سیستم",
        p: "آب شیرین‌کن خورشیدی اگر به درستی نگهداری شود، ۱۵ تا ۲۰ سال کار می‌کند. نگهداری شامل: تعویض فیلتر پیش‌تصفیه هر ۳ تا ۶ ماه، شستشوی غشاء هر ۶ تا ۱۲ ماه با محلول اسید ضعیف، تعویض غشاء هر ۳ تا ۵ سال، تمیز کردن پنل‌های خورشیدی هر ۳ ماه، بررسی سیستم کنترل و پمپ هر سال. مهم‌ترین عامل خرابی، رسوب‌گیری غشاء است؛ در مناطق با آب سخت، استفاده از soften یا دوز مناسب antiscalant ضروری است. در مناطق گردوغباری مثل سیستان، پوشش محافظ پنل‌ها و شستشوی مکرر اهمیت دارد. تیم پارسا انرژی قراردادهای SLA نگهداری با پاسخ زیر ۲۴ ساعت در سراسر ایران ارائه می‌دهد."
      },
      {
        h2: "گام‌های اجرایی شروع پروژه",
        p: "اگر به نصب آب شیرین‌کن خورشیدی فکر می‌کنید، مسیر به این شکل است. اول، آزمایش کیفیت و شوری آب منبع (چاه، دریا، رودخانه). دوم، محاسبه نیاز روزانه آب شرب و انتخاب ظرفیت دستگاه. سوم، مشاوره با پارسا انرژی برای طراحی سیستم متناسب با شرایط سایت. چهارم، تأمین تجهیزات و نصب. پنجم، راه‌اندازی و تست کیفیت آب خروجی. ششم، آموزش بهره‌بردار و تحویل. مدت زمان اجرای یک پروژه متوسط ۲ تا ۴ هفته است. مشاوره اولیه و آزمایش آب رایگان است. تماس از طریق واتساپ یا فرم تماس سایت."
      }
    ],
    en: [
      {
        h2: "Iran's Drinking Water Crisis and the Need for New Solutions",
        p: "Iran faces water scarcity, and in many coastal and desert regions drinking water quality is unacceptable. In Hormozgan, Sistan-Baluchestan, Bushehr, and Khuzestan, drinking water is saline or highly brackish. In central desert villages, well depths reach 200 m with very low quality. Government centralized industrial desalination and pipe transport are costly and inefficient. Small, local solar desalination is a distributed solution producing safe drinking water on-site — no grid or long pipes needed. This is the future of drinking water supply in Iran's critical regions."
      },
      {
        h2: "How Does Solar Desalination Work?",
        p: "Solar desalination combines two technologies: Reverse Osmosis (RO) and solar panels. In RO, saline water at high pressure (typically 10–20 bar) passes through a semi-permeable membrane that removes salts and contaminants, allowing only water molecules through. The result is fresh water with TDS below 500 mg/L — suitable for drinking. The high-pressure pump's energy comes from solar panels. In simple mode, panels power the pump during the day and produced water is stored. With LiFePO4 batteries, the system runs 24/7. Overall efficiency ranges 10–30% depending on input salinity and temperature."
      },
      {
        h2: "Capacities and Applications",
        p: "Solar desalination serves four main scales. First, household (100–500 L/day) for rural families with brackish wells — small, portable, priced 30–80 million toman. Second, village scale (2–10 m³/day) for a small village or school — 200–600 million toman. Third, agricultural scale (20–100 m³/day) for greenhouse irrigation in desert regions. Fourth, industrial scale (100+ m³/day) for food, pharmaceutical, and petrochemical industries. Parsa Energy provides design and installation at all four scales."
      },
      {
        h2: "Economic Justification — Comparison",
        p: "Let's compare solar desalination with alternatives. Option 1: tanker transport from nearest city — 50,000–150,000 toman/m³, uncertain quality, road-dependent. Option 2: grid-tied electric desalination — 30,000–60,000 toman/m³, but remote areas lack grid or face outages. Option 3: solar desalination — high upfront (e.g., 400 million toman for 5 m³/day) but very low operating cost (5,000–10,000 toman/m³). With 5 m³/day over 300 sunny days, annual production is 1,500 m³ worth 75 million toman (at low price). Payback: 5–7 years. Over 20-year lifespan, savings are substantial."
      },
      {
        h2: "Membrane Selection and RO System",
        p: "The RO membrane is the heart of the desalinator. Membrane choice depends on input salinity. For brackish water with TDS below 3,000 mg/L (e.g., shallow wells), Brackish Water (BWRO) membranes work. For seawater with TDS above 10,000 mg/L, Sea Water (SWRO) membranes are needed — higher pressure and energy. In Iran, most central plain brackish wells have TDS 2,000–5,000 and use BWRO membranes. Membrane lifespan is 3–5 years with proper pre-treatment (sand filter, cartridge filter, UV disinfection). Parsa Energy supplies Filmtec, Hydranautics, and Toray membranes with warranty."
      },
      {
        h2: "Successful Examples in Iran",
        p: "Several solar desalination projects have been implemented in Iran. In Bandar Abbas, a fishing village uses a 5 m³/day system supplying 80 families. In Chabahar, a girls' school uses a 500 L unit for 300 students. In Yazd desert, a dairy farm uses a 20 m³ system from a brackish well, zeroing its electricity bill. In Sistan-Baluchestan, charitable groups have installed dozens of household units. These projects show solar desalination is not just technical but executable and economic in Iranian conditions."
      },
      {
        h2: "Maintenance and Lifespan",
        p: "Properly maintained, solar desalination lasts 15–20 years. Maintenance includes: replacing pre-treatment filters every 3–6 months, membrane acid wash every 6–12 months, membrane replacement every 3–5 years, cleaning solar panels every 3 months, annual check of controls and pump. The main failure factor is membrane scaling — in hard-water areas, softeners or proper antiscalant dosing are essential. In dusty regions like Sistan, panel protective covers and frequent washing matter. Parsa Energy offers maintenance SLA contracts with sub-24-hour response across Iran."
      },
      {
        h2: "Practical Project Steps",
        p: "If considering solar desalination, the path is: First, test source water quality and salinity (well, sea, river). Second, calculate daily drinking water needs and select unit capacity. Third, consult Parsa Energy for system design matched to site conditions. Fourth, procure equipment and install. Fifth, commission and test output water quality. Sixth, train operator and deliver. A medium project takes 2–4 weeks. Initial consultation and water testing are free. Contact via WhatsApp or website form."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه آب شیرین‌کن خورشیدی برای یک خانوار چقدر است؟", en: "How much does a solar desalinator cost for a household?" },
      a: { fa: "برای یک خانوار با نیاز روزانه ۲۰۰ تا ۵۰۰ لیتر، دستگاه‌های کوچک با قیمت ۳۰ تا ۸۰ میلیون تومان موجود است. این شامل پنل، باتری، غشاء RO و مخزن است.", en: "For a household needing 200–500 L/day, small units cost 30–80 million toman including panels, battery, RO membrane, and tank." }
    },
    {
      q: { fa: "آیا آب خروجی برای شرب مناسب است؟", en: "Is the output water suitable for drinking?" },
      a: { fa: "بله، آب خروجی از RO با غشاء مناسب، TDS زیر ۵۰۰ میلی‌گرم در لیتر دارد که استاندارد شرب است. در برخی موارد، remineralization لازم است تا طعم آب بهتر شود.", en: "Yes, RO output with proper membranes has TDS below 500 mg/L — drinking water standard. Sometimes remineralization is needed for better taste." }
    },
    {
      q: { fa: "آیا این سیستم در شب هم کار می‌کند؟", en: "Does the system work at night?" },
      a: { fa: "در حالت ساده، فقط در روز کار می‌کند و آب در مخزن ذخیره می‌شود. با اضافه کردن باتری LiFePO4، سیستم ۲۴ ساعته کار می‌کند اما هزینه اولیه ۳۰ تا ۵۰ درصد افزایش می‌یابد.", en: "In simple mode, only daytime operation with tank storage. Adding LiFePO4 battery enables 24/7 operation but increases upfront cost 30–50%." }
    }
  ]
},
// ============================================================================
// مقاله ۶: خشک‌کن خورشیدی محصولات کشاورزی - دسته: solar
// ============================================================================
{
  slug: "khoshk-kon-khorshidi-keshavarzi",
  title: {
    fa: "خشک‌کن خورشیدی محصولات کشاورزی: کاهش هدررفت و افزایش کیفیت خرما، کشمش و زعفران",
    en: "Solar Agricultural Dryers: Reduce Waste and Boost Quality of Dates, Raisins, and Saffron"
  },
  category: "solar",
  categoryLabel: { fa: "خورشیدی", en: "Solar" },
  excerpt: {
    fa: "سالانه ۳۰ درصد محصولات کشاورزی ایران در خشک‌کردن سنتی هدر می‌رود. خشک‌کن خورشیدی با کنترل دما و رطوبت، هم کیفیت محصول را بالا می‌برد هم اشتغال‌زایی روستایی ایجاد می‌کند.",
    en: "Each year 30% of Iran's agricultural products are lost in traditional drying. Solar dryers with controlled temperature and humidity boost product quality and create rural employment."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "هدررفت محصولات کشاورزی در ایران: یک فاجعه پنهان",
        p: "ایران یکی از بزرگ‌ترین تولیدکنندگان خرما، کشمش، برگه زردآلو، پسته، انجیر و زعفران در جهان است. اما سالانه حدود ۳۰ درصد این محصولات (ارزش اقتصادی هزاران میلیارد تومان) در فرایند خشک‌کردن سنتی هدر می‌رود. در روش سنتی، محصول در فضای باز روی زمین یا سقف پهن می‌شود و چند روز تا چند هفته در معرض آفتاب قرار می‌گیرد. این روش چند مشکل اساسی دارد: اول، آلودگی با گردوغبار، حشرات و فضول پرندگان. دوم، عدم کنترل دما که باعث سوختن یا خشک‌نشدن کامل می‌شود. سوم، وابستگی به شرایط جوی و ریسک بارش باران. چهارم، زمان طولانی که باعث رشد قارچ و کپک می‌شود. خشک‌کن خورشیدی مدرن، این مشکلات را حل می‌کند و هم کیفیت محصول را بالا می‌برد هم درآمد کشاورز را افزایش می‌دهد."
      },
      {
        h2: "خشک‌کن خورشیدی چیست و چگونه کار می‌کند؟",
        p: "خشک‌کن خورشیدی یک ساختار بسته است که با استفاده از انرژی خورشید، هوای گرم و خشک تولید می‌کند و آن را به طور کنترل‌شده روی محصول عبور می‌دهد. اجزای اصلی آن شامل: کلکتور خورشیدی (که هوای ورودی را گرم می‌کند)، اتاق خشک‌کردن (که محصول در سینی‌های مشبک قرار می‌گیرد)، فن (که جریان هوا را تأمین می‌کند)، سیستم کنترل دما و رطوبت (که با ترموستات و هیتر کمکی کار می‌کند)، و در موارد پیشرفته، باتری و پنل PV برای فن و کنترل. در عمل، هوای گرم خورشیدی با رطوبت کم، رطوبت محصول را به طور سریع و یکنواخت جذب می‌کند. دمای اتاق معمولاً بین ۴۵ تا ۷۰ درجه سانتی‌گراد بسته به نوع محصول تنظیم می‌شود."
      },
      {
        h2: "انواع خشک‌کن خورشیدی",
        p: "سه نوع اصلی خشک‌کن خورشیدی در بازار وجود دارد. نوع مستقیم (Direct) که محصول مستقیماً زیر شیشه خورشیدی قرار می‌گیرد؛ ساختار ساده و ارزان اما مناسب فقط مقیاس کوچک. نوع غیرمستقیم (Indirect) که هوای گرم‌شده در کلکتور جداگانه به اتاق خشک‌کردن می‌رود؛ کیفیت بهتر و کنترل بیشتر، مناسب مقیاس متوسط. نوع هیبریدی (Hybrid) که ترکیبی از خورشیدی و گاز یا برق است؛ در روزهای ابری یا شب، هیتر کمکی فعال می‌شود تا فرایند متوقف نشود. این نوع برای کارخانه‌های صنعتی و صادراتی مناسب است. در ایران، نوع هیبریدی بیشترین تقاضا را دارد زیرا کیفیت محصول برای صادرات حیاتی است و قطع فرایند حتی یک روز باعث ضرر بزرگ می‌شود."
      },
      {
        h2: "محصولات مناسب برای خشک‌کن خورشیدی",
        p: "خشک‌کن خورشیدی برای طیف وسیعی از محصولات مناسب است. اول، میوه‌های خشک مثل خرما، کشمش، برگه زردآلو، برگه هلو، انجیر و آلو which بیشترین حجم بازار را دارند. دوم، صیفی‌جات مثل گوجه‌فرنگی، فلفل، بادمجان و پیاز که در فصل فراوانی خشک می‌شوند. سوم، گیاهان دارویی و معطر مثل نعناع، آویشن، بابونه، کاکوتی و گل گاوزبان که ارزش اقتصادی بالایی دارند. چهارم، زعفران که نیاز به خشک‌کردن دقیق با دمای پایین (۴۰ تا ۵۰ درجه) دارد تا رنگ و عطر آن حفظ شود. پنجم، پسته و بادام که نیاز به خشک‌کردن پس از برداشت دارند. برای هر محصول، دما، رطوبت و زمان خشک‌کردن باید بر اساس استاندارد تنظیم شود."
      },
      {
        h2: "توجیه اقتصادی: محاسبه واقعی",
        p: "بیایید یک مثال واقعی محاسبه کنیم. یک تعاونی روستایی در خراسان جنوبی، سالانه ۲۰ تن خرما تولید می‌کند. در روش سنتی، ۲۰ درصد محصول (۴ تن) هدر می‌رود و قیمت محصول خشک‌شده ۸۰ هزار تومان به ازای هر کیلوگرم است. در خشک‌کن خورشیدی هیبریدی با ظرفیت ۵۰۰ کیلوگرم در روز، هدررفت به ۳ درصد (۰/۶ تن) کاهش می‌یابد و قیمت محصول به دلیل کیفیت بالاتر (عاری از آلودگی، رنگ بهتر، رطوبت یکنواخت) به ۱۲۰ هزار تومان به ازای هر کیلوگرم می‌رسد. یعنی درآمد فروش از ۱/۲۸ میلیارد تومان به ۲/۳۳ میلیارد تومان افزایش می‌یابد. هزینه خشک‌کن با ظرفیت ۵۰۰ کیلوگرم در روز حدود ۴۰۰ تا ۶۰۰ میلیون تومان است. یعنی بازگشت سرمایه کمتر از یک سال."
      },
      {
        h2: "نمونه‌های موفق در ایران",
        p: "چندین پروژه خشک‌کن خورشیدی در ایران اجرا شده است. در بم، یک تعاونی خرما با خشک‌کن ۱۰۰۰ کیلوگرمی، محصول خود را با کیفیت اروپایی به آلمان صادر می‌کند. در مرند آذربایجان، یک گروه زنانه با خشک‌کن ۱۰۰ کیلوگرمی، گیاهان دارویی را خشک و بسته‌بندی می‌کند و در داروخانه‌های طبیعی می‌فروشد. در قائنات، زعفران‌کاران با خشک‌کن دقیق خورشیدی، رنگ زعفران خود را به بالاترین درجه (Sargol Grade 1) رسانده‌اند. در خراسان جنوبی، کشاورزان پسته با خشک‌کن خورشیدی، آفلاتوکسین محصول را به صفر رسانده‌اند و به اتحادیه اروپا صادر می‌کنند. این پروژه‌ها نشان می‌دهند که خشک‌کن خورشیدی نه تنها یک ابزار فنی، بلکه یک ابزار توسعه اقتصادی روستایی است."
      },
      {
        h2: "نکات طراحی و انتخاب",
        p: "هنگام انتخاب خشک‌کن خورشیدی، چند نکته مهم وجود دارد. اول، ظرفیت باید با حجم برداشت شما مطابقت داشته باشد؛ بزرگ‌تر از حد، هدررفت سرمایه است و کوچک‌تر از حد، باعث تجمع محصول و افت کیفیت می‌شود. دوم، متریال ساختار باید فولاد گالوانیزه یا آلومینیوم با پوشش ضدزنگ باشد تا در محیط مرطوب دوام داشته باشد. سوم، کنترل دما باید دقیق (با خطای زیر ۲ درجه) باشد تا محصول نسوزد یا کپک نزند. چهارم، فن باید با توان متناسب و کم‌صدا باشد. پنجم، در صورت نیاز به کار شبانه، سیستم هیبریدی با گاز یا برق انتخاب شود. تیم پارسا انرژی طراحی و ساخت خشک‌کن خورشیدی با ظرفیت ۵۰ تا ۲۰۰۰ کیلوگرم در روز را ارائه می‌دهد."
      },
      {
        h2: "گام‌های اجرایی و اشتغال‌زایی",
        p: "اگر به خشک‌کن خورشیدی فکر می‌کنید، مسیر به این شکل است. اول، ارزیابی نوع و حجم محصول تولیدی شما. دوم، انتخاب نوع و ظرفیت خشک‌کن متناسب با نیاز. سوم، مشاوره با پارسا انرژی برای طراحی و ساخت. چهارم، نصب و راه‌اندازی. پنجم، آموزش بهره‌بردار و تنظیم پارامترها برای هر محصول. ششم، پشتیبانی فنی و نگهداری. علاوه بر این، خشک‌کن خورشیدی فرصت‌های اشتغال‌زایی روستایی ایجاد می‌کند: مدیریت دستگاه، بسته‌بندی، بازاریابی و فروش. در بسیاری از موارد، خشک‌کن به عنوان هسته یک تعاونی روستایی عمل می‌کند که چندین خانوار را به هم متصل می‌کند. مشاوره اولیه ۳۰ دقیقه‌ای رایگان است."
      }
    ],
    en: [
      {
        h2: "Agricultural Product Loss in Iran — A Hidden Disaster",
        p: "Iran is one of the world's largest producers of dates, raisins, dried apricots, pistachios, figs, and saffron. But annually about 30% of these products (worth thousands of billions of toman) are lost in traditional sun-drying. The traditional method spreads product in the open air on the ground or roof for days to weeks. Problems include: dust, insect, and bird dropping contamination; uncontrolled temperature causing burning or incomplete drying; weather dependence with rain risk; long drying time causing mold and fungal growth. Modern solar dryers solve these problems, improving product quality and farmer income."
      },
      {
        h2: "What Is a Solar Dryer and How Does It Work?",
        p: "A solar dryer is an enclosed structure using solar energy to produce hot, dry air that passes in a controlled manner over the product. Main components include: solar collector (heating inlet air), drying chamber (product in perforated trays), fan (providing airflow), temperature/humidity control system (thermostat and auxiliary heater), and optionally battery and PV panel for fan and controls. Hot, low-humidity solar air rapidly and uniformly absorbs product moisture. Chamber temperature is typically set 45–70°C depending on product type."
      },
      {
        h2: "Types of Solar Dryers",
        p: "Three main types exist. Direct: product directly under solar glass — simple and cheap but only for small scale. Indirect: heated air from separate collector enters drying chamber — better quality and control, suitable for medium scale. Hybrid: combination of solar and gas/electric — auxiliary heater activates on cloudy days or at night to keep the process running. Ideal for industrial and export factories. Hybrid is most demanded in Iran because export product quality is critical and even one day's stoppage causes major losses."
      },
      {
        h2: "Suitable Products for Solar Drying",
        p: "Solar dryers suit a wide range of products. First, dried fruits — dates, raisins, dried apricots, peaches, figs, plums — the largest market. Second, vegetables — tomato, pepper, eggplant, onion dried in season. Third, medicinal and aromatic herbs — mint, thyme, chamomile, kakuti, borage — high economic value. Fourth, saffron needing precise low-temperature drying (40–50°C) to preserve color and aroma. Fifth, pistachios and almonds needing post-harvest drying. Each product requires specific temperature, humidity, and time settings per standard."
      },
      {
        h2: "Economic Justification — Real Calculation",
        p: "Let's calculate a real example. A South Khorasan rural cooperative produces 20 tons of dates annually. Traditional method: 20% loss (4 tons) and dried product price 80,000 toman/kg. With 500 kg/day hybrid solar dryer: loss drops to 3% (0.6 tons), and quality premium raises price to 120,000 toman/kg. Sales revenue rises from 1.28 billion toman to 2.33 billion toman. Dryer cost (500 kg/day): 400–600 million toman. Payback: under one year."
      },
      {
        h2: "Successful Examples in Iran",
        p: "Several solar dryer projects have been implemented in Iran. In Bam, a date cooperative with a 1,000 kg dryer exports European-quality dates to Germany. In Marand Azerbaijan, a women's group with a 100 kg dryer dries and packages medicinal herbs for natural pharmacies. In Qaenat, saffron farmers have achieved top-grade (Sargol Grade 1) color with precise solar drying. In South Khorasan, pistachio farmers have eliminated aflatoxin and export to the EU. These projects show solar dryers are not just a technical tool but a rural economic development instrument."
      },
      {
        h2: "Design and Selection Tips",
        p: "When selecting a solar dryer, several points matter. First, capacity must match your harvest volume — oversizing wastes capital, undersizing causes product accumulation and quality loss. Second, structure material must be galvanized steel or aluminum with anti-corrosion coating for humid environments. Third, temperature control must be precise (within 2°C) to prevent burning or mold. Fourth, fan must have appropriate power and low noise. Fifth, for night operation, choose hybrid with gas or electric. Parsa Energy designs and builds solar dryers from 50 to 2,000 kg/day capacity."
      },
      {
        h2: "Practical Steps and Employment Creation",
        p: "If considering a solar dryer, the path is: First, assess your product type and volume. Second, select dryer type and capacity matching needs. Third, consult Parsa Energy for design and construction. Fourth, install and commission. Fifth, train operator and set parameters per product. Sixth, technical support and maintenance. Beyond this, solar dryers create rural employment: machine management, packaging, marketing, and sales. Often the dryer becomes the core of a rural cooperative connecting multiple households. Initial 30-minute consultation is free."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه یک خشک‌کن خورشیدی برای خرما چقدر است؟", en: "How much does a solar dryer for dates cost?" },
      a: { fa: "برای ظرفیت ۵۰۰ کیلوگرم در روز، حدود ۴۰۰ تا ۶۰۰ میلیون تومان. این شامل کلکتور، اتاق خشک، فن، کنترل و نصب است. بازگشت سرمایه معمولاً کمتر از یک سال.", en: "For 500 kg/day capacity, about 400–600 million toman including collector, drying chamber, fan, controls, and installation. Payback is typically under one year." }
    },
    {
      q: { fa: "آیا خشک‌کن خورشیدی در شب هم کار می‌کند؟", en: "Does a solar dryer work at night?" },
      a: { fa: "در نوع ساده، فقط در روز کار می‌کند. در نوع هیبریدی، هیتر کمکی (گاز یا برق) در شب یا روزهای ابری فعال می‌شود تا فرایند متوقف نشود.", en: "Simple types work only in daytime. Hybrid types use auxiliary heaters (gas or electric) at night or on cloudy days to keep the process running." }
    },
    {
      q: { fa: "کیفیت محصول خشک‌شده با خورشیدی چقدر بهتر از سنتی است؟", en: "How much better is solar-dried product quality versus traditional?" },
      a: { fa: "بسیار بهتر. محصول خورشیدی عاری از آلودگی گردوغبار و حشرات است، رنگ و عطر بهتر دارد، رطوبت یکنواخت است و قیمت فروش ۳۰ تا ۵۰ درصد بالاتر دارد.", en: "Much better. Solar-dried products are free of dust and insect contamination, have better color and aroma, uniform moisture, and sell for 30–50% higher prices." }
    }
  ]
},

// ============================================================================
// مقاله ۷: وام و تسهیلات بانکی برای نیروگاه خورشیدی - دسته: news
// ============================================================================
{
  slug: "vam-tashilat-banki-khorshidi",
  title: {
    fa: "وام و تسهیلات بانکی برای نیروگاه خورشیدی: راهنمای کامل دریافت ۲۰ تا ۵۰ میلیارد تومان",
    en: "Bank Loans and Facilities for Solar Plants: Complete Guide to 20–50 Billion Toman"
  },
  category: "news",
  categoryLabel: { fa: "اخبار و قوانین", en: "News" },
  excerpt: {
    fa: "بانک صنعت و معدن، بانک مهر و صندوق نوآوری و شکوفایی تسهیلات کم‌بهره ۲۰ تا ۵۰ میلیارد تومانی برای نیروگاه خورشیدی ارائه می‌دهند. این راهنما تمام مراحل دریافت را گام‌به‌گام توضیح می‌دهد.",
    en: "Bank of Industry and Mine, Mehr Bank, and the Innovation and Prosperity Fund offer low-interest 20–50 billion toman facilities for solar plants. This guide explains every step."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "چرا به وام خورشیدی نیاز دارید؟",
        p: "بازگشت سرمایه نیروگاه خورشیدی ۴ تا ۵ سال است و IRR حدود ۱۸ تا ۲۲ درصد دارد. این یعنی اگر سرمایه کامل را خودتان بپردازید، سرمایه شما در طول ۲۰ سال قرارداد ساتبا، ۵ تا ۶ برابر می‌شود. اما اگر بتوانید با وام کم‌بهره بانکی (با نرخ بهره ۵ تا ۱۲ درصد) سرمایه را تأمین کنید، بازگشت سرمایه اهرمی شما به ۳۰ تا ۴۰ درصد در سال می‌رسد. این یعنی با سرمایه اولیه یک‌سوم، می‌توانید همان نیروگاه را بسازید و در طول ۲۰ سال، ۸ تا ۱۰ برابر سرمایه اولیه سود ببرید. در شرایط تورم ۴۰ درصدی، وام خورشیدی یکی از معدود فرصت‌های سرمایه‌گذاری اهرمی با ریسک پایین است."
      },
      {
        h2: "منابع اصلی تسهیلات خورشیدی در ایران",
        p: "چهار منبع اصلی تسهیلات خورشیدی در ایران وجود دارد. اول، بانک صنعت و معدن که برای نیروگاه‌های بالای ۱۰۰ کیلووات تسهیلات ارزی و ریالی ارائه می‌دهد؛ نرخ بهره ۹ تا ۱۲ درصد، مدت بازپرداخت ۷ تا ۱۰ سال، با دوره تنفس ۲ ساله. دوم، صندوق نوآوری و شکوفایی که برای پروژه‌های نوآورانه و فناورانه تسهیلات تا ۵۰ میلیارد تومان با نرخ بهره ۵ تا ۸ درصد ارائه می‌دهد. سوم، بانک مهر اقتصاد که برای نیروگاه‌های خانگی و کوچک تا ۱۰ کیلووات تسهیلات ارائه می‌دهد. چهارم، صندوق پژوهش و فناوری که برای پروژه‌های دانش‌بنیان مرتبط با خورشیدی تسهیلات می‌دهد. در سال‌های اخیر، بانک‌های تجاری نیز با همکاری ساتبا خطوط اعتباری تخصصی ارائه داده‌اند."
      },
      {
        h2: "شرایط وام: نرخ بهره، مدت و سقف",
        p: "شرایط تسهیلات بسته به منبع و نوع پروژه متفاوت است. برای بانک صنعت و معدن، سقف وام معمولاً ۸۰ درصد هزینه پروژه است (تا سقف ۵۰ میلیارد تومان)، با نرخ بهره ۹ تا ۱۲ درصد، مدت بازپرداخت ۷ تا ۱۰ سال، و دوره تنفس ۲ سال (در این مدت فقط بهره پرداخت می‌شود). برای صندوق نوآوری و شکوفایی، سقف ۵۰ میلیارد تومان، نرخ بهره ۵ تا ۸ درصد، مدت ۵ تا ۷ سال، با تضمین سهام دانش‌بنیان. برای بانک مهر، سقف ۳ میلیارد تومان برای هر نیروگاه خانگی، با نرخ بهره ۱۸ درصد و مدت ۵ سال. در همه موارد، تأمین ضامن یا وثیقه (معمولاً سند ملکی معادل ۱۲۰ تا ۱۵۰ درصد مبلغ وام) ضروری است."
      },
      {
        h2: "مدارک لازم برای درخواست وام",
        p: "مدارک لازم برای درخواست تسهیلات خورشیدی شامل موارد زیر است. اول، طرح توجیهی فنی و اقتصادی (که باید توسط مشاور رسمی یا شرکت مهندسی معتبر تهیه شود) شامل محاسبه ظرفیت، تولید سالانه، درآمد، هزینه و ROI. دوم، پروانه احداث نیروگاه از ساتبا. سوم، قرارداد خرید تضمینی برق با ساتبا یا تعهدنامه خرید. چهارم، مدارک هویتی و مالی متقاضی (شناسنامه، کارت ملی، گواهی فعالیت مالیاتی، صورت‌های مالی سه ساله). پنجم، مدارک ضامن یا وثیقه. ششم، قرارداد با پیمانکار مجاز برای اجرای پروژه. هفتم، مجوزهای محیط‌زیستی و شهرداری. تیم پارسا انرژی در تهیه تمام این مدارک، به‌ویژه طرح توجیهی و هماهنگی با ساتبا، به شما کمک می‌کند."
      },
      {
        h2: "طرح توجیهی: قلب درخواست وام",
        p: "طرح توجیهی مهم‌ترین سند درخواست وام است و کیفیت آن مستقیماً بر تصمیم بانک تأثیر می‌گذارد. یک طرح توجیهی استاندارد شامل بخش‌های زیر است. اول، خلاصه مدیریتی (Executive Summary) که پروژه را در یک صفحه توصیف می‌کند. دوم، معرفی متقاضی و سابقه فعالیت. سوم، توصیف فنی پروژه شامل ظرفیت، نوع تجهیزات، طرح تک‌خطی، شبیه‌سازی تولید با PVsyst. چهارم، تحلیل بازار شامل تعرفه‌های ساتبا، قرارداد فروش و درآمد ماهانه. پنجم، تحلیل مالی شامل هزینه سرمایه، هزینه بهره‌برداری، جریان نقدی، ROI، IRR و NPV. ششم، تحلیل ریسک و راهکار کاهش. هفتم، برنامه زمان‌بندی پروژه. پارسا انرژی با تجربه تهیه طرح توجیهی برای ده‌ها پروژه خورشیدی، این سند را با کیفیت بالا و متناسب با انتظارات بانک تهیه می‌کند."
      },
      {
        h2: "گام‌های عملی دریافت وام",
        p: "مسیر دریافت وام خورشیدی به این شکل است. اول، مشاوره اولیه با پارسا انرژی برای ارزیابی پروژه و انتخاب منبع تسهیلات مناسب. دوم، تهیه طرح توجیهی و مدارک فنی. سوم، دریافت پروانه احداث از ساتبا (این مرحله ممکن است ۲ تا ۴ هفته طول بکشد). چهارم، انتخاب بانک و ارائه درخواست وام. پنجم، ارزیابی بانک و مذاکره (۲ تا ۸ هفته). ششم، تأمین ضامن یا وثیقه. هفتم، عقد قرارداد وام و شروع پروژه. کل فرایند از تصمیم تا دریافت وام معمولاً ۳ تا ۶ ماه طول می‌کشد. مهم‌ترین عامل موفقیت، کیفیت طرح توجیهی و مدارک فنی است؛ اگر این مدارک قوی باشند، احتمال دریافت وام به شدت بالا می‌رود."
      },
      {
        h2: "چالش‌ها و راهکارها",
        p: "دریافت وام خورشیدی با چند چالش مواجه است. اول، فرایند طولانی ارزیابی در بانک که می‌تواند ۳ تا ۶ ماه طول بکشد؛ راهکار، انتخاب بانک با خط اعتباری آماده و پیگیری مستمر. دوم، تأمین ضامن یا وثیقه با ارزش ۱۲۰ تا ۱۵۰ درصد مبلغ وام؛ راهکار، استفاده از صندوق‌های ضمانت اعتبار یا وثیقه‌های مشترک. سوم، عدم آشنایی بانک با فناوری خورشیدی که باعث عدم پذیرش می‌شود؛ راهکار، انتخاب بانکی که قبلاً پروژه خورشیدی تأمین مالی کرده است. چهارم، نوسان تعرفه ساتبا که باعث می‌شود بانک محافظه‌کارانه عمل کند؛ راهکار، ارائه تحلیل ریسک دقیق و سناریوهای مختلف. پارسا انرژی با تجربه کار با بانک‌های مختلف، تمام این چالش‌ها را مدیریت می‌کند."
      },
      {
        h2: "نمونه موردی: یک پروژه موفق",
        p: "بیایید یک نمونه واقعی را مرور کنیم. یک سرمایه‌گذار در مشهد قصد ساخت نیروگاه ۵۰۰ کیلوواتی خورشیدی داشت. هزینه پروژه ۳۰ میلیارد تومان بود. سرمایه خود او ۱۰ میلیارد تومان و وام مورد نیاز ۲۰ میلیارد تومان بود. با کمک پارسا انرژی، طرح توجیهی با PVsyst و تحلیل دقیق مالی تهیه شد. پروانه احداث از ساتبا دریافت شد. درخواست به بانک صنعت و معدن ارائه شد. پس از ۴ ماه ارزیابی، وام ۲۰ میلیارد تومان با نرخ بهره ۱۰ درصد، مدت بازپرداخت ۸ سال و دوره تنفس ۲ ساله تأیید شد. نیروگاه در ۴ ماه نصب و راه‌اندازی شد. درآمد ماهانه ۱۰۰ میلیون تومان است و بازپرداخت ماهانه وام ۳۰ میلیون تومان؛ یعنی سود خالص ماهانه ۷۰ میلیون تومان. در پایان دوره بازپرداخت، سرمایه‌گذار نیروگاهی دارد که تا ۲۰ سال دیگر درآمد خالص ۱۰۰ میلیون تومانی در ماه تولید می‌کند."
      }
    ],
    en: [
      {
        h2: "Why Do You Need a Solar Loan?",
        p: "Solar plant payback is 4–5 years with IRR of 18–22%. Self-funded, capital multiplies 5–6× over the 20-year SATBA contract. But with low-interest bank loans (5–12%), leveraged ROI reaches 30–40% annually. With one-third the upfront capital, you can build the same plant and earn 8–10× over 20 years. At 40% inflation, solar loans are among the few low-risk leveraged investment opportunities."
      },
      {
        h2: "Main Sources of Solar Financing in Iran",
        p: "Four main sources exist. First, Bank of Industry and Mine — for plants over 100 kW, offers foreign and domestic currency facilities at 9–12% interest, 7–10 year repayment, 2-year grace. Second, Innovation and Prosperity Fund — up to 50 billion toman at 5–8% for innovative projects. Third, Mehr Economy Bank — for residential and small plants up to 10 kW. Fourth, Research and Technology Fund — for knowledge-based solar projects. Recently, commercial banks have offered specialized credit lines with SATBA cooperation."
      },
      {
        h2: "Loan Terms: Rate, Term, and Ceiling",
        p: "Terms vary by source and project. Bank of Industry and Mine: up to 80% of project cost (max 50 billion toman), 9–12% interest, 7–10 year repayment, 2-year grace (interest-only). Innovation Fund: 50 billion toman max, 5–8% interest, 5–7 year term, with knowledge-based share guarantee. Mehr Bank: 3 billion toman per residential plant, 18% interest, 5-year term. All require guarantor or collateral (typically real estate deed worth 120–150% of loan)."
      },
      {
        h2: "Required Documents for Loan Application",
        p: "Required documents include: First, technical and economic feasibility study (by official consultant or reputable engineering firm) covering capacity, annual generation, income, cost, and ROI. Second, SATBA construction permit. Third, SATBA guaranteed purchase contract or purchase commitment. Fourth, applicant identity and financial documents (ID, national card, tax activity certificate, 3-year financial statements). Fifth, guarantor or collateral documents. Sixth, contract with licensed contractor. Seventh, environmental and municipal permits. Parsa Energy assists with all documents, especially feasibility study and SATBA coordination."
      },
      {
        h2: "Feasibility Study — The Heart of Loan Application",
        p: "The feasibility study is the most critical document and directly affects bank decisions. A standard study includes: Executive Summary (one-page project description), applicant introduction and history, technical description (capacity, equipment, single-line diagram, PVsyst simulation), market analysis (SATBA tariffs, sales contract, monthly income), financial analysis (capital cost, operating cost, cash flow, ROI, IRR, NPV), risk analysis and mitigation, and project schedule. Parsa Energy's experience in preparing feasibility studies for dozens of solar projects delivers high-quality documents meeting bank expectations."
      },
      {
        h2: "Practical Steps to Obtain a Loan",
        p: "The path is: First, initial consultation with Parsa Energy for project evaluation and selecting appropriate funding source. Second, prepare feasibility study and technical documents. Third, obtain SATBA construction permit (2–4 weeks). Fourth, select bank and submit loan application. Fifth, bank evaluation and negotiation (2–8 weeks). Sixth, secure guarantor or collateral. Seventh, sign loan contract and start project. Total process from decision to loan receipt typically takes 3–6 months. The key success factor is feasibility study and technical document quality — strong documents dramatically increase loan approval probability."
      },
      {
        h2: "Challenges and Solutions",
        p: "Solar loan challenges include: First, lengthy bank evaluation (3–6 months) — mitigate by selecting banks with ready credit lines and persistent follow-up. Second, securing guarantor or collateral worth 120–150% of loan — use credit guarantee funds or joint collateral. Third, bank unfamiliarity with solar technology causing rejection — select banks with prior solar financing experience. Fourth, SATBA tariff volatility making banks conservative — provide precise risk analysis and multiple scenarios. Parsa Energy's experience with various banks manages all these challenges."
      },
      {
        h2: "Case Study — A Successful Project",
        p: "Let's review a real example. A Mashhad investor planned a 500 kW solar plant. Project cost: 30 billion toman. Own capital: 10 billion, loan needed: 20 billion. With Parsa Energy, a feasibility study with PVsyst and detailed financial analysis was prepared. SATBA construction permit obtained. Application submitted to Bank of Industry and Mine. After 4 months, 20 billion toman loan approved at 10% interest, 8-year repayment, 2-year grace. Plant installed in 4 months. Monthly income: 100 million toman; monthly loan payment: 30 million — net monthly profit 70 million toman. At loan maturity, the investor owns a plant generating 100 million toman net monthly for another 20 years."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "حداکثر مبلغ وام خورشیدی چقدر است؟", en: "What is the maximum solar loan amount?" },
      a: { fa: "بسته به منبع، از ۳ میلیارد تومان (بانک مهر برای خانگی) تا ۵۰ میلیارد تومان (بانک صنعت و معدن و صندوق نوآوری). برای پروژه‌های بزرگ‌تر، ترکیب چند منبع ممکن است.", en: "Depending on source, from 3 billion toman (Mehr Bank for residential) to 50 billion toman (Bank of Industry and Mine and Innovation Fund). Larger projects can combine multiple sources." }
    },
    {
      q: { fa: "نرخ بهره وام خورشیدی چقدر است؟", en: "What is the solar loan interest rate?" },
      a: { fa: "از ۵ درصد (صندوق نوآوری) تا ۱۸ درصد (بانک مهر). بانک صنعت و معدن معمولاً ۹ تا ۱۲ درصد ارائه می‌دهد. این نرخ‌ها با توجه به تورم ۴۰ درصدی، بهره واقعی منفی است.", en: "From 5% (Innovation Fund) to 18% (Mehr Bank). Bank of Industry and Mine typically offers 9–12%. At 40% inflation, real interest is negative." }
    },
    {
      q: { fa: "آیا برای وام حتماً به ضامن نیاز است؟", en: "Is a guarantor mandatory for the loan?" },
      a: { fa: "بله، در اکثر موارد ضامن یا وثیقه ملکی با ارزش ۱۲۰ تا ۱۵۰ درصد مبلغ وام لازم است. در برخی صندوق‌ها، ضمانت اعتباری یا سهام دانش‌بنیان قابل قبول است.", en: "Yes, in most cases a guarantor or real estate collateral worth 120–150% of loan is required. Some funds accept credit guarantees or knowledge-based shares." }
    }
  ]
},

// ============================================================================
// مقاله ۸: بیمه نیروگاه خورشیدی - دسته: news
// ============================================================================
{
  slug: "bimeh-niroogah-khorshidi",
  title: {
    fa: "بیمه نیروگاه خورشیدی: راهنمای کامل پوشش‌ها، هزینه‌ها و شرکت‌های بیمه",
    en: "Solar Plant Insurance: Complete Guide to Coverage, Costs, and Insurance Companies"
  },
  category: "news",
  categoryLabel: { fa: "اخبار و قوانین", en: "News" },
  excerpt: {
    fa: "نیروگاه خورشیدی یک سرمایه ۳۰۰ میلیون تا چند میلیارد تومانی است که در فضای باز قرار دارد. بیمه تخصصی خورشیدی، ریسک‌های حریق، سرقت، خرابی، اختلال تولید و مسئولیت را پوشش می‌دهد.",
    en: "A solar plant is a 300 million to multi-billion toman asset exposed outdoors. Specialized solar insurance covers fire, theft, damage, business interruption, and liability risks."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "چرا بیمه نیروگاه خورشیدی ضروری است؟",
        p: "نیروگاه خورشیدی یک سرمایه‌گذاری بزرگ است که در فضای باز قرار دارد و در معرض ریسک‌های متعدد قرار می‌گیرد. یک نیروگاه ۱۰ کیلوواتی حدود ۷۰۰ میلیون تومان و یک نیروگاه ۱۰۰ کیلوواتی چند میلیارد تومان ارزش دارد. این سرمایه در معرض ریسک‌هایی است که در سرمایه‌گذاری‌های دیگر کمتر دیده می‌شود. اول، حریق ناشی از اتصالی کابل یا جرقه اینورتر. دوم، سرقت پنل‌ها و کابل‌ها که در مناطق دور از شهر شایع است. سوم، خرابی ناشی از طوفان، تگرگ، سیل یا رعد و برق. چهارم، آسیب ناشی از حیوانات (مثل جوندگان که کابل را می‌جوند). پنجم، اختلال تولید ناشی از خرابی طولانی‌مدت که درآمد شما را قطع می‌کند. ششم، مسئولیت در قبال آسیب به افراد یا اموال مجاور. بدون بیمه، یک حادثه می‌تواند کل سرمایه شما را از بین ببرد."
      },
      {
        h2: "انواع پوشش‌های بیمه خورشیدی",
        p: "بیمه تخصصی نیروگاه خورشیدی شامل شش پوشش اصلی است. اول، پوشش حریق و صواعق که خسارت ناشی از آتش‌سوزی، انفجار و رعد و برق را جبران می‌کند. دوم، پوشش سرقت با شکستن که شامل سرقت پنل‌ها، کابل‌ها و تجهیزات می‌شود؛ معمولاً با فرض وجود حراست یا دوربین. سوم، پوشش خسارت فیزیکی ناشی از حوادث طبیعی (طوفان، تگرگ، سیل، زمین‌لرزه) که در ایران بسیار مهم است. چهارم، پوشش خرابی تجهیزات (Equipment Breakdown) که خرابی اینورتر، پنل و سیستم‌های الکتریکی را پوشش می‌دهد. پنجم، پوشش اختلال تولید (Business Interruption) که درآمد از دست‌رفته در زمان تعمیر را جبران می‌کند. ششم، پوشش مسئولیت که خسارت به اشخاص ثالث یا اموال مجاور را پوشش می‌دهد."
      },
      {
        h2: "شرکت‌های بیمه فعال در حوزه خورشیدی",
        p: "در حال حاضر چند شرکت بیمه ایرانی پوشش تخصصی خورشیدی ارائه می‌دهند. بیمه ملت با همکاری ساتبا، یک پوشش استاندارد برای نیروگاه‌های متصل به شبکه ارائه می‌دهد که اکثر پوشش‌های بالا را شامل می‌شود. بیمه آسیا نیز با تجربه در بیمه تاسیسات صنعتی، پوشش‌های قابل توجهی برای نیروگاه‌های بزرگ ارائه می‌دهد. بیمه دانا و بیمه پاسارگاد هم در این حوزه فعال هستند. بیمه مرکزی ایران در سال‌های اخیر دستورالعمل‌های مشخصی برای بیمه خورشیدی صادر کرده و این باعث شده بازار بیمه خورشیدی در ایران شفافتر و قابل اعتمادتر شود. تیم پارسا انرژی با چندین شرکت بیمه همکاری دارد و می‌تواند بهترین پوشش را با رقابتی‌ترین قیمت برای نیروگاه شما تهیه کند."
      },
      {
        h2: "هزینه بیمه: چقدر و چگونه محاسبه می‌شود؟",
        p: "هزینه بیمه نیروگاه خورشیدی معمولاً ۰/۳ تا ۰/۸ درصد از ارزش تجهیزات در سال است. یعنی برای یک نیروگاه ۱۰ کیلوواتی با ارزش ۷۰۰ میلیون تومان، هزینه بیمه سالانه ۲/۱ تا ۵/۶ میلیون تومان است. برای نیروگاه ۱۰۰ کیلوواتی با ارزش ۵ میلیارد تومان، هزینه سالانه ۱۵ تا ۴۰ میلیون تومان است. عوامل مؤثر بر هزینه بیمه شامل: محل نصب (مناطق پرخطر مثل خوزستان با دمای بالا گران‌تر است)، نوع نصب (پشت‌بام ارزان‌تر از زمینی)، وجود حراست و دوربین (تخفیف ۱۰ تا ۲۰ درصد)، سابقه بیمه‌گذار، و پوشش‌های اضافی (مثل اختلال تولید). برای کاهش هزینه، می‌توان فرانشیز ( deductible) بالاتر در نظر گرفت؛ مثلاً با فرانشیز ۵ درصد، هزینه بیمه ۱۵ تا ۲۰ درصد کاهش می‌یابد."
      },
      {
        h2: "فرایند اعلام خسارت",
        p: "در صورت وقوع حادثه، فرایند اعلام خسارت باید سریع و دقیق انجام شود. اول، در ۲۴ ساعت اول، حادثه را به شرکت بیمه اطلاع دهید (با خط تلفن اختصاصی یا اپلیکیشن). دوم، عکس و ویدیو دقیق از محل حادثه تهیه کنید قبل از هرگونه تغییر. سوم، گزارش پلیس در صورت سرقت یا حادثه شخص ثالث. چهارم، گزارش کارشناس فنی (که پارسا انرژی می‌تواند تهیه کند) شامل علت حادثه، وسعت خسارت و برآورد هزینه تعمیر. پنجم، ارسال مدارک به بیمه و هماهنگی برای بازدید کارشناس بیمه. ششم، پس از تأیید، تعمیر توسط پیمانکار مجاز و ارسال فاکتور به بیمه. هفتم، دریافت خسارت. کل فرایند معمولاً ۲ تا ۸ هفته طول می‌کشد. مهم‌ترین عامل موفقیت، مستندسازی دقیق و سریع است."
      },
      {
        h2: "نکات مهم قرارداد بیمه",
        p: "هنگام امضای قرارداد بیمه خورشیدی، چند نکته مهم باید بررسی شود. اول، تعریف دقیق پوشش‌ها و استثناها؛ بعضی بیمه‌ها خرابی ناشی از فرسودگی یا نقص طراحی را پوشش نمی‌دهند. دوم، سقف خسارت در هر حادثه و در سال؛ باید با ارزش تجهیزات مطابقت داشته باشد. سوم، فرانشیز و نحوه محاسبه آن. چهارم، شرایط ابطال قرارداد (مثلاً عدم رعایت استانداردهای فنی یا عدم نصب حراست). پنجم، مدت قرارداد و شرایط تمدید. ششم، روند افزایش سقف پوشش با تورم (بیمه‌های خوب هر سال با شاخص تورم به‌روزرسانی می‌کنند). هفتم، پوشش اختلال تولید و نحوه محاسبه درآمد از دست‌رفته. تیم پارسا انرژی در مطالعه و مذاکره قرارداد بیمه به شما کمک می‌کند تا بهترین شرایط را بگیرید."
      },
      {
        h2: "نمونه موردی: یک خسارت واقعی",
        p: "بیایید یک نمونه واقعی را مرور کنیم. یک نیروگاه ۲۰ کیلوواتی در حومه مشهد در طوفان شدید بهار ۱۴۰۴ آسیب دید. ۸ پنل از پایه جدا شدند و یک اینورتر ۸ کیلوواتی هم آسیب دید. ارزش خسارت ۱۲۰ میلیون تومان بود. صاحب نیروگاه بیمه ملت داشت و در ۲۴ ساعت اول خسارت را اعلام کرد. عکس و ویدیو کامل تهیه شد. کارشناس فنی پارسا انرژی گزارش دقیق با علت (طوفان با سرعت باد ۹۰ کیلومتر بر ساعت) و برآورد هزینه تهیه کرد. کارشناس بیمه پس از ۵ روز بازدید کرد. پس از تأیید، تعمیرات توسط تیم پارسا انجام شد و فاکتور به بیمه ارسال شد. خسارت ۱۱۰ میلیون تومانی (با فرانشیز ۱۰ میلیون) دو هفته بعد به صاحب نیروگاه پرداخت شد. نیروگاه یک هفته بعد از تعمیرات دوباره به کار افتاد. در طول این یک هفته، درآمد از دست‌رفته ۴ میلیون تومان بود که با پوشش اختلال تولید جبران شد."
      },
      {
        h2: "گام‌های عملی بیمه نیروگاه",
        p: "اگر قصد بیمه نیروگاه خورشیدی خود را دارید، مسیر به این شکل است. اول، ارزیابی ارزش تجهیزات و شناسایی ریسک‌های اصلی. دوم، مشاوره با پارسا انرژی برای انتخاب پوشش‌های مناسب. سوم، دریافت پیشنهاد قیمت از چند شرکت بیمه. چهارم، مقایسه پوشش‌ها، قیمت و سابقه شرکت‌ها. پنجم، مذاکره برای شرایط بهتر (به‌ویژه فرانشیز و سقف پوشش). ششم، امضای قرارداد و پرداخت حق بیمه. هفتم، مستندسازی کامل نیروگاه (عکس، ویدیو، فاکتورها، گواهی گارانتی) که در صورت خسارت ضروری است. هشتم، بازنگری سالانه پوشش با توجه به تورم. مشاوره اولیه با پارسا انرژی رایگان است و شامل ارزیابی ریسک و پیشنهاد پوشش بهینه می‌شود."
      }
    ],
    en: [
      {
        h2: "Why Is Solar Plant Insurance Essential?",
        p: "A solar plant is a large investment exposed outdoors to multiple risks. A 10 kW plant costs 700 million toman; a 100 kW plant costs several billion. This capital faces risks rare in other investments: fire from cable short or inverter spark; theft of panels and cables common in remote areas; storm, hail, flood, or lightning damage; animal damage (rodents chewing cables); business interruption from prolonged failures cutting income; liability for damage to people or neighboring property. Without insurance, one incident can wipe out your entire investment."
      },
      {
        h2: "Types of Solar Insurance Coverage",
        p: "Specialized solar insurance includes six main coverages. First, fire and lightning — covers fire, explosion, and lightning damage. Second, theft with breaking — covers panel, cable, and equipment theft (typically requiring guards or cameras). Third, physical damage from natural events (storm, hail, flood, earthquake) — crucial in Iran. Fourth, equipment breakdown — covers inverter, panel, and electrical system failure. Fifth, business interruption — compensates lost income during repairs. Sixth, liability — covers damage to third parties or neighboring property."
      },
      {
        h2: "Active Insurance Companies in Solar",
        p: "Several Iranian insurers offer specialized solar coverage. Day Insurance, in cooperation with SATBA, offers standard coverage for grid-tied plants covering most of the above. Asia Insurance, with industrial insurance experience, offers significant coverage for large plants. Dana Insurance and Pasargad Insurance are also active. The Central Insurance of Iran has issued specific solar insurance guidelines in recent years, making the Iranian market more transparent and reliable. Parsa Energy collaborates with multiple insurers and can secure the best coverage at competitive prices."
      },
      {
        h2: "Insurance Cost — How Much and How Calculated?",
        p: "Solar plant insurance typically costs 0.3–0.8% of equipment value annually. For a 10 kW plant worth 700 million toman: 2.1–5.6 million toman/year. For a 100 kW plant worth 5 billion toman: 15–40 million toman/year. Factors include: location (high-risk areas like Khuzestan with high temperatures cost more), installation type (rooftop cheaper than ground-mount), guards and cameras (10–20% discount), insured's history, and additional coverages (like business interruption). To reduce cost, higher deductibles can be considered — with 5% deductible, premium drops 15–20%."
      },
      {
        h2: "Claims Process",
        p: "In case of incident, claims must be filed quickly and precisely. First, notify the insurer within 24 hours (dedicated phone line or app). Second, take detailed photos and videos before any changes. Third, police report for theft or third-party incident. Fourth, technical expert report (Parsa Energy can prepare) covering cause, extent, and repair cost estimate. Fifth, submit documents and arrange insurer expert visit. Sixth, after approval, repairs by licensed contractor with invoices submitted. Seventh, receive payment. The process typically takes 2–8 weeks. The key success factor is fast, accurate documentation."
      },
      {
        h2: "Important Insurance Contract Points",
        p: "When signing a solar insurance contract, several points must be checked. First, precise coverage definitions and exclusions — some insurers don't cover wear or design defects. Second, per-incident and annual limits matching equipment value. Third, deductible and calculation method. Fourth, contract voiding conditions (e.g., non-compliance with technical standards or no guards). Fifth, contract term and renewal conditions. Sixth, inflation-linked limit increases (good insurers update annually with inflation index). Seventh, business interruption coverage and lost income calculation. Parsa Energy helps review and negotiate insurance contracts for best terms."
      },
      {
        h2: "Case Study — A Real Claim",
        p: "Let's review a real example. A 20 kW plant in Mashhad outskirts was damaged in a spring 1404 storm. 8 panels detached from mounting and an 8 kW inverter damaged. Damage value: 120 million toman. Owner had Day Insurance and reported within 24 hours. Full photos and videos taken. Parsa Energy technical expert prepared detailed report with cause (90 km/h wind) and cost estimate. Insurer expert visited after 5 days. After approval, repairs by Parsa team with invoice submitted. 110 million toman payment (with 10 million deductible) made two weeks later. Plant resumed operation one week after repairs. During that week, 4 million toman income was lost — covered by business interruption."
      },
      {
        h2: "Practical Insurance Steps",
        p: "If insuring your solar plant, the path is: First, assess equipment value and identify main risks. Second, consult Parsa Energy for appropriate coverage selection. Third, get quotes from multiple insurers. Fourth, compare coverage, price, and company track record. Fifth, negotiate better terms (especially deductible and limits). Sixth, sign contract and pay premium. Seventh, document the plant completely (photos, videos, invoices, warranty certificates) — essential for claims. Eighth, annually review coverage with inflation. Initial Parsa Energy consultation is free, including risk assessment and optimal coverage recommendations."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه بیمه نیروگاه خورشیدی چقدر است؟", en: "How much does solar plant insurance cost?" },
      a: { fa: "معمولاً ۰/۳ تا ۰/۸ درصد از ارزش تجهیزات در سال. برای نیروگاه ۱۰ کیلوواتی با ارزش ۷۰۰ میلیون تومان، حدود ۲ تا ۶ میلیون تومان در سال.", en: "Typically 0.3–0.8% of equipment value annually. For a 10 kW plant worth 700 million toman, about 2–6 million toman/year." }
    },
    {
      q: { fa: "آیا بیمه خورشیدی الزامی است؟", en: "Is solar insurance mandatory?" },
      a: { fa: "از نظر قانونی الزامی نیست، اما برای دریافت وام بانکی معمولاً بیمه شرط است. همچنین با توجه به ارزش بالای تجهیزات، بیمه به شدت توصیه می‌شود.", en: "Not legally mandatory, but typically required for bank loans. Given high equipment value, insurance is strongly recommended." }
    },
    {
      q: { fa: "خسارت سرقت پنل پوشش داده می‌شود؟", en: "Is panel theft covered?" },
      a: { fa: "بله، در صورت وجود پوشش سرقت با شکستن و داشتن حراست یا دوربین. باید در ۲۴ ساعت اعلام شود و گزارش پلیس تهیه گردد.", en: "Yes, with theft-with-breaking coverage and presence of guards or cameras. Must be reported within 24 hours with police report." }
    }
  ]
},

// ============================================================================
// مقاله ۹: ممیزی انرژی و ISO 50001 - دسته: news
// ============================================================================
{
  slug: "momiazi-energy-iso-50001",
  title: {
    fa: "ممیزی انرژی و گواهینامه ISO 50001: راهنمای کامل برای صنایع صادراتی ایران",
    en: "Energy Audit and ISO 50001 Certification: Complete Guide for Iranian Export Industries"
  },
  category: "news",
  categoryLabel: { fa: "اخبار و قوانین", en: "News" },
  excerpt: {
    fa: "صنایع صادراتی ایران برای ورود به بازارهای اروپایی و بین‌المللی به گواهینامه ISO 50001 نیاز دارند. ممیزی انرژی اولین گام است و می‌تواند ۱۰ تا ۲۰ درصد مصرف انرژی را کاهش دهد.",
    en: "Iranian export industries need ISO 50001 certification to enter European and international markets. Energy auditing is the first step and can cut energy use 10–20%."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "ممیزی انرژی چیست و چرا مهم است؟",
        p: "ممیزی انرژی یک بررسی سیستماتیک از مصرف انرژی در یک سازمان است که هدف آن شناسایی فرصت‌های صرفه‌جویی و ارائه راهکار عملی است. در ممیزی، تمام منابع مصرف انرژی (برق، گاز، گازوئیل، بخار، آب و فشرده هوا) به طور دقیق اندازه‌گیری و تحلیل می‌شوند. سپس گلوگاه‌های مصرف، هدررفت‌ها و فرصت‌های بهبود شناسایی می‌شوند. در نهایت، گزارشی با اولویت‌بندی اقتصادی ارائه می‌شود که نشان می‌دهد کدام اقدام با چه هزینه‌ای و چه بازگشت سرمایه‌ای قابل اجراست. در صنایع ایران، ممیزی انرژی معمولاً ۱۰ تا ۲۰ درصد کاهش مصرف انرژی را بدون نیاز به سرمایه‌گذاری بزرگ نشان می‌دهد؛ صرفاً با تغییر روش بهره‌برداری، تنظیم تجهیزات و رفع نشتی‌ها."
      },
      {
        h2: "ISO 50001 چیست و چه تفاوتی با ممیزی دارد؟",
        p: "ISO 50001 یک استاندارد بین‌المللی برای سیستم مدیریت انرژی (EnMS) است که توسط سازمان بین‌المللی استاندارد در سال ۲۰۱۱ منتشر و در سال ۲۰۱۸ بازنگری شد. این استاندارد چارچوبی برای سازمان‌ها فراهم می‌کند تا مصرف انرژی خود را به طور پیوسته بهبود دهند. تفاوت اصلی با ممیزی این است که ممیزی یک عکس لحظه‌ای است (وضعیت فعلی را نشان می‌دهد)، اما ISO 50001 یک سیستم مدیریتی پایدار است که شامل سیاست انرژی، اهداف quantifiable، برنامه اجرایی، پایش، ممیزی دوره‌ای و بهبود مستمر است. در عمل، ممیزی اولین گام برای پیاده‌سازی ISO 50001 است. پس از ممیزی، سیستم مدیریت انرژی طراحی و پیاده می‌شود و سپس توسط شرکت بازرسی معتبر (مثل TUV، SGS یا DNV) گواهینامه صادر می‌شود."
      },
      {
        h2: "چرا ISO 50001 برای صنایع صادراتی ضروری است؟",
        p: "در سال‌های اخیر، خریداران اروپایی و بین‌المللی الزامات سختگیرانه‌ای برای محصولات وارداتی وضع کرده‌اند. یکی از این الزامات، گواهینامه ISO 50001 است که نشان می‌دهد تولیدکننده مصرف انرژی خود را مدیریت می‌کند و اثرات زیست‌محیطی controlled دارد. برای صادرات فرش ایرانی به آلمان، پسته به اتحادیه اروپا، خرما به ژاپن و محصولات پتروشیمی به چین، داشتن ISO 50001 به یک مزیت رقابتی یا حتی شرط لازم تبدیل شده است. علاوه بر این، شرکت‌های چندملیتی که در ایران فعالیت می‌کنند (مثل خودروسازان و داروسازان) از تأمینکان داخلی می‌خواهند این گواهینامه را داشته باشند. در نتیجه، صنایع صادراتی ایران بدون ISO 50001 به تدریج از بازارهای سودآور خارج می‌شوند."
      },
      {
        h2: "مراحل پیاده‌سازی ISO 50001",
        p: "پیاده‌سازی ISO 50001 شامل شش مرحله اصلی است. اول، مرور اولیه و آنالیز شکاف (Gap Analysis) که وضعیت فعلی سازمان را با الزامات استاندارد مقایسه می‌کند. دوم، طراحی سیاست انرژی و اهداف قابل اندازه‌گیری (مثلاً کاهش ۱۰ درصدی مصرف برق در دو سال). سوم، انجام ممیزی انرژی پایه (Baseline Energy Audit) برای تعیین نقطه شروع. چهارم، طراحی و پیاده‌سازی سیستم مدیریت انرژی شامل رویه‌ها، شاخص‌های عملکرد (EnPIs) و سیستم پایش. پنجم، آموزش پرسنل و اجرای pilots. ششم، ممیزی داخلی و سپس ممیزی خارجی توسط شرکت بازرسی معتبر. اگر تمام الزامات برآورده شود، گواهینامه سه‌ساله صادر می‌شود که هر سال نیاز به ممیزی سرپرستی (Surveillance Audit) دارد."
      },
      {
        h2: "هزینه و مدت زمان پیاده‌سازی",
        p: "هزینه پیاده‌سازی ISO 50001 بسته به اندازه سازمان و پیچیدگی فرایندها متفاوت است. برای یک کارخانه متوسط (۵۰ تا ۲۰۰ پرسنل)، هزینه معمولاً بین ۳۰۰ تا ۸۰۰ میلیون تومان است که شامل مشاوره، ممیزی، آموزش و گواهینامه می‌شود. مدت زمان پیاده‌سازی بسته به آمادگی سازمان، معمولاً ۶ تا ۱۸ ماه است. این رقم شاید در نگاه اول زیاد به نظر برسد، اما باید در نظر گرفت که صرفه‌جویی ناشی از پیاده‌سازی (۱۰ تا ۲۰ درصد کاهش مصرف انرژی) معمولاً هزینه پیاده‌سازی را در کمتر از دو سال جبران می‌کند. برای یک کارخانه با قبض ماهانه ۵۰۰ میلیون تومان، صرفه‌جویی ۱۵ درصدی یعنی ۷۵ میلیون تومان در ماه و ۹۰۰ میلیون تومان در سال؛ یعنی بازگشت سرمایه زیر یک سال."
      },
      {
        h2: "مزایای اقتصادی فراتر از صرفه‌جویی مستقیم",
        p: "علاوه بر کاهش مستقیم مصرف انرژی، ISO 50001 مزایای اقتصادی متعدد دیگری دارد. اول، دسترسی به بازارهای صادراتی جدید که قبلاً بسته بودند. دوم، افزایش قیمت فروش محصول به دلیل کیفیت و اعتبار بالاتر. سوم، کاهش هزینه‌های نگهداری تجهیزات به دلیل بهره‌برداری بهینه. چهارم، کاهش جریمه‌های زیست‌محیطی و توانیر. پنجم، افزایش بهره‌وری پرسنل به دلیل فرهنگ مدیریت انرژی. ششم، دسترسی به تسهیلات کم‌بهره بانکی برای پروژه‌های بهره‌وری انرژی (بانک صنعت و معدن خط اعتباری خاص برای شرکت‌های دارای ISO 50001 دارد). هفتم، بهبود تصویر سازمانی و رضایت ذینفعان. در مجموع، ROI واقعی ISO 50001 با احتساب این مزایا، به ۲۰۰ تا ۳۰۰ درصد در سه سال می‌رسد."
      },
      {
        h2: "انتخاب مشاور و شرکت بازرسی",
        p: "انتخاب مشاور مناسب و شرکت بازرسی معتبر، کلید موفقیت ISO 50001 است. در ایران، چند شرکت مشاوره تخصصی در حوزه مدیریت انرژی فعال هستند که می‌توانند در طراحی و پیاده‌سازی سیستم کمک کنند. در انتخاب مشاور، به این نکات توجه کنید: سابقه پروژه‌های موفق، آشنایی با صنعت شما، تیم متخصص (نه فقط یک نفر)، ارائه پکیج کامل (نه فقط مشاوره کاغذی) و قیمت رقابتی. در انتخاب شرکت بازرسی، حتماً شرکت‌های معتبر بین‌المللی مثل TUV NORD، SGS، DNV GL، Bureau Veritas یا شرکای ایرانی آن‌ها را انتخاب کنید. گواهینامه این شرکت‌ها در سراسر جهان به رسمیت شناخته می‌شود. تیم پارسا انرژی با همکاری مشاوران رسمی و شرکت‌های بازرسی معتبر، پکیج کامل ISO 50001 را ارائه می‌دهد."
      },
      {
        h2: "گام‌های عملی شروع",
        p: "اگر به پیاده‌سازی ISO 50001 فکر می‌کنید، مسیر به این شکل است. اول، ارزیابی اولیه آمادگی سازمان (به‌ویژه تعهد مدیریت). دوم، مشاوره با پارسا انرژی برای طراحی نقشه راه و برآورد هزینه و زمان. سوم، عقد قرارداد مشاوره و شروع کار. چهارم، تشکیل تیم پروژه در سازمان شما و آموزش اولیه. پنجم، انجام آنالیز شکاف و ممیزی پایه. ششم، طراحی سیستم مدیریت انرژی. هفتم، پیاده‌سازی و پایش. هشتم، ممیزی داخلی و اصلاحات. نهم، ممیزی خارجی و دریافت گواهینامه. کل فرایند معمولاً ۶ تا ۱۸ ماه طول می‌کشد. مشاوره اولیه ۳۰ دقیقه‌ای رایگان است و شامل ارزیابی آمادگی سازمان و برآورد هزینه می‌شود."
      }
    ],
    en: [
      {
        h2: "What Is an Energy Audit and Why Is It Important?",
        p: "An energy audit is a systematic review of energy use in an organization to identify savings opportunities and provide practical recommendations. All energy sources (electricity, gas, diesel, steam, water, compressed air) are precisely measured and analyzed. Bottlenecks, losses, and improvement opportunities are identified. Finally, an economically prioritized report shows which action can be implemented at what cost and payback. In Iranian industries, audits typically identify 10–20% energy savings without major capital investment — through operational changes, equipment tuning, and leak repair."
      },
      {
        h2: "What Is ISO 50001 and How Does It Differ from Auditing?",
        p: "ISO 50001 is an international standard for Energy Management Systems (EnMS) published by ISO in 2011 and revised in 2018. It provides a framework for continuous energy improvement. The key difference: an audit is a snapshot (current state), while ISO 50001 is a sustained management system including energy policy, quantifiable objectives, implementation plans, monitoring, periodic audits, and continuous improvement. In practice, auditing is the first step toward ISO 50001. After auditing, the energy management system is designed and implemented, then certified by an accredited body (TUV, SGS, DNV)."
      },
      {
        h2: "Why Is ISO 50001 Essential for Export Industries?",
        p: "Recently, European and international buyers have imposed strict requirements on imported products. One requirement is ISO 50001 certification showing the producer manages energy use and controls environmental impact. For Iranian carpet exports to Germany, pistachios to the EU, dates to Japan, and petrochemicals to China, ISO 50001 has become a competitive advantage or even a prerequisite. Additionally, multinationals operating in Iran (automakers, pharmaceuticals) require suppliers to hold this certification. Without ISO 50001, Iranian export industries gradually lose access to profitable markets."
      },
      {
        h2: "ISO 50001 Implementation Steps",
        p: "Six main steps. First, preliminary review and gap analysis comparing current state with standard requirements. Second, design energy policy and measurable objectives (e.g., 10% electricity reduction in 2 years). Third, baseline energy audit to establish starting point. Fourth, design and implement EnMS including procedures, Energy Performance Indicators (EnPIs), and monitoring. Fifth, staff training and pilot implementation. Sixth, internal audit followed by external audit by accredited body. If all requirements are met, a 3-year certificate is issued, with annual surveillance audits required."
      },
      {
        h2: "Cost and Timeline",
        p: "Implementation costs vary by organization size and process complexity. For a medium factory (50–200 employees), typically 300–800 million toman including consulting, auditing, training, and certification. Timeline is 6–18 months depending on organizational readiness. While seemingly high, savings from implementation (10–20% energy reduction) typically recoup costs in under two years. For a factory with 500 million toman monthly bill, 15% savings mean 75 million toman/month and 900 million toman/year — payback under one year."
      },
      {
        h2: "Economic Benefits Beyond Direct Savings",
        p: "Beyond direct energy reduction, ISO 50001 delivers multiple economic benefits. First, access to new export markets previously closed. Second, higher product prices due to better quality and credibility. Third, lower maintenance costs from optimal operation. Fourth, reduced environmental and Tavanir fines. Fifth, higher staff productivity from energy management culture. Sixth, access to low-interest bank facilities for energy efficiency projects (Bank of Industry and Mine has specific credit lines for ISO 50001 holders). Seventh, improved corporate image and stakeholder satisfaction. Total ROI reaches 200–300% over three years."
      },
      {
        h2: "Choosing Consultant and Inspection Body",
        p: "Choosing the right consultant and accredited inspection body is key to ISO 50001 success. In Iran, several specialized energy management consulting firms can help design and implement. When selecting a consultant, consider: track record of successful projects, familiarity with your industry, expert team (not one person), complete package (not just paper consulting), and competitive pricing. For inspection, choose reputable international firms like TUV NORD, SGS, DNV GL, Bureau Veritas, or their Iranian partners — their certificates are globally recognized. Parsa Energy, with official consultants and accredited inspection bodies, offers a complete ISO 50001 package."
      },
      {
        h2: "Practical Steps to Start",
        p: "If considering ISO 50001, the path is: First, initial organizational readiness assessment (especially management commitment). Second, consult Parsa Energy for roadmap design and cost/timeline estimation. Third, sign consulting contract and start work. Fourth, form project team in your organization and provide initial training. Fifth, conduct gap analysis and baseline audit. Sixth, design EnMS. Seventh, implement and monitor. Eighth, internal audit and corrections. Ninth, external audit and certification. Total process typically takes 6–18 months. Initial 30-minute consultation is free, including readiness assessment and cost estimate."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه پیاده‌سازی ISO 50001 چقدر است؟", en: "How much does ISO 50001 implementation cost?" },
      a: { fa: "برای کارخانه متوسط (۵۰ تا ۲۰۰ پرسنل)، حدود ۳۰۰ تا ۸۰۰ میلیون تومان شامل مشاوره، ممیزی، آموزش و گواهینامه. بازگشت سرمایه معمولاً زیر دو سال است.", en: "For a medium factory (50–200 employees), about 300–800 million toman including consulting, auditing, training, and certification. Payback is typically under two years." }
    },
    {
      q: { fa: "مدت زمان پیاده‌سازی چقدر است؟", en: "How long does implementation take?" },
      a: { fa: "بسته به آمادگی سازمان، معمولاً ۶ تا ۱۸ ماه. سازمان‌هایی که سیستم‌های مدیریتی مانند ISO 9001 دارند، سریع‌تر می‌توانند ISO 50001 را پیاده کنند.", en: "Depending on organizational readiness, typically 6–18 months. Organizations with existing systems like ISO 9001 can implement ISO 50001 faster." }
    },
    {
      q: { fa: "آیا ISO 50001 برای صادرات الزامی است؟", en: "Is ISO 50001 mandatory for exports?" },
      a: { fa: "از نظر قانونی الزامی نیست، اما خریداران اروپایی و ژاپنی اکثراً آن را به عنوان شرط خرید می‌گذارند. بدون این گواهینامه، دسترسی به بازارهای سودآور دشوار می‌شود.", en: "Not legally mandatory, but European and Japanese buyers typically require it as a purchase condition. Without this certification, access to profitable markets becomes difficult." }
    }
  ]
},

// ============================================================================
// مقاله ۱۰: سیستم مدیریت انرژی هوشمند EMS با IoT - دسته: news
// ============================================================================
{
  slug: "energy-management-system-iot",
  title: {
    fa: "سیستم مدیریت انرژی هوشمند (EMS) با IoT: کنترل مصرف از موبایل با هوش مصنوعی",
    en: "Smart Energy Management System (EMS) with IoT: Mobile-Controlled AI-Powered Consumption"
  },
  category: "news",
  categoryLabel: { fa: "اخبار و قوانین", en: "News" },
  excerpt: {
    fa: "سیستم مدیریت انرژی هوشمند با IoT و هوش مصنوعی، مصرف برق، گاز و آب را به طور لحظه‌ای پایش می‌کند و با تشخیص الگوها، ۱۰ تا ۲۵ درصد صرفه‌جویی ایجاد می‌کند. یک داشبورد در موبایل، کل سازمان را کنترل می‌کند.",
    en: "A smart Energy Management System with IoT and AI monitors electricity, gas, and water use in real-time and identifies patterns for 10–25% savings. A mobile dashboard controls the entire organization."
  },
  readTime: { fa: "۸ دقیقه", en: "8 min" },
  date: "1405-04-22",
  body: {
    fa: [
      {
        h2: "سیستم مدیریت انرژی (EMS) چیست؟",
        p: "سیستم مدیریت انرژی (Energy Management System یا EMS) یک پلتفرم نرم‌افزاری-سخت‌افزاری است که با استفاده از سنسورها، کنترلرها و اینترنت اشیا (IoT)، مصرف انرژی را در یک سازمان به طور لحظه‌ای پایش، تحلیل و بهینه می‌کند. در یک سازمان متوسط، EMS شامل چند ده سنسور (برای اندازه‌گیری مصرف هر بخش)، یک یا چند gateway برای جمع‌آوری داده، یک سرور ابری برای پردازش و یک داشبورد برای نمایش به مدیر است. این سیستم به جای اتکا به قبض ماهانه (که فقط مجموع مصرف را نشان می‌دهد و یک ماه بعد)، اطلاعات لحظه‌ای را ارائه می‌دهد: کدام بخش در چه ساعتی چقدر مصرف کرده، کجا هدررفت وجود دارد، کدام دستگاه ناکارآمد است. در نتیجه، مدیر می‌تواند به سرعت تصمیم بگیرد و اقدام کند."
      },
      {
        h2: "چرا EMS در ایران ضروری است؟",
        p: "سه عامل اصلی باعث شده EMS به یک ضرورت برای صنایع و ساختمان‌های بزرگ ایران تبدیل شود. اول، تعرفه پلکانی برق و گاز که باعث شده هر درصد هدررفت، هزینه قابل توجهی ایجاد کند. در یک کارخانه با قبض ماهانه ۵۰۰ میلیون تومان، ۱۰ درصد هدررفت یعنی ۵۰ میلیون تومان در ماه و ۶۰۰ میلیون تومان در سال. دوم، قطعی‌های مکرر برق که باعث می‌شود بدون پایش لحظه‌ای، تشخیص علت و محل قطعی دشوار باشد. سوم، الزامات قانونی جدید سازمان حفاظت محیط زیست و وزارت نیرو برای گزارش‌دهی مصرف انرژی در صنایع بزرگ. در این شرایط، EMS نه تنها یک ابزار صرفه‌جویی، بلکه یک ابزار مدیریت ریسک و انطباق قانونی است."
      },
      {
        h2: "اجزای اصلی یک سیستم EMS",
        p: "یک سیستم EMS مدرن شامل پنج جزء اصلی است. اول، سنسورها و کنترلرها (Smart Meters, Power Quality Analyzers, Flow Meters) که در نقاط مختلف سازمان نصب می‌شوند و مصرف را ثانیه‌به‌ثانیه اندازه‌گیری می‌کنند. دوم، شبکه ارتباطی (IoT Gateway) که داده‌ها را از سنسورها جمع‌آوری و به سرور می‌فرستد؛ معمولاً از Wi-Fi، LoRaWAN یا 4G استفاده می‌شود. سوم، پلتفرم ابری (Cloud Platform) که داده‌ها را ذخیره، پردازش و تحلیل می‌کند. چهارم، موتور تحلیلی (Analytics Engine) که با الگوریتم‌های هوش مصنوعی، الگوهای مصرف را تشخیص می‌دهد و ناهنجاری‌ها را شناسایی می‌کند. پنجم، داشبورد و اپلیکیشن موبایل که به مدیر امکان مشاهده، هشدار و کنترل از راه دور را می‌دهد."
      },
      {
        h2: "کاربردهای EMS در صنایع مختلف",
        p: "EMS در چهار حوزه اصلی کاربرد دارد. اول، صنایع تولیدی که در آن مصرف هر خط تولید، هر دستگاه و هر شیفت باید پایش شود تا گلوگاه‌ها شناسایی شوند. مثلاً یک کارخانه نساجی می‌تواند مصرف هر دستگاه را با تولید هر دستگاه مقایسه کند و دستگاه‌های ناکارآمد را پیدا کند. دوم، ساختمان‌های تجاری و اداری که در آن مصرف روشنایی، تهویه، آسانسور و تجهیزات IT باید به طور جداگانه پایش شود. سوم، هتل‌ها و بیمارستان‌ها که مصرف هر اتاق یا بخش باید کنترل شود. چهارم، مجتمع‌های مسکونی که در آن مصرف مشترک (پمپ آب، آسانسور، روشنایی راه‌پله) باید بین واحدها تقسیم شود. در هر کاربرد، EMS می‌تواند ۱۰ تا ۲۵ درصد صرفه‌جویی ایجاد کند."
      },
      {
        h2: "هوش مصنوعی در EMS: فراتر از پایش",
        p: "نسل جدید سیستم‌های EMS با استفاده از یادگیری ماشین (Machine Learning) فراتر از پایش ساده عمل می‌کنند. اول، تشخیص ناهنجاری (Anomaly Detection) که یاد می‌گیرد مصرف نرمال در هر ساعت چقدر است و در صورت انحراف، هشدار می‌دهد؛ مثلاً اگر یک موتور در ساعت ۳ صبح که باید خاموش باشد، مصرف دارد، سیستم هشدار می‌دهد. دوم، پیش‌بینی مصرف (Load Forecasting) که با توجه به تاریخچه، فصل، روز هفته و آب‌وهوا، مصرف آینده را پیش‌بینی می‌کند و به مدیر امکان برنامه‌ریزی می‌دهد. سوم، بهینه‌سازی خودکار (Auto-Optimization) که با کنترل تجهیزات (مثل VFD، ترموستات، روشنایی)، مصرف را به طور خودکار بهینه می‌کند. چهارم، تشخیص فرصت‌های صرفه‌جویی (Savings Discovery) که با تحلیل داده، فرصت‌هایی را که مدیر از قلم انداخته، پیشنهاد می‌کند."
      },
      {
        h2: "توجیه اقتصادی: محاسبه واقعی",
        p: "بیایید یک مثال واقعی محاسبه کنیم. یک کارخانه ۲۰۰ پرسنلی با قبض ماهانه ۸۰۰ میلیون تومان (برق و گاز) تصمیم به نصب EMS می‌گیرد. هزینه نصب شامل ۴۰ سنسور، ۲ gateway، پلتفرم ابری و داشبورد حدود ۱۵۰ تا ۲۵۰ میلیون تومان است. حق اشتراک ماهانه پلتفرم ابری ۳ تا ۵ میلیون تومان است. با نصب EMS، صرفه‌جویی متوسط ۱۲ تا ۱۸ درصد اتفاق می‌افتد؛ یعنی ۹۶ تا ۱۴۴ میلیون تومان در ماه. با احتساب حق اشتراک، صرفه‌جویی خالص ماهانه ۹۰ تا ۱۳۸ میلیون تومان است. یعنی بازگشت سرمایه ۱/۵ تا ۲/۵ ماه! در طول ۵ سال (عمر معمول سیستم)، این یعنی صرفه‌جویی کلان ۵ تا ۸ میلیارد تومان. در شرایط تورم ۴۰ درصدی، این یکی از بهترین سرمایه‌گذاری‌های انرژی است."
      },
      {
        h2: "انتخاب پلتفرم EMS مناسب",
        p: "هنگام انتخاب پلتفرم EMS، چند نکته مهم باید بررسی شود. اول، پشتیبانی از پروتکل‌های مختلف (Modbus، BACnet، OPC UA، MQTT) که امکان اتصال به تجهیزات مختلف را فراهم می‌کند. دوم، داشبورد کاربرپسند با امکان定制 برای نقش‌های مختلف (مدیر، اپراتور، تکنسین). سوم، قابلیت اتصال به سیستم‌های موجود (BMS، ERP، SCADA) برای جلوگیری از data silo. چهارم، امنیت سایبری (با توجه به حملات اخیر به زیرساخت‌های ایران، این نکته حیاتی است). پنجم، پشتیبانی فارسی و حضور فیزیکی در ایران. ششم، قیمت رقابتی و مدل اشتراک شفاف. تیم پارسا انرژی پلتفرم EMS اختصاصی با تمام این ویژگی‌ها را برای صنایع و ساختمان‌های ایران ارائه می‌دهد."
      },
      {
        h2: "نمونه موردی: یک کارخانه موفق",
        p: "بیایید یک نمونه واقعی را مرور کنیم. یک کارخانه قطعه‌سازی در مشهد با قبض ماهانه ۶۰۰ میلیون تومان، EMS نصب کرد. پس از یک ماه پایش، چند ناهنجاری کشف شد: یک کوره در ساعت ۲ تا ۵ صبح که تولیدی نداشت، روشن بود (مصرف ۳۰ کیلووات = ۱۰ میلیون تومان در ماه). دو پمپ آب همیشه روشن بودند حتی وقتی نیاز نبود (مصرف ۱۵ کیلووات = ۵ میلیون تومان در ماه). کمپرسور هوای فشرده با فشار بالاتر از نیاز کار می‌کرد (هدررفت ۲۰ کیلووات = ۷ میلیون تومان در ماه). با رفع این سه مورد، ۲۲ میلیون تومان در ماه صرفه‌جویی شد. پس از سه ماه، تحلیل هوش مصنوعی پیشنهاد داد که با نصب VFD روی دو فن اصلی، ۴۰ میلیون تومان اضافه صرفه‌جویی امکان‌پذیر است. این کار انجام شد و کل صرفه‌جویی ماهانه به ۶۲ میلیون تومان رسید. هزینه EMS ۱۸۰ میلیون تومان بود؛ یعنی بازگشت سرمایه زیر سه ماه."
      },
      {
        h2: "گام‌های اجرایی نصب EMS",
        p: "اگر به نصب EMS فکر می‌کنید، مسیر به این شکل است. اول، ارزیابی اولیه سازمان و شناسایی نقاط مصرف اصلی. دوم، مشاوره با پارسا انرژی برای طراحی سیستم و انتخاب پلتفرم. سوم، نصب سنسورها و gateway (معمولاً ۱ تا ۳ هفته). چهارم، پیکربندی پلتفرم و داشبورد. پنجم، آموزش کاربران و راه‌اندازی. ششم، دوره بهینه‌سازی اولیه (۳ تا ۶ ماه) که در آن فرصت‌های صرفه‌جویی شناسایی و اجرا می‌شوند. هفتم، پایش مستمر و گزارش‌دهی ماهانه. مشاوره اولیه و ارزیابی سایت رایگان است. تیم پارسا انرژی با تجربه نصب EMS در صنایع مختلف، یک پکیج کامل شامل سخت‌افزار، نرم‌افزار، نصب و پشتیبانی ارائه می‌دهد."
      }
    ],
    en: [
      {
        h2: "What Is an Energy Management System (EMS)?",
        p: "An Energy Management System (EMS) is a software-hardware platform that uses sensors, controllers, and IoT to monitor, analyze, and optimize energy use in real-time. In a medium organization, EMS includes dozens of sensors (measuring each department's use), one or more gateways for data collection, a cloud server for processing, and a dashboard for managers. Instead of relying on monthly bills (showing only total consumption a month later), EMS provides real-time information: which department used what in which hour, where losses occur, which equipment is inefficient. Managers can decide and act quickly."
      },
      {
        h2: "Why Is EMS Essential in Iran?",
        p: "Three main factors make EMS essential for Iranian industries and large buildings. First, tiered electricity and gas tariffs make every percent of loss costly. For a factory with 500 million toman monthly bill, 10% loss means 50 million toman/month and 600 million toman/year. Second, frequent blackouts make cause and location identification difficult without real-time monitoring. Third, new regulatory requirements from the Department of Environment and Ministry of Energy for energy reporting in large industries. In this context, EMS is not just a savings tool but a risk management and compliance tool."
      },
      {
        h2: "Main EMS Components",
        p: "A modern EMS has five main components. First, sensors and controllers (Smart Meters, Power Quality Analyzers, Flow Meters) installed throughout the organization measuring consumption second-by-second. Second, communication network (IoT Gateway) collecting data from sensors and sending to server — typically Wi-Fi, LoRaWAN, or 4G. Third, cloud platform storing, processing, and analyzing data. Fourth, analytics engine using AI algorithms to identify consumption patterns and anomalies. Fifth, dashboard and mobile app enabling managers to monitor, alert, and control remotely."
      },
      {
        h2: "EMS Applications Across Industries",
        p: "EMS serves four main areas. First, manufacturing industries where each production line, machine, and shift must be monitored to identify bottlenecks. For example, a textile factory can compare each machine's consumption to its output and find inefficient ones. Second, commercial and office buildings where lighting, HVAC, elevator, and IT equipment must be separately monitored. Third, hotels and hospitals where each room or department must be controlled. Fourth, residential complexes where shared consumption (water pump, elevator, stairwell lighting) must be distributed among units. In each application, EMS can deliver 10–25% savings."
      },
      {
        h2: "AI in EMS — Beyond Monitoring",
        p: "Next-generation EMS using Machine Learning goes beyond simple monitoring. First, anomaly detection learns normal consumption per hour and alerts on deviation — if a motor consumes at 3 AM when it should be off, the system alerts. Second, load forecasting predicts future consumption based on history, season, day of week, and weather — enabling planning. Third, auto-optimization controls equipment (VFDs, thermostats, lighting) automatically. Fourth, savings discovery analyzes data to suggest opportunities managers overlooked."
      },
      {
        h2: "Economic Justification — Real Calculation",
        p: "Let's calculate a real example. A 200-employee factory with 800 million toman monthly bill (electricity and gas) decides to install EMS. Installation including 40 sensors, 2 gateways, cloud platform, and dashboard costs 150–250 million toman. Monthly cloud subscription: 3–5 million toman. Average savings 12–18% — 96–144 million toman/month. Net monthly savings after subscription: 90–138 million toman. Payback: 1.5–2.5 months! Over 5 years (typical system life), that's 5–8 billion toman in savings. At 40% inflation, this is one of the best energy investments."
      },
      {
        h2: "Choosing the Right EMS Platform",
        p: "When selecting an EMS platform, several points matter. First, support for multiple protocols (Modbus, BACnet, OPC UA, MQTT) enabling connection to various equipment. Second, user-friendly dashboard with customization for different roles (manager, operator, technician). Third, integration with existing systems (BMS, ERP, SCADA) to prevent data silos. Fourth, cybersecurity (critical given recent attacks on Iranian infrastructure). Fifth, Persian support and physical presence in Iran. Sixth, competitive pricing and transparent subscription model. Parsa Energy offers a dedicated EMS platform with all these features for Iranian industries and buildings."
      },
      {
        h2: "Case Study — A Successful Factory",
        p: "Let's review a real example. A Mashhad parts factory with 600 million toman monthly bill installed EMS. After one month, several anomalies surfaced: a furnace running 2–5 AM with no production (30 kW = 10 million toman/month); two water pumps always on (15 kW = 5 million toman/month); air compressor running higher pressure than needed (20 kW waste = 7 million toman/month). Fixing these three saved 22 million toman/month. After three months, AI analysis suggested VFD installation on two main fans for 40 million toman additional savings. Implementation raised total monthly savings to 62 million toman. EMS cost 180 million toman — payback under three months."
      },
      {
        h2: "Practical EMS Installation Steps",
        p: "If considering EMS, the path is: First, initial organizational assessment and identification of main consumption points. Second, consult Parsa Energy for system design and platform selection. Third, install sensors and gateways (typically 1–3 weeks). Fourth, configure platform and dashboard. Fifth, train users and launch. Sixth, initial optimization period (3–6 months) identifying and implementing savings. Seventh, continuous monitoring and monthly reporting. Initial consultation and site assessment are free. Parsa Energy's experienced team offers a complete package including hardware, software, installation, and support."
      }
    ]
  },
  faqs: [
    {
      q: { fa: "هزینه نصب EMS برای یک کارخانه چقدر است؟", en: "How much does EMS installation cost for a factory?" },
      a: { fa: "برای کارخانه ۲۰۰ پرسنلی با قبض ۸۰۰ میلیون تومان، حدود ۱۵۰ تا ۲۵۰ میلیون تومان. حق اشتراک ماهانه ۳ تا ۵ میلیون تومان. بازگشت سرمایه معمولاً زیر سه ماه.", en: "For a 200-employee factory with 800 million toman bill, about 150–250 million toman. Monthly subscription 3–5 million toman. Payback typically under three months." }
    },
    {
      q: { fa: "آیا EMS با تجهیزات قدیمی هم کار می‌کند؟", en: "Does EMS work with old equipment?" },
      a: { fa: "بله، با نصب سنسورهای خارجی روی تجهیزات قدیمی، EMS می‌تواند مصرف را پایش کند. برای کنترل، نیاز به رله یا کنترلر اضافی است که پارسا انرژی تأمین می‌کند.", en: "Yes, by installing external sensors on old equipment, EMS can monitor consumption. For control, additional relays or controllers are needed — Parsa Energy provides them." }
    },
    {
      q: { fa: "آیا داده‌ها امن هستند؟", en: "Are the data secure?" },
      a: { fa: "پلتفرم پارسا انرژی از رمزنگاری end-to-end، احراز هویت دو عاملی و سرورهای داخل ایران استفاده می‌کند. داده‌ها هرگز به خارج از کشور منتقل نمی‌شوند.", en: "Parsa Energy's platform uses end-to-end encryption, two-factor authentication, and servers inside Iran. Data never leaves the country." }
    }
  ]
}
];
