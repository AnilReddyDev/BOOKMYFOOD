import { NONVEG_ICON } from "../utils/constants";
import { VEG_ICON } from "../utils/constants";
import { MENU_IMG_URL } from "../utils/constants";
const RecommendedMenuCard = ({ menu }) => {
  const { name, defaultPrice, imageId, description, itemAttribute } = menu;

  return (
    <div className="recommended-card">
      <div className="recommended-card-left">
        <span>
          {itemAttribute.vegClassifier === "NONVEG" ? NONVEG_ICON : VEG_ICON}
        </span>
        <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>{name}</h1>
        <h2
          style={{
            fontWeight: "medium",
            fontSize: "15px",
            color: "rgb(16, 16, 16)",
          }}
        >
          ₹{defaultPrice / 100}
        </h2>
        <h3 style={{ fontWeight: "normal", fontSize: "13px", color: "grey" }}>
          {description}
        </h3>
      </div>
      <div className="recommended-card-right">
        <img src={MENU_IMG_URL + imageId} alt="img" />
        <button className="add-btn">ADD</button>
      </div>
    </div>
  );
};

export default RecommendedMenuCard;
