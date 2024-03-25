//useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";
import { TaskProps } from "../components/Task";

function useFetch(url) {
  const [data, setData] = useState<TaskProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.

        // console.log(res);
        
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("ERROR " + err);
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
