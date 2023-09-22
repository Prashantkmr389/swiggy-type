import { IMG_CON_URL } from "../config";

const ImageCard = ({
  name,
  avgRating,
  locality,
  cloudinaryImageId,
  cuisines,
}) => {
  return (
    <div className="imagecard">
      <img src={IMG_CON_URL + cloudinaryImageId} alt="fljslfj" />

      <h3>{name}</h3>

      <h4>Avg rating = {avgRating}</h4>
      {/* <h4>Cost for two = {restuarants[0].info.costForTwo}</h4> */}
      <h4> {locality}</h4>

      <h4>{cuisines.join(" ")}</h4>
    </div>
  );
};

export default ImageCard;
