import { useState } from "react";
import { CustomSelect } from "./components/ui/CustomSelect";
import { GifCard } from "./components/ui/GifCard";
import { Searcher } from "./components/ui/Searcher";
import { useAxios } from "./hooks/useAxios";
import { Loading } from "./components/ui/Loading";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const limit = 12;

export const Gimoji = () => {
  const [selectCategoryOrSearch, setSelectCategoryOrSearch] =
    useState("actions");

  const url = `search?api_key=${apiKey}&q=${selectCategoryOrSearch}&limit=${limit}&offset=0&rating=g&lang=es&bundle=messaging_non_clips`;
  const urlCategories = `categories?api_key=${apiKey}`;

  const { dataApi: dataGif, isLoading } = useAxios(url);
  const { dataApi: dataCategoriesGif } = useAxios(urlCategories, "get", {
    params: "memes",
  });

  const onChangeCategories = (e) => {
    setSelectCategoryOrSearch(e);
  };

  const onClickSearch = (value) => {
    setSelectCategoryOrSearch(value);
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="container-fluid mt-5">
          <div className="row justify-content-start">
            <div className="col-sm-4">
              <CustomSelect
                onChangeCategories={(e) => onChangeCategories(e.target.value)}
                categories={dataCategoriesGif}
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
              {dataGif.map((item) => (
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

        <div className="row mb-5 row-cols-md-3 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary btn-lg "
            onClick={() => {}}
          >
            Anterior
          </button>
          <h3 className="text-center"> Page: 1 </h3>
          <button className="btn btn-outline-primary btn-lg" onClick={() => {}}>
            Siguiente
          </button>
        </div>
      </>
    );
  }
};
