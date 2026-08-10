import { NextResponse } from "next/server";
import { z } from "zod";
import { sendBaleMessage } from "@/lib/bale";

const DEFAULT_ADMIN_CHAT_ID = "5110958501";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160).optional().or(z.literal("")),
  phone: z.string().min(6).max(40),
  purpose: z.string().min(1).max(100).optional(),
  message: z.string().min(1).max(4000).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  const data = parsed.data;
  console.log("[lead] new submission:", data.name, data.phone);

  const adminChatId = process.env.ADMIN_BALE_CHAT_ID || DEFAULT_ADMIN_CHAT_ID;
  if (adminChatId) {
    const text = `📥 **درخواست جدید مشاوره در سایت**\n\n👤 **نام:** ${data.name}\n📞 **شماره تماس:** ${data.phone}${data.purpose ? `\n📋 **موضوع:** ${data.purpose}` : ""}${data.message ? `\n💬 **پیام:** ${data.message}` : ""}`;
    await sendBaleMessage(adminChatId, text);
  }

  return NextResponse.json({ ok: true, message: "Lead received" }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ ok: true, status: "Lead endpoint active" });
}
