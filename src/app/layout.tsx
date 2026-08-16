import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { StructuredData } from "@/components/structured-data";
import LiveChat from "@/components/LiveChat";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://parsaenergyco.ir";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "پارسا انرژی | نیروگاه خورشیدی، برق اضطراری و تاسیسات مکانیکی در مشهد",
    template: "%s | پارسا انرژی",
  },
  description:
    "طراحی نیروگاه خورشیدی در مشهد، برق اضطراری، فروش و تعمیر تاسیسات مکانیکی، قطعات تهویه و آموزشگاه فنی‌وحرفه‌ای پارسا انرژی. دریافت مشاوره رایگان مهندسی.",
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
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
      "x-default": "/",
    },
  },
  icons: { icon: "/parsa-energy-logo.png", apple: "/parsa-energy-logo.png" },
  openGraph: {
    title: "پارسا انرژی | نیروگاه خورشیدی، برق اضطراری و تاسیسات در مشهد",
    description:
      "طراحی نیروگاه خورشیدی در مشهد، برق اضطراری، فروش و تعمیر تاسیسات مکانیکی، قطعات تهویه و آموزشگاه فنی‌وحرفه‌ای پارسا انرژی. دریافت مشاوره رایگان مهندسی.",
    url: SITE_URL,
    siteName: "پارسا انرژی | Parsa Energy",
    images: [{ url: "/images/hero-solar-plant.png", width: 1200, height: 630, alt: "نیروگاه خورشیدی پارسا انرژی" }],
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "پارسا انرژی | نیروگاه خورشیدی و تاسیسات در مشهد",
    description: "طراحی نیروگاه خورشیدی در مشهد، برق اضطراری، فروش و تعمیر تاسیسات مکانیکی، قطعات تهویه و آموزشگاه فنی‌وحرفه‌ای پارسا انرژی. دریافت مشاوره رایگان مهندسی.",
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
        {/* Microsoft Clarity tracking code - optimized with lazyOnload to improve INP/TBT */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y0ma9b925g");
          `}
        </Script>
      </head>
      <body
        className={`antialiased bg-background text-foreground font-fa ${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LangProvider>
            {children}
            <LiveChat />
            <Toaster />
          </LangProvider>
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
