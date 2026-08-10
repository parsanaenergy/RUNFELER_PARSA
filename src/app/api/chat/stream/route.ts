import { NextRequest } from "next/server";
import { getMessages, subscribe, Message } from "@/lib/chatStore";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return new Response("sessionId parameter is required", { status: 400 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Send existing messages initially
      const existing = getMessages(sessionId);
      for (const msg of existing) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(msg)}\n\n`));
      }

      // Subscribe to future messages
      const unsubscribe = subscribe(sessionId, (msg: Message) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(msg)}\n\n`));
        } catch (err) {
          console.error("Error sending SSE update:", err);
        }
      });

      // Heartbeat ping to keep connection alive
      const pingInterval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`: ping\n\n`));
        } catch {
          clearInterval(pingInterval);
        }
      }, 15000);

      // Clean up listener when client disconnects
      req.signal.addEventListener("abort", () => {
        unsubscribe();
        clearInterval(pingInterval);
        try {
          controller.close();
        } catch {}
      });
    },
    cancel() {
      // Handled via signal abort listener
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
