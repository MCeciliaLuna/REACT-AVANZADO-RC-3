import { useState } from "react";
import { CustomSelect } from "./components/filters/CustomSelect";
import { GifCard } from "./components/ui/GifCard";
import { Searcher } from "./components/filters/Searcher";
import { useAxios } from "./hooks/useAxios";
import { Loading } from "./components/ui/Loading";
import { CustomPaginate } from "./components/ui/CustomPaginate";
import { usePaginate } from "./hooks/usePaginate";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const limit = 8;

export const Gimoji = () => {
  const [selectCategoryOrSearch, setSelectCategoryOrSearch] =
    useState("actions");

  const { offset, pageNumber, prevPage, nextPage } = usePaginate(
    limit,
    selectCategoryOrSearch
  );

  const url = `search?api_key=${apiKey}&q=${selectCategoryOrSearch}&limit=${limit}&offset=${offset}&rating=g&lang=es&bundle=messaging_non_clips`;
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
          <div className="row justify-content-evenly">
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
        
        <CustomPaginate
          pageNumber={pageNumber}
          prevPage={prevPage}
          nextPage={nextPage}
        />

        <div className="album pb-5 ">
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
      </>
    );
  }
};
