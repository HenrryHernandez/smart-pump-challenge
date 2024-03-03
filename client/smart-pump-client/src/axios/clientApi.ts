import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`;

export const clientApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
