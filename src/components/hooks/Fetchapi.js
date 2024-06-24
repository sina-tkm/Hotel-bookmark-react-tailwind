import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useFetch(url, query = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (err) {
      
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true)
  const Timer = setTimeout(() => {
    
    fetchData()
  }, 1000);

    
   return ()=>clearTimeout(Timer)
  
  }, [query, url]);

  return { isLoading, data };
}
