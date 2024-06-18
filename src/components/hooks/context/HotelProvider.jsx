import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../Fetchapi";
import axios from "axios";
import toast from "react-hot-toast";
const HotelsProvider = createContext();

function HotelProvider({ children }) {
  const [listSearch, setListSearch] = useState([]);
  const [currentHotel, setCurrentHotel] = useState({});
  const [isLoadingCurr, setIsLoadingCurr] = useState(false);
  const BASE_URL = "http://localhost:3000/hotels";
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `city=${destination || ""}&accommodates=${room || 1}`
  );

  async function getHotel(id) {
    setIsLoadingCurr(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data);
      setListSearch((prev) => {
        if (prev.find((hotel) => hotel.id === data.id)) {
          return prev;
        }
        return [...prev, data];
      });
      setIsLoadingCurr(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurr(false);
    }
  }
  return (
    <HotelsProvider.Provider
      value={{
        isLoading,
        hotels,
        getHotel,
        currentHotel,
        isLoadingCurr,
        listSearch,
      }}
    >
      {children}
    </HotelsProvider.Provider>
  );
}

export default HotelProvider;

export function useHotels() {
  return useContext(HotelsProvider);
}
