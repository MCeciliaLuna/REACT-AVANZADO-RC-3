import { useState } from "react";

export const Searcher = ({onClickSearch}) => {
  const [textSearch, setTextSearch] = useState("");

  const onChangeSearch = (e) => {
    setTextSearch(e.target.value);
  };

  

  return (
    <>
      <input
        type="search"
        className=" form-control form-control-dark text-dark"
        placeholder="Search..."
        aria-label="Search"
        onChange={onChangeSearch}
      />
      <button className="btn btn-primary ms-2" onClick={() => onClickSearch(textSearch)}>
        🔎
      </button>
    </>
  );
};
