import { Outlet } from "react-router-dom";
import MapList from "./MapList";

function Applayout() {
  return (
    <div className='flex justify-between w-[75%] mx-auto mt-8'>
      <div>
        <Outlet />
      </div>
      <div>
        <MapList />
      </div>
    </div>
  );
}

export default Applayout;
