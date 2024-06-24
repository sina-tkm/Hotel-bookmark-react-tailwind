import { useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "./components/hooks/context/BookMarkListContext";
import { useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import LoaderSkeleton from "./components/SkeletonLoader";

function SingleBookmrark() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getBookMark, isLoading, currentBookmark } = useBookmark();
  useEffect(() => {
    getBookMark(id);
  }, [id]);

  if (isLoading || !currentBookmark)
    return (
      <div>
        <LoaderSkeleton />
      </div>
    );
  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}> &larr; BACK</button>
      </div>
      <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
      &nbsp; <strong> {currentBookmark.cityName}</strong> &nbsp;{" "}
      <span className='flex gap-x-2 justify-center items-center'>
        {currentBookmark.country}{" "}
      </span>
    </div>
  );
}

export default SingleBookmrark;
