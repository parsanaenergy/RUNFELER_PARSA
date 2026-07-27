import { HomeClient } from "@/components/site/home-client";
import { ServerContentLayer } from "@/components/site/server-content-layer";

/**
 * صفحه اصلی — Server Component.
 *
 * HomeClient: تمام UI تعاملی (slider, tabs, dialogs) — client-side.
 * ServerContentLayer: محتوای کامل متنی (مقالات، خدمات، محصولات، FAQ) — server-side.
 *
 * با این معماری، Googlebot و Bingbot در HTML اولیه محتوای کامل را می‌بینند
 * بدون نیاز به اجرای JavaScript.
 */
export default function Home() {
  return (
    <>
      <HomeClient />
      <ServerContentLayer />
    </>
  );
}
