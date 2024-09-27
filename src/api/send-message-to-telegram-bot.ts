export const sendMessageToTelegramBot = async () => {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.body;
  } catch (error) {
    console.error("Error sending order:", error);
  }
};
