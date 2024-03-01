import axios from "axios";

const BASE_URL = "http://localhost:8001/api";

export const clientApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
