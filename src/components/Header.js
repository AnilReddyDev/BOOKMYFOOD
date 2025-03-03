import { LOGO_SVG } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [ButtonStatus, setButtonStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">{LOGO_SVG}</div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
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
