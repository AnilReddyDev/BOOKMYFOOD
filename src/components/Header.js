import { LOGO_SVG } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Header = () => {
  const [ButtonStatus, setButtonStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
            <Link to="/instamart">InstaMart</Link>
          </li>
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
