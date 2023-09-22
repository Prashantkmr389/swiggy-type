import './App.css';




import Header from "./components/Header"
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';


const App = () => (
  <>
    <Header />
    <Outlet/>
    <Footer />
  </>
);



export default App;
