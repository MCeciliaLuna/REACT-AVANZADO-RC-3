import { useEffect, useState } from "react";
import axios from "axios";

const urlApi = import.meta.env.VITE_URL_API;

export const reqAxios = axios.create({
  baseURL: urlApi,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAxios = (url, method, params) => {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getAxios = async () => {
    const resp = await reqAxios({
      urlApi,
      url,
      method,
      params: { params }
    });
    const { data } = resp.data;
    setDataApi(data);
    setIsLoading(false)
  };

  useEffect(() => {
    getAxios();
  }, [url]);

  return {
    dataApi,
    isLoading
  };
};

useAxios.defaultProps={
params: null
}