import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import ImageCard from "../cards/ImageCard";
import { filterResturant } from "../utils/helper";

const BodyComponent = () => {
    const [restuarantList, setRestuarantList] = useState([])
    const [searchText, setSearchText] = useState("");
    const [restuarants, setResturants] = useState([]);
    useEffect(()=>{
      getRestuarantList();
    }, [])

    async function getRestuarantList(){
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6188555&lng=85.1768585&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      // console.log(response);
      const restuarantList =
        response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestuarantList(restuarantList);
      setResturants(restuarantList);
      console.log(restuarantList);
    }


    console.log("Hello")
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
// const BodyComponent =() =>{
//   return (
//     <div>
//       this is body
//     </div>
//   )
// }

// export default BodyComponent