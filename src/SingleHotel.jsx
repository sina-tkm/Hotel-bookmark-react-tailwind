import { useParams } from "react-router-dom";
import { useHotels } from "./components/hooks/context/HotelProvider";
import { useEffect } from "react";
import LoaderSkeleton from "./components/SkeletonLoader";

function SingleHotel() {
  const { id } = useParams();
  const { currentHotel, isLoadingCurr, getHotel } = useHotels();

  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurr) return <LoaderSkeleton />;
  return (
    <div className='flex flex-col gap-y-10  '>
      <img
        src={currentHotel.xl_picture_url}
        alt={currentHotel.name}
        className='w-[240px] h-[240px] object-cover rounded-lg'
      />
      <div>
        <h1>{currentHotel.name}</h1>
        <p>
          {currentHotel.number_of_rewiev} rewievs &bull;
          {currentHotel.smart_location}
          {currentHotel.smart_location}
        </p>
      </div>
    </div>
  );
}

export default SingleHotel;
