import { Outlet } from "react-router-dom";
import MapList from "./MapList";
import { useBookmark } from "./hooks/context/BookMarkListContext";

function BookMarkLayout() {
const {bookmarks}= useBookmark()
  return (
    <div className='flex justify-between w-[75%] mx-auto mt-8'>
      <div>
        <Outlet/>
      </div>
      <div>
        <MapList markerLocation={bookmarks} />
      </div>
    </div>
  );
}

export default BookMarkLayout;
