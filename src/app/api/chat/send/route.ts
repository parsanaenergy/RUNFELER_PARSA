import { NextResponse } from "next/server";
import { addMessage, Message } from "@/lib/chatStore";
import { sendBaleMessage } from "@/lib/bale";

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

    const adminChatId = process.env.ADMIN_BALE_CHAT_ID;
    if (adminChatId) {
      const pageInfo = pageUrl ? `📍 صفحه: ${pageUrl}\n` : "";
      const baleText = `🟢 پیام جدید سایت\n${pageInfo}\n#${sessionId}\n\n💬 ${text}`;
      await sendBaleMessage(adminChatId, baleText);
    } else {
      console.warn("ADMIN_BALE_CHAT_ID environment variable is missing");
    }

    return NextResponse.json({ ok: true, data: newMessage });
  } catch (error) {
    console.error("Error in /api/chat/send:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
