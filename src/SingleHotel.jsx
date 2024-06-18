import { useParams } from "react-router-dom";
import { useHotels } from "./components/hooks/context/HotelProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const {currentHotel,isLoadingCurr,getHotel} = useHotels()


  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurr) return <div>loading...</div>;
  return (
    <div className='flex flex-col'>
      <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
      <div>
        <h1>{currentHotel.name}</h1>
        <p>
          {currentHotel.number_of_rewiev} rewievs &bull;{currentHotel.smart_location}
          {currentHotel.smart_location}
        </p>
      </div>
    </div>
  );
}

export default SingleHotel;
