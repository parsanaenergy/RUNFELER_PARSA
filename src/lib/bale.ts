const TOKEN = process.env.BALE_BOT_TOKEN;

const API = `https://tapi.bale.ai/bot${TOKEN}`;

export async function sendBaleMessage(chatId: string, text: string) {
  const token = process.env.BALE_BOT_TOKEN || TOKEN;
  const api = `https://tapi.bale.ai/bot${token}`;

  const response = await fetch(`${api}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  return response.json();
}
