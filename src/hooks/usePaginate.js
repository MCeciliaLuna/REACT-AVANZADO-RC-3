import { useEffect, useState } from "react";

export const usePaginate = (limit, selectCategoryOrSearch) => {
  const [offset, setOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setOffset(0);
    setPageNumber(0);
  }, [selectCategoryOrSearch]);

  const nextPage = () => {
    setOffset((prev) => prev + limit);
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setOffset((prev) => {
      if (prev == 0) {
        setPageNumber(0);
        return 0;
      } else {
        setPageNumber(pageNumber - 1);
        return prev - limit;
      }
    });
  };
  return {
    offset,
    pageNumber,
    prevPage,
    nextPage,
  };
};
