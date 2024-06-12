import { useState, useEffect } from "react";

const useRestrauntList = () => {
    const [restuarantList, setRestuarantList] = useState([]);
    const [restuarants, setResturants] = useState([]);
    useEffect(() => {
      getRestuarantList();
    }, []);

    async function getRestuarantList() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      console.log(response);
      
      const t =
        response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(t)
      setRestuarantList(t);
      setResturants(t);
    }
    return [restuarantList, restuarants, setResturants];

}

export default useRestrauntList;