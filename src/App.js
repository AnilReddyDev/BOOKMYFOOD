import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantDetails from "./components/RestraurantDetails";
import userContext from "./utils/userContext";
// lazy loading the instamart component (code splitting)
const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  const [userDetails, setUserDetails] = React.useState({
    email: "jD1bC@example.com",
    role: "admin",
  });
  return (
    <userContext.Provider
      value={{
        email: userDetails.email,
        role: userDetails.role,
        setUserDetails,
        userDetails,
      }}
    >
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
