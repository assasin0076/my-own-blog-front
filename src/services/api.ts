import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://api.storyblok.com/v2/cdn/stories",
  params: { token: "emLnLQQC02QTh47y2SA6LAtt", version: "published", cv: "" },
  timeout: 15000,
});
api.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error: AxiosError) {
    if (import.meta.env.VITEST) {
      return;
    }
    return Promise.reject(error);
  }
);

export default api;
