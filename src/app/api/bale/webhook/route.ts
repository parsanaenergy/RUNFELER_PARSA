import { NextResponse } from "next/server";
import { addMessage, Message } from "@/lib/chatStore";

export async function POST(req: Request) {
  try {
    const update = await req.json();

    const message = update?.message;
    if (message && message.reply_to_message && message.text) {
      const originalText =
        message.reply_to_message.text ||
        message.reply_to_message.caption ||
        "";

      // Extract session ID from original Bale message text using #ID pattern
      const match = originalText.match(/#([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        const sessionId = match[1];
        const operatorText = message.text.trim();

        if (operatorText) {
          const newMessage: Message = {
            id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            sessionId,
            sender: "operator",
            text: operatorText,
            createdAt: Date.now(),
          };

          addMessage(sessionId, newMessage);
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in Bale webhook:", error);
    return NextResponse.json({ ok: true });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, status: "Bale webhook endpoint ready" });
}
