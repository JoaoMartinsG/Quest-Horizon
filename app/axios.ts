import axios from "axios";


export const rawg = axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {key: process.env.RAWG_API_KEY}
});
