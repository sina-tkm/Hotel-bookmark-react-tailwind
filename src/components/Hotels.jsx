import { Link } from "react-router-dom";
import { useHotels } from "./hooks/context/HotelProvider";
import LoaderSkeleton from "./SkeletonLoader";

function Hotels() {
  const { isLoading, hotels } = useHotels();

  if (isLoading) return <LoaderSkeleton />;
  return (
    <div className='flex jusify-between'>
      <div className=' w-full mx-auto grid-lists flex flex-col gap-y-4 '>
        {hotels.map((items) => {
          return (
            <Link
              className='p-[10px] border box-shadow-bar rounded-[12px]'
              key={items.id}
              to={`/hotels/${items.id}?lat=${items.latitude}&lng=${items.longitude}`}
            >
              <div className='flex w-1/2  gap-x-4 '>
                <img
                  src={items.xl_picture_url}
                  alt={items.name}
                  className='w-[160px] h-[160px] rounded-md '
                />
                <div>
                  <h1 className='whitespace-nowrap'>{items.host_location}</h1>
                  <p className='whitespace-nowrap'>{items.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Hotels;
