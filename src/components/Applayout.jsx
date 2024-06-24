import { Outlet } from "react-router-dom";
import MapList from "./MapList";
import { useHotels } from "./hooks/context/HotelProvider";


function Applayout() {
  const { hotels } = useHotels()

  return (
    <div className='flex justify-between w-[75%] mx-auto mt-8'>
      <div>
        <Outlet />
      </div>
      <div>
        <MapList markerLocation={hotels}  />
      </div>
    </div>
  );
}

export default Applayout;
