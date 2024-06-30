import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookMarkContext = createContext();

const BASE_URL = "http://localhost:3000";

function BookMarkListContext({ children }) {
  const [currentBookmark, setCurrentBookmark] = useState({});
  // const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] =
  //   useState(false);
  const [bookmarks, setBookMark] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchBookmarkList() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${BASE_URL}/bookmarks`);
        setBookMark(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBookmarkList();
  }, []);

  async function getBookMark(id) {
    setIsLoading(true);
    setCurrentBookmark(null);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookmark(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  }
  async function createBookMark(newBookmark) {
    setIsLoading(true);

    try {
      const { data } = await axios.post(`${BASE_URL}/bookmarks/`, newBookmark);
      setCurrentBookmark(data);
      setBookMark((prev) => [...prev, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteBookMark(id) {
    setIsLoading(true);

    try {
    await axios.delete(`${BASE_URL}/bookmarks/${id}`);
      setBookMark((prev) => prev.filter(item => item.id !== id));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BookMarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookMark,
        createBookMark,
        currentBookmark,
        deleteBookMark,
      }}
    >
      {children}
    </BookMarkContext.Provider>
  );
}

export default BookMarkListContext;

export function useBookmark() {
  return useContext(BookMarkContext);
}
