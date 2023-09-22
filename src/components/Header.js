import { Link } from "react-router-dom";

const Header = () => (
  <div className="navBar">
    <div>
      <h1>Swiggy</h1>
    </div>
  
    <div className="rightSide">
      <h3><Link to={'/'}>Home</Link></h3>
      
      <h3><Link to={'/about'}>About</Link></h3>
      <h3><Link to={'/contact'}>Contact</Link></h3>
      <h3><Link to={'/instamart'}>Instamart</Link></h3>
      <h3>Cart</h3>
    </div>
    {/* this is header */}
  </div>
);

export default Header;

