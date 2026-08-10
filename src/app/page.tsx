import { HomeClient } from "@/components/site/home-client";

/**
 * صفحه اصلی — Server Component.
 *
 * HomeClient: تمام UI تعاملی و سبک سمت کلاینت.
 * محتوای کامل آرشیو به مسیر /content-archive منتقل شد تا حجم HTML اولیه صفحه اصلی کاهش یافته و TTFB ارتقا یابد.
 */
export default function Home() {
  return <HomeClient />;
}

