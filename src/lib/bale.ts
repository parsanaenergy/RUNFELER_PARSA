export async function sendBaleMessage(chatId: string, text: string) {
  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    console.error("[Bale Error] BALE_BOT_TOKEN environment variable is missing.");
    return { ok: false, error: "BALE_BOT_TOKEN is missing" };
  }

  const api = `https://tapi.bale.ai/bot${token}`;

  try {
    const response = await fetch(`${api}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
      console.error("[Bale API Failed]:", data);
    }
    return data;
  } catch (error) {
    console.error("[Bale Fetch Exception]:", error);
    return { ok: false, error };
  }
}
