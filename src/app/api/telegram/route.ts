import { NextRequest, NextResponse } from "next/server";

export const POST = async (_: NextRequest) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const message =
    "У вас нове замовлення! Перейдіть на сайт: https://chehlidetkam.vercel.app. ";

  try {
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    return NextResponse.json({
      success: "Message sent successfully",
      body: response.body,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message", status: 500 });
  }
};
