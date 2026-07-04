import { NextResponse } from "next/server";

/**
 * GEO-004: IndexNow integration.
 *
 * Submits one or more URLs to the IndexNow protocol (used by Bing, Yandex,
 * Naver, and indirectly by ChatGPT Search / Perplexity which rely on Bing's
 * index). Call this endpoint whenever content is published or updated.
 *
 * The 32-char hex key lives at /public/{KEY}.txt so IndexNow validators can
 * verify ownership. The key is sent with every submission.
 *
 * Usage:
 *   POST /api/indexnow
 *   body: { urls: ["https://parsenergyco.ir/", "https://parsenergyco.ir/#knowledge"] }
 *
 * In production, wire this to a CMS publish/edit webhook so every new or
 * updated page is submitted within seconds.
 */

const INDEXNOW_KEY = "bbc2330128da3f31c5a292a97f4bbd4c";
const SITE_HOST = "https://parsenergyco.ir";

export async function POST(request: Request) {
  let body: { urls?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const urls = body.urls;
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ ok: false, error: "urls array required" }, { status: 422 });
  }

  // Submit to IndexNow
  try {
    const payload = {
      host: "parsenergyco.ir",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 (OK) or 202 (Accepted) on success
    const ok = res.status === 200 || res.status === 202;
    return NextResponse.json({
      ok,
      status: res.status,
      submitted: urls.length,
      key: INDEXNOW_KEY,
      keyLocation: payload.keyLocation,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Submission failed" },
      { status: 502 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "IndexNow",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    endpoint: "POST /api/indexnow with { urls: string[] }",
  });
}
