import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "./components/hooks/context/BookMarkListContext";
import { Link } from "react-router-dom";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import LoaderSkeleton from "./components/SkeletonLoader";

function BookMark() {
  const { isLoading, bookmarks, currentBookmark } = useBookmark();
  if (isLoading) return <div><LoaderSkeleton /></div>;
  return (
    <div className='flex flex-col gap-y-6 '>
      {bookmarks.map((item) => {
        return (
          <Link
            to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            key={item.id}
            className='flex border rounded-lg p-[10px]'
          >
            <ReactCountryFlag svg countryCode={item.countryCode} />
            &nbsp; <strong> {item.cityName}</strong> &nbsp;{" "}
            <span className='flex gap-x-2 justify-center items-center'>
              {item.country}{" "}
              {item.id === currentBookmark.id ? (
                <CheckBadgeIcon className='w-[20px] h-[20px] text-red-400' />
              ) : null}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default BookMark;
