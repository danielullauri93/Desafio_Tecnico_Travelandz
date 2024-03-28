import React, { useState, useEffect } from "react";
import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { LuBaggageClaim } from "react-icons/lu";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./list.css";

const List = () => {
  const [latestTransfer, setLatestTransfer] = useState(null);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getList");
      const transfers = response.data.data;
      const latestTransfer =
        transfers.length > 0 ? transfers[transfers.length - 1] : null;
      latestTransfer.arrival_date = latestTransfer.arrival_date.split("T")[0];
      setLatestTransfer(latestTransfer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="listContainer">
        {latestTransfer && (
          <div className="listCardContainer">
            <div className="listCardImg">
              <img src="" alt="Car Model" />
            </div>
            <div className="listCardInfo">
              <div className="listInfoUser">
                <BiSolidCategory className="listInfoIcon" />
                <label htmlFor="">
                  Category: <h4>{latestTransfer.category_name}</h4>
                </label>
              </div>

              <div className="listInfoUser">
                <FaCarSide className="listInfoIcon" />
                <label htmlFor="">Car model: </label>
              </div>

              <div className="listInfoUser">
                <FaLocationDot className="listInfoIcon" />
                <label htmlFor="">
                  Address: <h4>{latestTransfer.terminal_name}</h4>
                </label>
              </div>

              <div className="listInfoUser">
                <FaCalendarAlt className="listInfoIcon" />
                <label htmlFor="">
                  Date: <h4>{latestTransfer.arrival_date}</h4>
                </label>
              </div>

              <div className="listInfoUser">
                <IoTime className="listInfoIcon" />
                <label htmlFor="">
                  Time: <h4>{latestTransfer.arrival_time}</h4>
                </label>
              </div>

              <div className="listInfoUser">
                <IoTime className="listInfoIcon" />
                <label htmlFor="">
                  Duration: <h4>4:00</h4>{" "}
                </label>
              </div>
            </div>

            <div className="listCardBag">
              <div className="listCardUsers">
                <FaUsers className="listInfoIcon" />
                <label htmlFor="">Adults: {latestTransfer.num_adults}</label>
              </div>
              <div className="listCardBags">
                <LuBaggageClaim className="listInfoIcon" />
                <label htmlFor="">Children: {latestTransfer.num_child}</label>
              </div>
            </div>

            <div className="listCardButton">
              {/* <span classNamen=""></span> */}
              <button className="listCardB">Comprar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
