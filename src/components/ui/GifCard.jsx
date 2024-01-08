import { CustomFavorite } from "./CustomFavorite";
import { CustomLike } from "./CustomLike";

export const GifCard = ({ id, urlGif, title }) => {
  const shortId = id.substr(0, 5);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={urlGif} alt={title} width={"100%"} height={"150"} />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <CustomLike />
              <CustomFavorite shortId={shortId} />
            </div>
            <small className="text-body-secondary">cod: {shortId}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
