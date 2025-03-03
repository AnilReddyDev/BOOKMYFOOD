import { useState, useEffect } from "react";
import { STAR_ICON } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import RecommendedMenuCard from "./RecommendedMenuCard";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";
const RestaurantDetails = () => {
  const [restraurantDetails, setRestraurantDetails] = useState({});
  const [RecommendedMenu, setRecommendedMenu] = useState([]);
  const { resId } = useParams();
  console.log(`resId`, resId);
  const fetchData = async () => {
    console.log(`useffect entered`);
    const data = await fetch(RES_MENU_URL + resId);
    console.log(RES_MENU_URL + resId);
    const json = await data.json();
    const {
      name,
      city,
      areaName,
      avgRating,
      costForTwoMessage,
      totalRatingsString,
      sla,
      cuisines,
    } = json.data.cards[2].card.card.info;

    setRestraurantDetails({
      name,
      city,
      areaName,
      avgRating,
      costForTwoMessage,
      totalRatingsString,
      sla,
      cuisines,
    });
    setRecommendedMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    console.log(`useffect exited`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (RecommendedMenu.length === 0) return <ShimmerCard />;

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
      <div className="recommended-menu">
        <hr></hr>
        <h2
          style={{
            padding: "15px 0px",
            fontSize: "20px",
          }}
        >
          Recommended
        </h2>
        {RecommendedMenu.map((menu) => {
          return (
            <div key={menu.card.info.id}>
              <RecommendedMenuCard menu={menu.card.info} />
              <hr></hr>
            </div>
          );
        })}
        {/* <RecommendedMenuCard menu={RecommendedMenu[5].card.info} /> */}
      </div>
    </div>
  );
};

export default RestaurantDetails;
