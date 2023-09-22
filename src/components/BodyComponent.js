import { useState} from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import ImageCard from "../cards/ImageCard";
import { filterResturant } from "../utils/helper";
import useRestrauntList from "../utils/useRestrauntList";

const BodyComponent = () => {
    const [restuarantList, restuarants, setResturants] =
      useRestrauntList();
    const [searchText, setSearchText] = useState("");
    return restuarantList.length === 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="searchInput">
          <input
            type="text"
            name=""
            id=""
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="searchBtn">
          <button
            onClick={() => {
              const data = filterResturant(restuarantList, searchText);
              setResturants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="restuarant">
            {
              restuarants.length === 0 ? <h1>No Restuarant Found</h1> :
                restuarants.map((restuarant) => (
                  <Link to={"/restaurant/"+restuarant.info.id} key={restuarant.info.id}>
                  <ImageCard {...restuarant.info}  />
                  </Link>
                ))
                
            }
          
        </div>
      </>
    );
}


export default BodyComponent;
