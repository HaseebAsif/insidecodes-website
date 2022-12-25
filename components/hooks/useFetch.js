const { useState, useEffect } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDaa = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDaa();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
