import RestCard, { withTopRatedRest } from "./RestCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [restraurantList, setrestraurantList] = useState([]);
  const [filteredRestraurantList, setFilteredrestraurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  //higher order component call
  const RestCardTopRated = withTopRatedRest(RestCard);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    setrestraurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestraurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(`data fetched`);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
    console.log(`getloaction`);
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchData();
    }
  }, [location]);

  // if (restraurantList.length === 0) return <ShimmerUI />;

  return (
    <div className="body">
      <div className="search">
        <div>
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restraurantList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredrestraurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restraurantList.filter(
              (restraurant) => restraurant?.info?.avgRatingString > 4.2
            );
            setFilteredrestraurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {restraurantList.length === 0 ? (
          <ShimmerUI />
        ) : (
          filteredRestraurantList.map((res) => {
            return res.info.avgRating > 4.2 ? (
              <Link to={`/restaurants/${res?.info?.id}`} key={res?.info?.id}>
                <RestCardTopRated resData={res} />
              </Link>
            ) : (
              <Link to={`/restaurants/${res?.info?.id}`} key={res?.info?.id}>
                <RestCard resData={res} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
