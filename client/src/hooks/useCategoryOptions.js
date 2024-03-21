import { useState, useEffect } from "react";
import axios from "axios";

const useCategoryOptions = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("api/categories");
        setCategory(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  return {category, loading, error};
};

export default useCategoryOptions;
