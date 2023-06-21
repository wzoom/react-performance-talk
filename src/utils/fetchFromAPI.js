import axios from "axios";
import { SECRET_TOKEN } from "./secret";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": SECRET_TOKEN,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const CACHE = {};

export const fetchFromAPI = async (url) => {
  if (CACHE[url]) {
    return CACHE[url];
  }
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  CACHE[url] = data;
  return data;
};
