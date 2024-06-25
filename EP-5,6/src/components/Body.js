import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
//2. Body Component
const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurantList, setFilterRestaurantList] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async()=>{
        const data= await fetch(SWIGGY_URL);
        const json = await data.json();
        console.log("json"+json);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log("reslist"+restaurantList);
    return restaurantList.length==0? <Shimmer/>:<div className="body">
        <div className="res-search">
            <input className="input" value={searchName} onChange={(e)=>{
                setSearchName(e.target.value);
            }}></input>
            <button className="search-btn" onClick={(e)=>{
                const filterList =restaurantList.filter(res=>res.info.name.toLowerCase().includes(searchName.toLowerCase()));
                setFilterRestaurantList(filterList);
            }}>search</button>
            <button className="fiter-btn" onClick={()=>{
                const filterList =restaurantList.filter(s=>s.info.avgRating>4.5);
                setFilterRestaurantList(filterList);
            }}>TopRatedrestaurants</button>
        </div>
        
        <div className="res-container">
            {
                filterRestaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}
export default Body;