import ShimmerCard from "./ShimmerCard";
import RecommendedMenuCard from "./RecommendedMenuCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestbreifCard from "./RestBriefCard";
import RestCategoryTitle from "./RestCategoryTitle";
const RestaurantDetails = () => {
  const { resId } = useParams();
  const [toggleMenuStatus, setToggleMenuStatus] = useState({
    Recommended: true,
  });
  const [restraurantDetails, RecommendedMenu, allCategoryMenu] =
    useRestaurantMenu(resId);

  if (!restraurantDetails) return <ShimmerCard />;
  if (allCategoryMenu.length === 0) return <ShimmerCard />;

  console.log(`toggleMenuStatus`, toggleMenuStatus);
  return (
    <div className="restraurant-details">
      <h1>{restraurantDetails.name}</h1>
      <RestbreifCard restraurantDetails={restraurantDetails} />

      <div className="all-menu" style={{ padding: "20px 0px" }}>
        {allCategoryMenu.map((category) => {
          return (
            <div key={category.card.card.title} className="category-card">
              <hr></hr>
              <RestCategoryTitle
                category={category}
                toggleMenuStatus={toggleMenuStatus}
                setToggleMenuStatus={setToggleMenuStatus}
              />
              {toggleMenuStatus[category.card.card.title] && (
                <div>
                  {category.card.card.itemCards.map((menu) => {
                    return (
                      <div key={menu.card.info.id}>
                        <RecommendedMenuCard menu={menu.card.info} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
