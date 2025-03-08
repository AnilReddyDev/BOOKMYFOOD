import { NONVEG_ICON, VEG_ICON } from "../utils/constants";
const CartCard = ({ item }) => {
  const { name, defaultPrice, price, restDetails, vegClassifier } = item;
  return (
    <div className="cart-card">
      <div className="cart-card-menu-info">
        <div className="cart-card-menu-info-left">
          {vegClassifier === "NONVEG" ? NONVEG_ICON : VEG_ICON}
          <h2>{name}</h2>
        </div>
        <h3 style={{ paddingLeft: "40px" }}>
          ₹{defaultPrice / 100 || price / 100}
        </h3>
      </div>
    </div>
  );
};

export default CartCard;
