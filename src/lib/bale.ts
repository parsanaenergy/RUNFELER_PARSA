const DEFAULT_TOKEN = "838832486:9xdIp9TwqPaAocH7qYdGCS1SqHwFP9J5GTs";

export async function sendBaleMessage(chatId: string, text: string) {
  const token = process.env.BALE_BOT_TOKEN || DEFAULT_TOKEN;

  if (!token) {
    console.error("[Bale Error] BALE_BOT_TOKEN is missing.");
    return { ok: false, error: "BALE_BOT_TOKEN is missing" };
  }

  const api = `https://tapi.bale.ai/bot${token}`;

  try {
    const response = await fetch(`${api}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
      console.error("[Bale API Response Error]:", data);
    }
    return data;
  } catch (error: any) {
    console.error("[Bale Fetch Exception]:", error?.message || error);
    return { ok: false, error: error?.message || String(error) };
  }
}
