import userContext from "../utils/userContext";
import { useContext } from "react";
const InstaMart = () => {
  const { role, email, userDetails, setUserDetails } = useContext(userContext);

  //Insteading of store all the food delivery and instamart code in only one js file,
  // Insted we can use lazy loading(code splitting) for generating the mutliple js files separately
  // This way we can seprate the code for food delivery and instamart .
  // which makes website loading faster
  return (
    <div>
      <h1>InstaMart</h1>
      <p>Welcome to InstaMart</p>
      <div>
        <label>Email : </label>
        <input
          type="text"
          placeholder="Enter the email"
          style={{ padding: "5px", margin: "20px 0px", fontSize: "20px" }}
          value={email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
      </div>
      <div>
        <label>Role : </label>
        <input
          type="text"
          placeholder="Enter the role"
          style={{ padding: "5px", margin: "20px 0px", fontSize: "20px" }}
          value={role}
          onChange={(e) =>
            setUserDetails({ ...userDetails, role: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default InstaMart;
