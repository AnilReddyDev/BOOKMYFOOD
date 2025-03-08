import { createContext } from "react";
const userContext = createContext({
  email: "",
  role: "",
  resturl: "",
});

export default userContext;
