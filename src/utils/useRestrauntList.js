import { useState, useEffect } from "react";

const useRestrauntList = () => {
    const [restuarantList, setRestuarantList] = useState([]);
    const [restuarants, setResturants] = useState([]);
    useEffect(() => {
      getRestuarantList();
    }, []);

    async function getRestuarantList() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6188555&lng=85.1768585&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      console.log(response);
      const restuarantList =
        response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestuarantList(restuarantList);
      setResturants(restuarantList);
    }
    return [restuarantList, restuarants, setResturants];

}

export default useRestrauntList;