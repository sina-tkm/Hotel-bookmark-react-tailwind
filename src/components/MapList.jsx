import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useGeoLocation from "./hooks/useGeoLocation";
import useUrlLocation from "./hooks/useUrlLocation";


function MapList({ markerLocation }) {
  const [lat, long] = useUrlLocation();
  const [showMap, setShowMap] = useState([50, 3]);

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

  useEffect(() => {
    if (positionLocation?.lat && positionLocation?.lng) {
      setShowMap([positionLocation.lat, positionLocation.lng]);
    }
  }, [positionLocation]);

 
  return (
    <div className='rounded-lg h-[350px] w-[400px] p-[10px] bg-map '>
      <MapContainer
        className='  w-[100%] h-[100%] border rounded-[18px] border-black z-[100] '
        center={showMap}
        zoom={10}
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
        <DetectControl />
        <ChangeHandle position={showMap} />
        {markerLocation.map((item) => {
          return (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>{item.host_location}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
      
    </div>
  );
}

export default MapList;

export function ChangeHandle({ position }) {
  const map = useMap();
  map.setView(position);
}

function DetectControl() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) =>
      navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}
