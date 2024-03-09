import { useState } from "react";
import { FaCar, FaHotel, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { IoIosAirplane, IoIosMenu } from "react-icons/io";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaCar />
            <span className="headerListTitle">Transfer</span>
          </div>
        </div>

        <form className="headerSearch">
          <div className="headerSearchItem">
            <FaMapLocationDot className="headerIcon" />
            <input
              type="text"
              class="headerSearchText"
              placeholder="Countries"
            />
          </div>
          <div className="headerSearchItem">
            <IoIosAirplane className="headerIcon" />
            <input type="text" class="headerSearchText" placeholder="Aiports" />
          </div>
          <div className="headerSearchItem">
            <FaLocationDot className="headerIcon" />
            <input
              type="text"
              class="headerSearchText"
              placeholder="Destinations"
            />
          </div>
          <div className="headerSearchItem">
            <IoIosMenu className="headerIcon" />
            <input
              type="text"
              class="headerSearchText"
              placeholder="Categories"
            />
          </div>
          <div className="headerSearchItem">
            <FaCar className="headerIcon" />
            <input type="text" class="headerSearchText" placeholder="Cars" />
          </div>
          <div className="headerSearchItem">
            <IoIosMenu className="headerIcon" />
            <input
              type="text"
              class="headerSearchText"
              placeholder="Type of transfer"
            />
          </div>
          <div className="headerSearchItem">
            <FaHotel className="headerIcon" />
            <input type="text" class="headerSearchText" placeholder="Hotels" />
          </div>
          <div className="headerSearchItem">
            <button type="submit" className="headerBtn">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
