import { createContext } from "react";

const UserContext = createContext({user:{
    name:"Prashant Kumar",
    email:"Prashantkmr@gmail.com"
}});

export default UserContext;
