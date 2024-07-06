import { TrashIcon } from "@heroicons/react/16/solid";
import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "./components/hooks/context/BookMarkListContext";
import { Link } from "react-router-dom";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import LoaderSkeleton from "./components/SkeletonLoader";

function BookMark() {
  const { isLoading, bookmarks, currentBookmark, deleteBookMark } =
    useBookmark();
  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteBookMark(id);
  };
  if (isLoading)
    return (
      <div>
        <LoaderSkeleton />
      </div>
    );
  if (!bookmarks.length) return <p>there is not any bookmark here </p>;
  return (
    <div className='flex flex-col gap-y-6  '>
      {bookmarks.map((item) => {
        return (
          <Link
            to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            key={item.id}
            className='flex border w-[400px] rounded-lg p-[10px] gap-x-[38px]'
          >
            <ReactCountryFlag svg countryCode={item.countryCode} />
            &nbsp; <strong className='w-[30px]'>
              {" "}
              {item.cityName}
            </strong> &nbsp;{" "}
            <span className='flex gap-x-2 whitespace-nowrap  justify-center items-center text-[12px]'>
              <span className='w-[60px]'> {item.country} </span>
              {item.id === currentBookmark.id ? (
                <CheckBadgeIcon className='w-[20px] h-[20px] text-red-400' />
              ) : null}
            </span>
            <button onClick={(e) => handleDelete(e, item.id)}>
              <TrashIcon className='w-[20px] h--[20px] ' />
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default BookMark;
