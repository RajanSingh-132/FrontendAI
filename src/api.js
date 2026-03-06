import axios from "axios";

const API_URL = process.env.BD_URL || "http://127.0.0.1:8000/chat";

export const sendMessage = (data) => {
  return axios.post(API_URL, data);
};