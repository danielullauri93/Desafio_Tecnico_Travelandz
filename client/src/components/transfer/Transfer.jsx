import React, { useState } from "react";
import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { IoTime, IoAirplane } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import "./transfer.css";
import useCountryOptions from "../../hooks/useCountryOptions.js";
import useTerminalOptions from "../../hooks/useTerminalOptions.js";
import useTransferTypeOptions from "../../hooks/useTransferTypeOptions.js";
import useCategoryOptions from "../../hooks/useCategoryOptions.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-bootstrap-time-picker";

const Transfer = () => {
  const {
    countryOptions,
    loading: countryLoading,
    error: countryError,
  } = useCountryOptions();
  const {
    terminalOptions,
    loading: terminalLoading,
    error: terminalError,
  } = useTerminalOptions();
  const [selectedOriginCountry, setSelectedOriginCountry] = useState("");
  const [selectedTerminal, setSelectedTerminal] = useState("");
  const { transferType } = useTransferTypeOptions();
  const [selectedTransferType, setSelectedTransferType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    category,
    loading: categoryLoading,
    error: categoryError,
  } = useCategoryOptions();

  const [startDate, setStartDate] = useState(new Date());

  const [time, setTime] = useState(0);
  const handleTimeChange = (newTime) => {
    console.log(newTime);
    setTime(newTime);
  };

  const [numAdults, setNumAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  return (
    <div className="transferContainer">
      <form className="transferContainerInputs">
        {/* Origin */}
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaLocationDot className="transferIcon" />
            <h3>Origen</h3>
          </label>
          <input
            type="text"
            list="originOptions"
            className="form-select transferInput"
            value={selectedOriginCountry}
            onChange={(e) => setSelectedOriginCountry(e.target.value)}
            placeholder="Select origin country"
          />
          <datalist id="originOptions" className="transferInput">
            {countryOptions.map((country) => (
              <option key={country.code} value={country.name} />
            ))}
          </datalist>
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <IoAirplane className="transferIcon" />
            <h3>Terminal</h3>
          </label>
          <input
            type="text"
            list="terminalOptions"
            className="form-select transferInput"
            value={selectedTerminal}
            onChange={(e) => setSelectedTerminal(e.target.value)}
            placeholder="Select terminal"
          />
          <datalist id="terminalOptions" className="transferInput">
            {terminalOptions.map((terminal) => (
              <option key={terminal.id} value={terminal.description} />
            ))}
          </datalist>
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCalendarAlt className="transferIcon" />
            <h3>Fecha de llegada </h3>
          </label>
          <DatePicker
            className="transferInput"
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <IoTime className="transferIcon" />
            <h3>Hora de llegada</h3>
          </label>
          <TimePicker
            className="transferInput"
            format={24}
            onChange={handleTimeChange}
            value={time}
          />
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaUsers className="transferIcon" />
            <h3>Número de personas</h3>
          </label>
          <div className="numPeopleInput">
            <label>Adultos:</label>
            <input
              type="number"
              min="0"
              value={numAdults}
              onChange={(e) => setNumAdults(e.target.value)}
            />
          </div>
          <div className="numPeopleInput">
            <label>Niños:</label>
            <input
              type="number"
              min="0"
              value={numChildren}
              onChange={(e) => setNumChildren(e.target.value)}
            />
          </div>
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <BiSolidCategory className="transferIcon" />
            <h3>Categorías</h3>
          </label>
          <input
            type="text"
            list="categories"
            className="form-select transferInput"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            placeholder="Select category"
          />
          <datalist id="categories" className="transferInput">
            {category.map((categories) => (
              <option key={categories.code} value={categories.name} />
            ))}
          </datalist>
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCarSide className="transferIcon" />
            <h3>Tipo de traslado</h3>
          </label>
          <input
            type="text"
            list="transferTypes"
            className="form-select transferInput"
            value={selectedTransferType}
            onChange={(e) => setSelectedTransferType(e.target.value)}
            placeholder="Select transfer type"
          />
          <datalist id="transferTypes" className="transferInput">
            {transferType.map((type) => (
              <option key={type.code} value={type.name} />
            ))}
          </datalist>
        </div>

        <div className="transferInputs button">
          <button type="submit" className="transferButton">
            Solicitar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
