import { useEffect, useState } from "react";
import { reqAxios } from "../config/axiosInstance";

const urlApi = import.meta.env.VITE_URL_API

export const useAxios = (url) => {
  const [dataApi, setDataApi] = useState([]);

  const getAxios = async () => {
    const resp = await reqAxios.get(urlApi + url);
    const { data } = resp.data;
    setDataApi(data);
  };

  useEffect(() => {
    getAxios();
  }, [url]);

  return {
    dataApi,
  };
};
