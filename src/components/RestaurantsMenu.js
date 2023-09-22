import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import MenuCard from "../cards/MenuCard";
import "../styles/RestaurantsMenu.css";
import useRestraunt from "../utils/useRestraunt";



const RestaurantsMenu = () => {
  const {id} = useParams();
  const [info, recommended]  = useRestraunt(id);
  return (
    <div className="restraunt-menu-page">
      <div className="details">
        <img src={IMG_CON_URL + info.cloudinaryImageId} alt="" />
        <h1>{info.name}</h1>
        <h2>{info.areaName}</h2>
        <h2>{info.city}</h2>
        <h3>Avg raing : {info.avgRating}</h3>
        <h3>Cost for two : {info.costForTwo}</h3>
      </div>
      <div className="menuall">
        {recommended.map((item) => {
          return (
            <MenuCard
              name={item?.card?.info?.name}
              imageId={item?.card?.info?.imageId}
              key={item?.card?.info?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
