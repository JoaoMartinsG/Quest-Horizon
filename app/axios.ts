import axios from "axios";


export const rawg = axios.create({
  baseURL: `https://api.rawg.io/api`,
  timeout: 1000,
  params: {key: process.env.RAWG_API_KEY}
});
