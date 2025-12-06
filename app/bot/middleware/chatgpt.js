import axios from "axios";

export default async function Chatgpt(ctx) {
  try {
    const userMessage = ctx.message.text;

    await ctx.replyWithChatAction('typing');
    if (userMessage.startsWith("/")) return;

    await ctx.reply("⏳");

    // ChatGPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const aiText =
      response.data.choices?.[0]?.message?.content ||
      "❌ پاسخی دریافت نشد.";

    await ctx.reply(aiText);

  } catch (error) {
    console.error("ChatGPT Error:", error.response?.data || error.message);

    await ctx.reply("❌ مشکلی در اتصال به ChatGPT پیش آمد!");
  }
};
