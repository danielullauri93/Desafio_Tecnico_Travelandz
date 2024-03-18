// useCountryOptions.js
import { useState, useEffect } from "react";
import axios from "axios";

const useCountryOptions = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [filteredOriginOptions, setFilteredOriginOptions] = useState([]);
  // const [filteredDestinationOptions, setFilteredDestinationOptions] = useState(
  //   []
  // );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("/api/countries");
        const countries = response.data;
        setCountryOptions(countries);
        setFilteredOriginOptions(countries);
        // setFilteredDestinationOptions(countries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const filterOptions = (inputValue, setFilteredOptions) => {
    const filteredOptions = countryOptions.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const filterOriginOptions = (inputValue) => {
    filterOptions(inputValue, setFilteredOriginOptions);
  };

  // const filterDestinationOptions = (inputValue) => {
  //   filterOptions(inputValue, setFilteredDestinationOptions);
  // };

  return {
    filteredOriginOptions,
    // filteredDestinationOptions,
    filterOriginOptions,
    // filterDestinationOptions,
  };
};

export default useCountryOptions;
