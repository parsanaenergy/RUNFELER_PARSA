import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
// Vazirmatn — the leading open Persian/Latin font, full RTL support.
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

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
      <body
        className={`${vazirmatn.variable} ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-fa`}
      >
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
