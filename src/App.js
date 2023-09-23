import Header from "./components/Header"
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import useOnline from "./utils/useOnline";

const App = () => {
  const isOnline = useOnline();
  if(!isOnline){
    return <h1>you are offline</h1>
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}



export default App;
