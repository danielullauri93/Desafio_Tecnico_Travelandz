// Transfer.jsx
import React, { useState } from "react";
import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import "./transfer.css";
import useCountryOptions from "../../hooks/useCountryOptions.js";

const Transfer = () => {
  const {
    filteredOriginOptions,
    filteredDestinationOptions,
    filterOriginOptions,
    filterDestinationOptions,
  } = useCountryOptions();
  const [selectedOriginCountry, setSelectedOriginCountry] = useState("");
  const [selectedDestinationCountry, setSelectedDestinationCountry] =
    useState("");

  return (
    <div className="transferContainer">
      <form className="transferContainerInputs">
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaLocationDot className="transferIcon" />
            <h3>Origin</h3>
          </label>
          <div className="transferInputContainer">
            <input
              type="text"
              className="transferInput"
              value={selectedOriginCountry}
              onChange={(e) => setSelectedOriginCountry(e.target.value)}
              placeholder="Search origin country"
              onInput={(e) => filterOriginOptions(e.target.value)}
            />
            <select
              className="transferSelect"
              value={selectedOriginCountry}
              onChange={(e) => setSelectedOriginCountry(e.target.value)}
            >
              {filteredOriginOptions.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaLocationDot className="transferIcon" />
            <h3>Destination</h3>
          </label>
          <div className="transferInputContainer">
            <input
              type="text"
              className="transferInput"
              value={selectedDestinationCountry}
              onChange={(e) => setSelectedDestinationCountry(e.target.value)}
              placeholder="Search destination country"
              onInput={(e) => filterDestinationOptions(e.target.value)}
            />
            <select
              className="transferSelect"
              value={selectedDestinationCountry}
              onChange={(e) => setSelectedDestinationCountry(e.target.value)}
            >
              {filteredDestinationOptions.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCalendarAlt className="transferIcon" />
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
            <IoTime className="transferIcon" />
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
            <FaUsers className="transferIcon" />
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
            <BiSolidCategory className="transferIcon" />
            <h3>Category</h3>
          </label>
          <input type="text" className="transferInput" placeholder="Category" />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCarSide className="transferIcon" />
            <h3>Type of transfer</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Type of transfer"
          />
        </div>
        <div className="transferInputs Button">
          <button type="submit" className="transferButton">
            Solicitar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
