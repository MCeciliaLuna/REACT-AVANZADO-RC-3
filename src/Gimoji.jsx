import { useEffect, useState } from "react";
import { CustomSelect } from "./components/ui/CustomSelect";
import { GifCard } from "./components/ui/GifCard";
import { Searcher } from "./components/ui/Searcher";
import { reqAxios } from "./config/axiosInstance";

const apiKey = "P9fWu2B6NMu6fPeNHNDsFrrTU8AlPjZW";
const limit = 16;
// const category = "memes";
const urlApi = "https://api.giphy.com/v1/gifs/";

export const Gimoji = () => {
  const [dataApi, setDataApi] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategoryOrSearch, setSelectCategoryOrSearch] =
    useState("actions");

  const callCategoriesApi = async () => {
    const resp = await fetch(`${urlApi}categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    setCategories(data);
  };

  const onChangeCategories = (e) => {
    setSelectCategoryOrSearch(e.target.value);
  };

  const callApi = async () => {
    callCategoriesApi();
    // const resp = await fetch(
    //   `${urlApi}search?api_key=${apiKey}&q=${selectCategoryOrSearch}&limit=${limit}&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    // );
    // const { data } = await resp.json();
    // setDataApi(data);

    const resp = await reqAxios.get(`${urlApi}search?api_key=${apiKey}&q=${selectCategoryOrSearch}&limit=${limit}&offset=0&rating=g&lang=es&bundle=messaging_non_clips`);
    const {data} = resp.data
    setDataApi(data)
  };

  const onClickSearch = (value) => {
    setSelectCategoryOrSearch(value);
  };

  useEffect(() => {
    callApi();
  }, [selectCategoryOrSearch]);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-start">
          <div className="col-sm-4">
            <CustomSelect
              onChangeCategories={(textSearch) =>
                onChangeCategories(textSearch)
              }
              categories={categories}
            />
          </div>
          <div className="col-sm-4 d-flex">
            <Searcher onClickSearch={(value) => onClickSearch(value)} />
          </div>
        </div>
      </div>
      <div className="album py-5 ">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {dataApi.map((item) => (
              <GifCard
                key={item.id}
                urlGif={item.images.fixed_height.webp}
                id={item.id}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
