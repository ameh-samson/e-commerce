import "./NavBar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
    </div>
  );
};

export default NavBar;
