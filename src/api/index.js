import axios from "axios";

const baseURL =
  window.location.protocol +
  "//" +
  window.location.host.replace("3000", "8000");

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
