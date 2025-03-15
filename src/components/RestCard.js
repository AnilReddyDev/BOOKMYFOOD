import { CDN_LINK } from "../utils/constants";
import { STAR_ICON } from "../utils/constants";
const RestCard = (props) => {
  const { name, cloudinaryImageId, avgRatingString, sla, cuisines, areaName } =
    props.resData.info;
  const RestImgURL = CDN_LINK + cloudinaryImageId;
  return (
    <div className="rest-card" data-testid="resCard">
      <img className="rest-card-img" src={RestImgURL} />
      <div className="rest-card-info">
        <h2>{name}</h2>
        <h3 className="rest-card-rating">
          {STAR_ICON}
          <p>{avgRatingString}</p> • <p>{sla.slaString}</p>
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

/**
 * Higher Order Component
 * Higher order component is nothing but a function which returns another function.
 * Its main purpose is to enhance the functionality of existing Component/function.
 */
export const withTopRatedRest = (RestCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="rest-card-title">Top Rated</h1>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
