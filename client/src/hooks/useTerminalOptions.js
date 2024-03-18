import { useState, useEffect } from "react";
import axios from "axios";

const useTerminalOptions = () => {
  const [terminalOptions, setTerminalOptions] = useState([]);
  const [filteredTerminalOptions, setFilteredTerminalOptions] = useState([]);

  useEffect(() => {
    const fetchTerminals = async () => {
      try {
        const response = await axios.get("/api/terminals");
        const terminals = response.data;
        setTerminalOptions(terminals);
        setFilteredTerminalOptions(terminals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTerminals();
  }, []);

  const filterOptions = (inputValue, setFilteredOptions) => {
    const filteredOptions = countryOptions.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const filterDestinationOptions = (inputValue) => {
    filterOptions(inputValue, setFilteredTerminalOptions);
  };

  return {
    filteredTerminalOptions,
    filterDestinationOptions,
  };
};

export default useTerminalOptions;
