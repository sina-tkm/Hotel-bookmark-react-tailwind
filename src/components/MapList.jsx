import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotels } from "./hooks/context/HotelProvider";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGeoLocation from "./hooks/useGeoLocation";

function MapList() {
  const { isLoading, hotels } = useHotels();
  const [showMap, setShowMap] = useState([50, 3]);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const long = searchParams.get("lng");
  const {
    isLoading: isLoadingPosition,
    position: positionLocation,
    locationMap,
  } = useGeoLocation();
  useEffect(() => {
    if (lat && long) {
      setShowMap([lat, long]);
    }
  }, [lat, long]);
  useEffect(()=>{
    if(positionLocation?.lat && positionLocation?.lng)
      {
      setShowMap([positionLocation.lat,positionLocation.lng])
      }
   },[positionLocation])

  return (
    <div className=''>
      <MapContainer
        className='  w-[400px] h-[400px]'
        center={showMap}
        zoom={16}
        scrollWheelZoom={true}
      >
        <button
          className='absolute left-[30px] bottom-[30px] w-[120px] whitespace-nowrap h-[20px] bg-blue-400 z-[1000] rounded-md hover:shadow-minicard transition-all duration-200 '
          onClick={locationMap}
        >
          {isLoadingPosition ? "Loading ... " : "use your Loacation"}
        </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={showMap} />

        <ChangeHandle position={showMap} />
        {hotels.map((item) => {
          return (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>{item.host_location}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
      ,
    </div>
  );
}

export default MapList;

export function ChangeHandle({ position }) {
  const map = useMap();
  map.setView(position);
 
}
