import { NextResponse } from "next/server";
import { sendBaleMessage } from "@/lib/bale";

const DEFAULT_ADMIN_CHAT_ID = "5110958501";

export async function GET() {
  const tokenExists = !!(process.env.BALE_BOT_TOKEN);
  const adminChatIdExists = !!(process.env.ADMIN_BALE_CHAT_ID);

  const targetChatId = process.env.ADMIN_BALE_CHAT_ID || DEFAULT_ADMIN_CHAT_ID;

  // Attempt test ping to Bale API
  let baleTestResult = null;
  try {
    baleTestResult = await sendBaleMessage(
      targetChatId,
      "🔍 تست وضعیت اتصال سیستم گفتگوی زنده پارسا انرژی"
    );
  } catch (err: any) {
    baleTestResult = { ok: false, error: err?.message || String(err) };
  }

  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    environment: {
      has_BALE_BOT_TOKEN: tokenExists,
      has_ADMIN_BALE_CHAT_ID: adminChatIdExists,
      targetChatId: targetChatId ? "Configured" : "Missing",
    },
    bale_test_result: baleTestResult,
  });
}
