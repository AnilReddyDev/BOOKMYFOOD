import { STAR_ICON } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import RecommendedMenuCard from "./RecommendedMenuCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
const RestaurantDetails = () => {
  const { resId } = useParams();
  const [toggleMenuStatus, setToggleMenuStatus] = useState({
    Recommended: true,
  });
  const [restraurantDetails, RecommendedMenu, allCategoryMenu] =
    useRestaurantMenu(resId);

  if (!restraurantDetails) return <ShimmerCard />;
  if (allCategoryMenu.length === 0) return <ShimmerCard />;

  console.log(`toggleMenuStatus`, toggleMenuStatus);
  return (
    <div className="restraurant-details">
      <h1>{restraurantDetails.name}</h1>
      <div className="res-brief-card">
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            gap: "5px",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {STAR_ICON}
            {restraurantDetails.avgRating}(
            {restraurantDetails.totalRatingsString})
          </p>
          {" • "}
          <p>{restraurantDetails.costForTwoMessage}</p>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#FF5A31",
            textDecoration: "underline",
          }}
        >
          {restraurantDetails.cuisines.join(", ")}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          Outlet :{" "}
          <span style={{ fontWeight: "normal" }}>
            {restraurantDetails.areaName}
          </span>
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          Delivery Time :{" "}
          <span style={{ fontWeight: "normal" }}>
            {restraurantDetails.sla.deliveryTime} mins
          </span>
        </p>
      </div>

      <div className="all-menu" style={{ padding: "20px 0px" }}>
        {allCategoryMenu.map((category) => {
          return (
            <div key={category.card.card.title} className="category-card">
              <hr></hr>
              <h1
                style={{
                  padding: "15px 0px",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setToggleMenuStatus({
                    ...toggleMenuStatus,
                    [category.card.card.title]:
                      !toggleMenuStatus[category.card.card.title],
                  });
                }}
              >
                {category.card.card.title} (
                {category.card.card.itemCards.length})
                {toggleMenuStatus[category.card.card.title] ? (
                  <span>▼</span>
                ) : (
                  <span>▲</span>
                )}
              </h1>
              {toggleMenuStatus[category.card.card.title] && (
                <div>
                  {category.card.card.itemCards.map((menu) => {
                    return (
                      <div key={menu.card.info.id}>
                        <RecommendedMenuCard menu={menu.card.info} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
