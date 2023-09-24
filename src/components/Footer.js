import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return(
    <div className=" bg-gray-800 text-white py-4 text-center">
      <h1>Created by {user.name} with ❤️{user.email} </h1>
    </div>
  )
}


export default Footer;