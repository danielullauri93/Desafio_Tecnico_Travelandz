import { useState, useEffect } from "react";
import axios from "axios";

const useCountryOptions = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("/api/countries");
        setCountryOptions(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filterOptions = (inputValue, allOptions, setFilteredOptions) => {
    const filteredOptions = allOptions.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const filterOriginOptions = (inputValue, setFilteredOriginOptions) => {
    filterOptions(inputValue, countryOptions, setFilteredOriginOptions);
  };

  return {
    countryOptions,
    loading,
    error,
    filterOriginOptions,
  };
};

export default useCountryOptions;
