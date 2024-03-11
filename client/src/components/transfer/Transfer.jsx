import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import "./transfer.css";

const Transfer = () => {
  return (
    <div className="transferContainer">
      <form className="transferContainerInputs">
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaLocationDot className="transferIcon" />
            <h3>Origin</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Enter place of exit"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaLocationDot className="transferIcon" />
            <h3>Destination</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Enter your destination"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCalendarAlt className="transferIcon"/>
            <h3>Date of arrival </h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Enter Arrival Date"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <IoTime className="transferIcon"/>
            <h3>Arrival time</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Enter Time of Arrival"
          />
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaUsers className="transferIcon"/>
            <h3>Number of people</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Enter the number of people"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <BiSolidCategory className="transferIcon"/>
            <h3>Category</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Category"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCarSide className="transferIcon"/>
            <h3>Tipo de traslado</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Tipo de traslado"
          />
        </div>
        <div className="transferInputs">
          <button className="transferButton">Solicitar</button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
