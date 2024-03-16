import { IoIosAirplane } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <IoIosAirplane className="navLogo" />
          <h1>TRAVELANDZ</h1>
        </div>
        <div className="navItems">
          <button className="navButton">
            <FaUser className="navIcon"/>
            <MdLogin className="navIcon"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
