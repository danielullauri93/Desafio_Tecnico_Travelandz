import { useState, useEffect } from "react";
import axios from "axios";

const useTransferTypeOptions = () => {
  const [transferType, setTransferType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransferType = async () => {
      try {
        const response = await axios.get("/api/transferTypes");
        setTransferType(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTransferType();
  }, []);

  return { transferType, loading, error };
};

export default useTransferTypeOptions;
