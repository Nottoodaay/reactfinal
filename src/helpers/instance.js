import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
