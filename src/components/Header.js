import { LOGO_SVG } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [ButtonStatus, setButtonStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">{LOGO_SVG}</Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/cart">
              Cart {cartItems.length > 0 && cartItems.length}
            </Link>
          </li>
          {/* <li>
            <Link to="/instamart">InstaMart</Link>
          </li> */}
          <li> {onlineStatus ? "🟢" : "🔴"}</li>
          <li></li>
          <button
            className="login-btn"
            onClick={() =>
              ButtonStatus == "Login"
                ? setButtonStatus("Logout")
                : setButtonStatus("Login")
            }
          >
            {ButtonStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
