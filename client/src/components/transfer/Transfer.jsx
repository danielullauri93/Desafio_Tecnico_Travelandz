// Transfer.jsx
import React, { useState } from "react";
import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoTime, IoAirplane } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import "./transfer.css";
import useCountryOptions from "../../hooks/useCountryOptions.js";
import useTerminalOptions from "../../hooks/useTerminalOptions.js";

const Transfer = () => {
  const { filteredOriginOptions, filterOriginOptions } = useCountryOptions();
  const { filteredTerminalOptions, filterTerminalOptions } =
    useTerminalOptions();
  const [selectedOriginCountry, setSelectedOriginCountry] = useState("");
  const [selectedTerminal, setSelectedTerminal] = useState("");

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
            <IoAirplane className="transferIcon" />
            <h3>Terminal</h3>
          </label>
          <div className="transferInputContainer">
            <input
              type="text"
              className="transferInput"
              value={selectedTerminal}
              onChange={(e) => setSelectedTerminal(e.target.value)}
              placeholder="Search destination country"
              onInput={(e) => filterTerminalOptions(e.target.value)}
            />
            <select
              className="transferSelect"
              value={selectedTerminal}
              onChange={(e) => setSelectedTerminal(e.target.value)}
            >
              {filteredTerminalOptions.map((terminal) => (
                <option key={terminal.id} value={terminal.description}>
                  {/* Aquí debería ser terminal.description en lugar de country.description */}
                  {terminal.description}
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
