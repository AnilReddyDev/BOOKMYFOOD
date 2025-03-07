/**
 * A custom hook to fetch restaurant details and menu items
 * from the Swiggy API..
 */
import { RES_MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [restraurantDetails, setRestraurantDetails] = useState({});
  const [RecommendedMenu, setRecommendedMenu] = useState([]);
  const [allCategoryMenu, setAllCategoryMenu] = useState([]);
  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL + resId);

    const json = await data.json();
    const {
      name,
      city,
      areaName,
      avgRating,
      costForTwoMessage,
      totalRatingsString,
      sla,
      cuisines,
    } = json.data.cards[2].card.card.info;

    const category =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (card) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setRestraurantDetails({
      name,
      city,
      areaName,
      avgRating,
      costForTwoMessage,
      totalRatingsString,
      sla,
      cuisines,
    });
    setRecommendedMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setAllCategoryMenu(category);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [restraurantDetails, RecommendedMenu, allCategoryMenu];
};

export default useRestaurantMenu;
