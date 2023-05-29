import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, error, loading };
};

export default useAxios;
