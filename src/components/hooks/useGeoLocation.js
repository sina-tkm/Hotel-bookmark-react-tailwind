import { useState } from "react";

export default function useGeoLocation() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

function locationMap() {
  if (!navigator.geolocation) 
    navigator.setError("your Location Does not support geolocate");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.massage);
        setIsLoading(false);
      }
    )

  }
  return {isLoading,error,position,locationMap}
}
 

