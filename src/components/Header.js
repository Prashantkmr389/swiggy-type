import { Link } from "react-router-dom";
// import {useContext } from "react";
// import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () =>{ 
  // const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items)
  // console.log("cartItems:", cartItems)
  return (
    <div className="flex justify-between bg-slate-500 h-14">
      <div className="m-2">
        <h1 className="text-2xl font-bold">Swiggy</h1>
      </div>

      <div className="flex">
        <h3 className="m-2 font-semibold">
          <Link to={"/"} className="px-1 hover:text-cyan-100 hover:shadow-md">
            Home
          </Link>
        </h3>

        <h3 className="m-2 font-semibold ">
          <Link
            to={"/about"}
            className="px-1 hover:text-cyan-100 hover:shadow-md"
          >
            About
          </Link>
        </h3>
        <h3 className="m-2 font-semibold">
          <Link
            to={"/contact"}
            className="px-1 hover:text-cyan-100 hover:shadow-md"
          >
            Contact
          </Link>
        </h3>
        <h3 className="m-2 font-semibold">
          <Link
            to={"/instamart"}
            className="px-1 hover:text-cyan-100 hover:shadow-md"
          >
            Instamart
          </Link>
        </h3>

        <h3 className="m-2 font-semibold">
          <Link
            to={"/cart"}
            className="px-1 hover:text-cyan-100 hover:shadow-md"
          >
            Cart
          </Link>
          {cartItems.length}
        </h3>
      </div>
      {/* {user.name} - {user.email} */}
      {/* this is header */}
      {/* <div className="mx-4">cart - {cartItems.length}</div> */}
    </div>
  );}

export default Header;

