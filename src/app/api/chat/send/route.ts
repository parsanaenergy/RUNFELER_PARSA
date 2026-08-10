import { NextResponse } from "next/server";
import { addMessage, Message } from "@/lib/chatStore";
import { sendBaleMessage } from "@/lib/bale";

const DEFAULT_ADMIN_CHAT_ID = "5110958501";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sessionId = body.sessionId;
    const text = (body.text || body.message || "").trim();
    const pageUrl = body.pageUrl || body.pathname || "";

    if (!sessionId || !text) {
      return NextResponse.json(
        { ok: false, error: "sessionId and text are required" },
        { status: 400 }
      );
    }

    const newMessage: Message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      sessionId,
      sender: "customer",
      text,
      createdAt: Date.now(),
    };

    addMessage(sessionId, newMessage);

    const adminChatId = process.env.ADMIN_BALE_CHAT_ID || DEFAULT_ADMIN_CHAT_ID;
    let baleStatus = null;

    if (adminChatId) {
      const pageInfo = pageUrl ? `📍 صفحه: ${pageUrl}\n` : "";
      const baleText = `🟢 پیام جدید سایت\n${pageInfo}#${sessionId}\n\n💬 ${text}`;
      baleStatus = await sendBaleMessage(adminChatId, baleText);
      console.log("Bale Message Delivery Result:", baleStatus);
    } else {
      console.error("[Bale Error] ADMIN_BALE_CHAT_ID is missing.");
    }

    return NextResponse.json({ ok: true, data: newMessage, bale: baleStatus });
  } catch (error: any) {
    console.error("Error in /api/chat/send:", error?.message || error);
    return NextResponse.json(
      { ok: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
