import { addItem } from "../utils/cartSlice";
import { NONVEG_ICON } from "../utils/constants";
import { VEG_ICON } from "../utils/constants";
import { MENU_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const RestaurantMenuCard = ({ menu, restraurantDetails }) => {
  const { name, defaultPrice, price, imageId, description, itemAttribute } =
    menu;
  const imgURL = MENU_IMG_URL + imageId;
  const dispatch = useDispatch();
  const { vegClassifier } = itemAttribute;
  const restDetails = {
    name: restraurantDetails.name,
    areaName: restraurantDetails.areaName,
  };

  const HandleBtnClick = ({
    name,
    defaultPrice,
    price,
    imgURL,
    restDetails,
    vegClassifier,
  }) => {
    dispatch(
      addItem({ name, defaultPrice, price, imgURL, restDetails, vegClassifier })
    );
  };
  if (!name) return <h1>No Recommended Menu available! try again later.</h1>;
  return (
    <div className="recommended-card">
      <div className="recommended-card-left">
        <span>{vegClassifier === "NONVEG" ? NONVEG_ICON : VEG_ICON}</span>
        <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>{name}</h1>
        <h2
          style={{
            fontWeight: "medium",
            fontSize: "15px",
            color: "rgb(16, 16, 16)",
          }}
        >
          ₹{defaultPrice / 100 || price / 100}
        </h2>
        <h3 style={{ fontWeight: "normal", fontSize: "13px", color: "grey" }}>
          {description}
        </h3>
      </div>
      <div className="recommended-card-right">
        <img src={imgURL} alt="img" />
        <button
          className="add-btn"
          onClick={() =>
            HandleBtnClick({
              name,
              defaultPrice,
              price,
              imgURL,
              restDetails,
              vegClassifier,
            })
          }
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
