import { Link } from "react-router-dom";

const Header = () => (
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
      <h3 className="m-2 font-semibold px-0.5">Cart</h3>
    </div>
    {/* this is header */}
  </div>
);

export default Header;

