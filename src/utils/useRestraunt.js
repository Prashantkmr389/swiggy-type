import { useState, useEffect } from "react";


const useRestraunt = (resId) =>{
    const [info, setInfo] = useState([]);
    const [recommended, setRecommended] = useState([]);
    useEffect(() => {
        console.log('Ha bhaiiyaa yha aa gaye')
        getRestauranMenu();
    }, []);

    async function getRestauranMenu() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6188555&lng=85.1768585&restaurantId=" +
            resId
        );

        const response = await data.json();
        console.log(response);
        const alldetails = response?.data?.cards;
        const restdetails = alldetails[0];
        const menudetails = alldetails[2];

        setInfo(restdetails?.card?.card?.info);
        // console.log(restdetails?.card?.card?.info);
        const recom =
            menudetails?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
            ?.itemCards;

        setRecommended(recom);
        // console.log(recom);
    // console.log(alldetails);
    }
    return [info, recommended];


     
}

export default useRestraunt;