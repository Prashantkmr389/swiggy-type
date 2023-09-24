import Header from "./components/Header"
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import useOnline from "./utils/useOnline";
import { useState} from "react";
import UserContext from "./utils/userContext";
import store from "./utils/store";
import { Provider } from "react-redux";


const App = () => {
  const [globalUser, setGlobalUser] = useState({name:"prashant Kumar", email : "hello@gmail.com"});
 
  const isOnline = useOnline();
  if(!isOnline){
    return <h1 className="text-5xl font-extrabold">you are offline</h1>
  }
  return (
    <Provider store = {store}>
      <UserContext.Provider
        value={{ user: globalUser, setGlobalUser:setGlobalUser}}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            {/* <UserContext.Provider value={{user : headerUser, setHeaderUser:setHeaderUser}}> */}
            <Header />
            {/* </UserContext.Provider> */}
            <Outlet />
          </div>
          {/* <UserContext.Provider value={{user : footerUser, setFooterUser:setFooterUser}}> */}
          <Footer />
          {/* </UserContext.Provider> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
}



export default App;
