import { Square3Stack3DIcon } from "@heroicons/react/16/solid";
import Location from "./Location";
import { useHotels } from "./hooks/context/HotelProvider";
import { Link } from "react-router-dom";

function Hotel() {
  return (
    <div className='mt-[40px] w-[75%] mx-auto'>
      <div className='w-full flex justify-end items-end flex-col '>
        <div className='flex gap-x-4 '>
          <span>جستجو های اخیر</span>
        </div>
        <Lastsearch />
        <Location />
      </div>
    </div>
  );
}

export default Hotel;

export function Lastsearch() {
  const { listSearch } = useHotels();
  if (listSearch.length === 0) return <div>empty</div>;
 
  return (
    <div className='flex'>
      {listSearch.map((item) => {
        return (
          <Link to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            key={item.id}
            className='flex w-[140px] flex-col p-4 gap-y-6 border mt-3 rounded-md justify-end' >
            <h4 className='flex w-full justify-end text-[12px]'>{item.city}</h4>
            <div className='flex gap-x-3 '>
              <marquee className='text-[12px]'>{item.host_location}</marquee>
              <span>
                <Square3Stack3DIcon className='w-[20px] h-[20px]' />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
