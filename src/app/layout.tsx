import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { StructuredData } from "@/components/structured-data";

// NOTE: فونت‌ها از CDN در زمان اجرا لود می‌شوند (نه در زمان build)
// تا مشکل عدم دسترسی سرور build ایران به Google Fonts برطرف شود.
// متغیرهای CSS در globals.css تعریف شده‌اند.

const SITE_URL = "https://parsenergyco.ir";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "پارسا انرژی | نیروگاه خورشیدی، برق اضطراری و تاسیسات مکانیکی در مشهد",
    template: "%s | پارسا انرژی",
  },
  description:
    "پارسا انرژی در مشهد - الهیه: طراحی، فروش و اجرای نیروگاه خورشیدی، تامین برق اضطراری (UPS، باتری، دیزل ژنراتور)، فروش و تعمیر تاسیسات مکانیکی، قطعات تهویه و آموزش فنی. مشاوره رایگان. Parsa Energy in Mashhad — solar power plants, emergency power, HVAC, repair & training.",
  keywords: [
    "نیروگاه خورشیدی", "پنل خورشیدی", "اینورتر خورشیدی",
    "برق اضطراری", "UPS", "دیزل ژنراتور", "باتری خورشیدی",
    "تعمیر اینورتر", "تعمیر برد الکترونیکی",
    "پکیج دیواری", "کولر گازی", "هواساز", "تاسیسات مکانیکی",
    "میکروگرید", "سیستم آفگرید", "هایبرید",
    "آموزش خورشیدی", "آموزشگاه فنی حرفه ای",
    "مشهد", "الهیه",
    "solar power plant", "solar panel", "inverter repair", "Mashhad",
    "Parsa Energy", "parsenergyco",
  ],
  authors: [{ name: "Parsa Energy" }],
  creator: "Parsa Energy",
  publisher: "Parsa Energy",
  alternates: { canonical: "/", languages: { fa: "/", en: "/en" } },
  icons: { icon: "/parsa-energy-logo.png", apple: "/parsa-energy-logo.png" },
  openGraph: {
    title: "پارسا انرژی | نیروگاه خورشیدی، برق اضطراری و تاسیسات در مشهد",
    description:
      "طراحی، فروش و اجرای نیروگاه خورشیدی، برق اضطراری، تاسیسات مکانیکی، تعمیرات و آموزش. مشهد - الهیه. مشاوره رایگان و ابزار مهندسی.",
    url: SITE_URL,
    siteName: "پارسا انرژی | Parsa Energy",
    images: [{ url: "/images/hero-solar-plant.png", width: 1344, height: 768, alt: "نیروگاه خورشیدی پارسا انرژی" }],
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "پارسا انرژی | نیروگاه خورشیدی و تاسیسات در مشهد",
    description: "طراحی، فروش و اجرای نیروگاه خورشیدی، برق اضطراری، تاسیسات، تعمیرات و آموزش.",
    images: ["/images/hero-solar-plant.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
};

const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
  ],
  width: "device-width",
  initialScale: 1,
};
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* فونت Vazirmatn (فارسی) از CDN — در زمان اجرا لود می‌شود */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        />
        {/* فونت‌های لاتین از Google Fonts — در زمان اجرا */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              ["keydown","touchmove","touchstart","mouseover"].forEach(function(v){window.addEventListener(v,function(){if(!window.isGoftinoAdded){window.isGoftinoAdded=1;var i="6F7Nxr",d=document,g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.type="text/javascript",g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}})});
            `
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground font-fa">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LangProvider>
            {children}
            <Toaster />
          </LangProvider>
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
