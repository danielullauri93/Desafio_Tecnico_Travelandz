import { IoIosAirplane } from "react-icons/io";
import {FaUser } from "react-icons/fa"
import { MdLogin } from "react-icons/md"

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <IoIosAirplane className="navLogo"/>
          <span>TRAVELANDZ</span>
        </span>
        <div className="navItems">
          <button className="navButton">
            <FaUser className="navIcon"/>
          </button>
          <button className="navButton">
            <MdLogin className="navIcon"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
