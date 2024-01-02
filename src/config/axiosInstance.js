import axios from "axios";

const urlApi = "https://api.giphy.com/v1/gifs/";

export const reqAxios = axios.create({
  baseURL: urlApi,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});
