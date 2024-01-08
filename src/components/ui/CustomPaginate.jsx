export const CustomPaginate = ({ pageNumber, prevPage, nextPage }) => {
  return (
    <div className="row my-4 row-cols-md-3 d-flex justify-content-between align-items-center">
      <button className="btn btn-outline-warning" onClick={prevPage}>
        ⏮️
      </button>
      <h3 className="text-center"> {pageNumber} </h3>
      <button className="btn btn-outline-warning" onClick={nextPage}>
        ⏭️
      </button>
    </div>
  );
};
