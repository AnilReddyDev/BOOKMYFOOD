import { STAR_ICON } from "../utils/constants";

const RestbreifCard = ({ restraurantDetails }) => {
  return (
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
          {restraurantDetails.avgRating}({restraurantDetails.totalRatingsString}
          )
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
  );
};

export default RestbreifCard;
