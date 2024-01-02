import { useEffect, useState } from "react";
import { CustomSelect } from "./components/ui/CustomSelect";
import { GifCard } from "./components/ui/GifCard";
import { Searcher } from "./components/ui/Searcher";

const apiKey = "P9fWu2B6NMu6fPeNHNDsFrrTU8AlPjZW";
const limit = 16;
const category = "memes";
const textSearch = "action";

export const Gimoji = () => {
  const [dataApi, setDataApi] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchGif, setSearchGif] = useState([]);

  const callCategoriesApi = async () => {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/categories?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    setCategories(data);
  };

  const callApi = async () => {
    callCategoriesApi();
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    );
    const { data } = await resp.json();
    setDataApi(data);
  };

  const searchingGif = async () => {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=&rating=g&lang=es&bundle=messaging_non_clips`
    );
    const { data } = await resp.json();
    setSearchGif(data);
    console.log(searchGif)
  };

  useEffect(() => {
    callApi();
    searchingGif();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-start">
          <div className="col-sm-4">
            <CustomSelect categories={categories} />
          </div>
          <div className="col-sm-6">
            <Searcher />
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
