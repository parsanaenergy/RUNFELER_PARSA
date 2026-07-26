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
 *   GET /api/indexnow?url=https://parsaenergyco.ir/bargh
 *   POST /api/indexnow body: { urls: ["https://parsaenergyco.ir/bargh"] }
 */

const INDEXNOW_KEY = "bbc2330128da3f31c5a292a97f4bbd4c";
const SITE_HOST = "https://parsaenergyco.ir";
const HOSTNAME = "parsaenergyco.ir";

async function submitToIndexNow(urls: string[]) {
  const payload = {
    host: HOSTNAME,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const ok = res.status === 200 || res.status === 202;
  return {
    ok,
    status: res.status,
    submitted: urls,
    keyLocation: payload.keyLocation,
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  const urlsToSubmit = targetUrl
    ? [targetUrl]
    : [
        `${SITE_HOST}/`,
        `${SITE_HOST}/bargh`,
        `${SITE_HOST}/services/solar-plant-design-construction`,
        `${SITE_HOST}/services/emergency-power-design-install`,
        `${SITE_HOST}/services/hvac-repair-service`,
      ];

  try {
    const result = await submitToIndexNow(urlsToSubmit);
    return NextResponse.json({
      message: "IndexNow submission triggered successfully",
      ...result,
    });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message || "Submission failed" }, { status: 500 });
  }
}

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

  try {
    const result = await submitToIndexNow(urls);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message || "Submission failed" }, { status: 500 });
  }
}
