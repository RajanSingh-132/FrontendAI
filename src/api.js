import axios from "axios";

// Vite environment variable
const API_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://ai-chatbot-xudg.onrender.com/chat";

export const sendMessage = async (data) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};