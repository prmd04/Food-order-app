import CardElemet from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUi";
import useOnlineStatus from "../util/useOnlineStatus";
import { Link } from "react-router-dom";

const BodyElement = () => {
  const [restaurant, setrestaurant] = useState([]);

  const [fileterResta,setfileterResta] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();


    setrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    setfileterResta (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like your are offline.. Please chake your internet connection</h1>

  return restaurant.length === 0 ? (
    <Shimmer /> //ternary operator use
  ) : (
    <div className="heading">
      <div className="btn-container">
        <input className="ml-4 border border-black"
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="btn-primary ml-2"
          onClick={() => {
            const filteredRestaurants = restaurant.filter((resta) =>
              resta.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfileterResta(filteredRestaurants);
          }}
        >
          Search
        </button>

        <button
          className="btn-filter m-8"
          onClick={() => {
            let fileterd = restaurant.filter(
              (resta) => resta.info.avgRatingString > 4.0
            );
            console.log(fileterd);
            setfileterResta(fileterd);
          }}
        >
          Filter
        </button>
      </div>
      <div className="flex flex-wrap">
        {fileterResta.map((resta) => {
          return <Link key={resta.info.id} to={"/restaurant/"+resta.info.id}><CardElemet  data={resta} /></Link>;
        })}
      </div>
    </div>
  );
};

export default BodyElement;
