import { IMG_CON_URL } from "../config";

const ImageCard = ({
  name,
  avgRating,
  locality,
  cloudinaryImageId,
  cuisines,
}) => {
  return (
    <div className="h-72 shadow-md w-72 border-2 m-1 hover:scale-105 rounded-md p-3">
      <img className="h-24 w-24 rounded-md" src={IMG_CON_URL + cloudinaryImageId} alt="fljslfj" />
 
      <h3 className="text-lg font-semibold">{name}</h3>

      <h4>Avg rating = {avgRating}</h4>
      {/* <h4>Cost for two = {restuarants[0].info.costForTwo}</h4> */}
      <h4> {locality}</h4>

      <h4>{cuisines.join(" ")}</h4>
    </div>
  );
};

export default ImageCard;
