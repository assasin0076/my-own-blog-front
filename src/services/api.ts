import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
