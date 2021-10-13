import { useCallback, useEffect, useState } from "react";
import api from "../utils/api";

export function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await api(url, options);
      setResponse(res);
    } catch (error) {
      setError(error);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error };
}
