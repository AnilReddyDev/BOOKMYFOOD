import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { clearItems, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items } = useSelector((store) => store.cart);
  const { resturl } = useContext(userContext);
  let itemTotalprice = 0;
  items.map(
    (item) => (itemTotalprice += item?.price / 100 || item?.defaultPrice / 100)
  );
  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearItems());
  };
  const HandleRemoveItem = (item) => {
    dispatch(removeItem());
  };
  return (
    <div className="cart-container">
      {items.length > 0 ? (
        <div className="cart-card-rest-info">
          <div>
            <img src={resturl} alt="img" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingBottom: "5px",
            }}
          >
            <div>
              <h2>{items[0]?.restDetails.name}</h2>
              <h3>{items[0]?.restDetails.areaName}</h3>
            </div>
            <hr style={{ height: "4px", backgroundColor: "black" }}></hr>
          </div>
        </div>
      ) : (
        <h1
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Cart is empty! explore restaurants <Link to="/">here</Link>
        </h1>
      )}

      {items.map((item) => (
        <CartCard key={item.name} item={item} />
      ))}
      {items.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
            width: "90%",
          }}
        >
          <p
            style={{
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "15px",
              textDecoration: "underline",
              fontWeight: "normal",
            }}
            onClick={HandleRemoveItem}
          >
            remove item
          </p>
          <p
            style={{
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "15px",
              textDecoration: "underline",
              fontWeight: "normal",
            }}
            onClick={HandleClearCart}
          >
            clear cart
          </p>
        </div>
      )}
      {items.length > 0 && (
        <div className="cart-card-rest-bill-info">
          <h1
            style={{
              fontSize: "17px",
              fontWeight: "medium",
              marginTop: "40px",
            }}
          >
            Bill details :
          </h1>
          <div className="ccrbi-d">
            <p>Item Total</p>
            <p>₹{itemTotalprice}</p>
          </div>
          <hr
            style={{
              height: "0.2px",
              backgroundColor: "gray",
              width: "100%",
              margin: "10px 0px",
            }}
          ></hr>
          <div className="ccrbi-d">
            <p>Platform fee</p>
            <p>₹5</p>
          </div>
          <div className="ccrbi-d">
            <p>GST and Restaurant Charges</p>
            <p>₹25</p>
          </div>
          <hr
            style={{
              height: "1px",
              backgroundColor: "black",
              width: "100%",
              margin: "10px 0px",
            }}
          ></hr>
          <div className="ccrbi-d">
            <h2 style={{ fontWeight: "bold" }}>To Pay</h2>
            <h2 style={{ fontWeight: "bold" }}>₹{itemTotalprice + 30}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
