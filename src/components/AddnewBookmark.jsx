import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import useUrlLocation from "./hooks/useUrlLocation";
import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "./hooks/context/BookMarkListContext";
import LoaderSkeleton from "./SkeletonLoader";
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function AddnewBookmark() {
  const navigate = useNavigate();
  const [lat, long] = useUrlLocation();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [geoerror, setGeoerror] = useState(null);
  const [countryCode, setCountryCode] = useState("");
  const { createBookMark } = useBookmark();

  useEffect(() => {
    if (!lat || !long) return;
    async function geoLocation() {
      setIsLoading(true);
      setGeoerror(null);
      try {
        const { data } = await axios.get(
          `${BASE_URL}?latitude=${lat}&longitude=${long}`
        );
        if (!data.countryCode)
          throw new Error(
            "this location is not a country ,please click on somewhere else"
          );
        setCityName(data.cityName || data.locality || "");
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        setGeoerror(error.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    geoLocation();
  }, [lat, long]);

  if (isLoading) return <div><LoaderSkeleton /> </div>;
  if (geoerror) return <p>{geoerror}</p>;
  const handleBookmark = async (e) => {
    e.preventDefault();
    const newBookmark = {
      cityName,
      country,
      countryCode,
      latitude: lat,
      longitude: long,
      host_location: cityName + " " + country,
    };
    await createBookMark(newBookmark);
    navigate('/bookmark')
  };

  return (
    <div>
      <h2>Bookmark New Location</h2>
      <form
        action=''
        className='flex flex-col gap-y-16 mt-6'
        onSubmit={handleBookmark}
      >
        <div className='flex gap-x-16'>
          <label htmlFor='CityName'>CityName</label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type='text'
            name='CityName'
            id='CityName'
            className='w-[200px] h-[40px] rounded-lg border'
          />
        </div>
        <div className='flex gap-x-16 justify-center items-center relative'>
          <label htmlFor='Country'>CityName</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type='text'
            name='Country'
            id='Country'
            className='w-[200px] h-[40px] rounded-lg border'
          />
          <ReactCountryFlag
            svg
            countryCode={countryCode}
            className='absolute right-2'
          />
        </div>
        <div></div>
        <div className='flex gap-x-4'>
          <button
            className='border rounded-lg  w-[140px]'
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            {" "}
            &larr; Back
          </button>
          <button className='border w-[140px] rounded-lg '>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddnewBookmark;
