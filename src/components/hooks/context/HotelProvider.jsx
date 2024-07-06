import { createContext, useContext, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../Fetchapi";
import axios from "axios";
import toast from "react-hot-toast";

const Base_intial = {
  listSearch: [],
  currentHotel: {},
  isLoadingCurr: false,
  error: null,
};
function hotelManage(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        currentHotel: true,
      };
    case "listhotel":
      return {
        ...state,
        currentHotel: action.payload,
        listSearch: state.listSearch.some(
          (hotel) => hotel.id === action.payload.id
        )
          ? state.listSearch
          : [...state.listSearch, action.payload],
        isLoadingCurr: false,
      };
    case "rejected":
      return {
        error: action.payload,
      };
  }
}

// Renaming context for clarity
const HotelContext = createContext();

const BASE_URL = "http://localhost:3000/hotels";

function HotelProvider({ children }) {
  const [{ listSearch, currentHotel, isLoadingCurr }, dispatch] = useReducer(
    hotelManage,
    Base_intial
  );

  const [searchParams] = useSearchParams();

  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `city=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getHotel(id) {
    dispatch({ type: "loading" });

    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      dispatch({ type: "listhotel", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  return (
    <HotelContext.Provider
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
    </HotelContext.Provider>
  );
}

export default HotelProvider;

export function useHotels() {
  return useContext(HotelContext);
}
