import { useState } from "react";
import axios from "axios";
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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTransferType, setSelectedTransferType] = useState("");
  const {
    category,
    loading: categoryLoading,
    error: categoryError,
  } = useCategoryOptions();

  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState({
    originName: "",
    terminalName: "",
    arrivalDate: startDate,
    arrivalTime: 0,
    numAdults: 0,
    numChildren: 0,
    categoryName: "",
    transferName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/data/transfer",
        formData
      );
      if (response.status === 200) {
        console.log("Data saved successfully");
      } else {
        console.error("Error saving data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimeChange = (newTime) => {
    // Convierte la hora en milisegundos a una instancia de Date
    let date = new Date(newTime * 1000);
    // Obtiene las horas, minutos y segundos de la instancia de Date
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // Formatea la hora en una cadena de texto en el formato HH:mm:ss
    let timeString = `${hours}:${minutes}:${seconds}`;
    // Actualiza el estado formData con la nueva hora formateada
    setFormData({ ...formData, arrivalTime: timeString });
  };

  return (
    <div className="transferContainer">
      <form className="transferContainerInputs" onSubmit={handleSubmit}>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaLocationDot className="transferIcon" />
            <h3>Origen</h3>
          </label>
          <input
            type="text"
            list="originOptions"
            name="originName"
            className="form-select transferInput"
            value={selectedOriginCountry}
            onChange={(e) => {
              setSelectedOriginCountry(e.target.value);
              handleChange(e);
            }}
            placeholder="Select origin country"
          />
          <datalist id="originOptions" className="transferInput">
            {countryOptions.map((country) => (
              <option key={country.code} value={`${country.name}`} />
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
            name="terminalName"
            className="form-select transferInput"
            value={selectedTerminal}
            onChange={(e) => {
              setSelectedTerminal(e.target.value);
              handleChange(e);
            }}
            placeholder="Select terminal"
          />
          <datalist id="terminalOptions" className="transferInput">
            {terminalOptions.map((terminal) => (
              <option key={terminal.code} value={`${terminal.description}`} />
            ))}
          </datalist>
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <FaCalendarAlt className="transferIcon" />
            <h3>Fecha de llegada </h3>
          </label>
          <DatePicker
            name="arrivalDate"
            className="transferInput"
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setStartDate(date);
              handleChange({ target: { name: "arrivalDate", value: date } });
            }}
          />
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <IoTime className="transferIcon" />
            <h3>Hora de llegada</h3>
          </label>
          <TimePicker
            name="arrivalTime"
            className="transferInput"
            format={24}
            start="00:00"
            end="23:55"
            step={15}
            onChange={handleTimeChange}
            value={formData.arrivalTime}
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
              name="numAdults"
              type="number"
              min="0"
              value={formData.numAdults}
              onChange={handleChange}
            />
          </div>
          <div className="numPeopleInput">
            <label>Niños:</label>
            <input
              name="numChildren"
              type="number"
              min="0"
              value={formData.numChildren}
              onChange={handleChange}
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
            name="categoryName"
            className="form-select transferInput"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              handleChange(e);
            }}
            placeholder="Select category"
          />
          <datalist id="categories" className="transferInput">
            {category.map((categories) => (
              <option key={categories.name} value={`${categories.name}`} />
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
            name="transferName"
            className="form-select transferInput"
            value={selectedTransferType}
            onChange={(e) => {
              setSelectedTransferType(e.target.value);
              handleChange(e);
            }}
            placeholder="Select transfer type"
          />
          <datalist id="transferTypes" className="transferInput">
            {transferType.map((type) => (
              <option key={type.code} value={`${type.name}`} />
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
