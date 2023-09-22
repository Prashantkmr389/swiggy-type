import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import MenuCard from "../cards/MenuCard";
import { useState,useEffect } from "react";
import useRestraunt from "../utils/useRestraunt";



const RestaurantsMenu = () => {
  const {id} = useParams();
  const [info, recommended]  = useRestraunt(id);
  // const [info, setInfo] = useState([]);
  // const [recommended, setRecommended] = useState([]);
  // useEffect(() => {
  //   // console.log("Ha bhaiiyaa yha aa gaye");
  //   getRestauranMenu();
  // }, []);

  // async function getRestauranMenu() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6188555&lng=85.1768585&restaurantId="+id
  //   );

  //   const response = await data.json();
  //   // console.log(response);
  //   const alldetails = response?.data?.cards;
  //   // console.log(alldetails)
  //   const restdetails = alldetails[0];
  //   const menudetails = alldetails[2];
  //     // console.log(menudetails)
  //   setInfo(restdetails?.card?.card?.info);
  //   console.log(restdetails?.card?.card?.info);
  //   const recom =
  //     menudetails?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.itemCards;

  //   setRecommended(recom);
  //   // console.log(recom);
  //   // return [info, recommended];
  // }

  // const [info, recommended] = useRestraunt(id)

  return (
    <div>
    
      <img src={IMG_CON_URL + info.cloudinaryImageId} alt="" />
      <h1>{info.name}</h1>
      <h2>{info.areaName}</h2>
      <h2>{info.city}</h2>
      <h3>Avg raing : {info.avgRating}</h3>
      <h3>Cost for two : {info.costForTwo}</h3>
      {
        recommended.map((item)=>{
          return (
            <MenuCard name = {item?.card?.info?.name}  imageId ={item?.card?.info?.imageId} key ={item?.card?.info?.id} />
          )
        })
      }
    </div>
  );
};

export default RestaurantsMenu;
