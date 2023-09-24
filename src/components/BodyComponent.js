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
        <div className="h-10 m-2">
          <input
            type="text"
            name=""
            id=""
            className="shadow-md hover:scale-110 border-2 border-sky-300 rounded-md w-1/3 h-10 mx-5"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const data = filterResturant(restuarantList, searchText);
              setResturants(data);
            }}
          >
            Search
          </button>
          
        </div>
        <div className="flex flex-wrap justify-center">
          {restuarants.length === 0 ? (
            <h1>No Restuarant Found</h1>
          ) : (
            restuarants.map((restuarant) => (
              <Link
                to={"/restaurant/" + restuarant.info.id}
                key={restuarant.info.id}
              >
                <ImageCard {...restuarant.info} />
              </Link>
            ))
          )}
        </div>
      </>
    );
}


export default BodyComponent;
