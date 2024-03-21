import { useState, useEffect } from "react";
import axios from "axios";

const useTerminalOptions = () => {
  const [terminalOptions, setTerminalOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerminals = async () => {
      try {
        const response = await axios.get("/api/terminals");
        setTerminalOptions(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTerminals();
  }, []);

  return { terminalOptions, loading, error };
};

export default useTerminalOptions;
