import { useEffect, useId, useRef } from "react";

export const Searcher = ({ onClickSearch }) => {
  
  const refInputSearch = useRef();
  const refButtonSearch = useRef();
  const id = useId();

  useEffect(() => {
    refInputSearch.current.focus();
    refButtonSearch.current.className = 'd-none'
  }, [])

  const onChangeInput = () => {
    if (refInputSearch) {
      refButtonSearch.current.className = 'btn btn-primary ms-2'
    }
  }
  

  return (
    <>
    <label htmlFor={id} className="w-100 d-flex align-items-center">Buscá tu gif:</label>
      <input
      ref={refInputSearch}
      id={id}
        type="search"
        className=" form-control form-control-dark text-dark"
        placeholder="Search..."
        aria-label="Search"
        onChange={onChangeInput}
        />
      <button className="btn btn-gray ms-2" ref={refButtonSearch} onClick={() => onClickSearch(refInputSearch.current.value)}>
        🔎
      </button>
    </>
  );
};
