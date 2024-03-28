import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { LuBaggageClaim } from "react-icons/lu";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";




const List = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="listContainer">
        <div className="listCardImg">
          <img src="" alt="Car Model" />
        </div>
        <div className="listCardContainer">
          
          <div className="listCardInfo">

            <div className="listInfoUser">
              <BiSolidCategory className="listInfoIcon"/>
              <label htmlFor="">Category: <h4>Private</h4></label>
            </div>

            <div className="listInfoUser">
              <FaCarSide className="listInfoIcon"/>
              <label htmlFor="">Car model: </label>
            </div>

            <div className="listInfoUser">
              <FaLocationDot className="listInfoIcon"/>
              <label htmlFor="">Address: </label>
            </div>

            <div className="listInfoUser">
              <FaCalendarAlt className="listInfoIcon"/>
              <label htmlFor="" >Date: </label>
            </div>

            <div className="listInfoUser">
              <IoTime className="listInfoIcon"/>
              <label htmlFor="">Time: </label>
            </div>

            <div className="listInfoUser">
              <IoTime className="listInfoIcon"/>
              <label htmlFor="">Duration: <h4>4:00</h4> </label>
            </div>

          </div>

          <div className="listCardBag">

            <div className="listCardUsers">
              <FaUsers className="listInfoIcon"/>
              <label htmlFor="">2</label>
            </div>
            <div className="listCardBags">
              <LuBaggageClaim className="listInfoIcon"/>
              <label htmlFor="">3</label>
            </div>

          </div>

          <div className="listCardButton">
            {/* <span classNamen=""></span> */}
            <button className="listCardB">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
