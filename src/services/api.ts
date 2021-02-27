import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const fetcher = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};

export default api;
