import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookMarkContext = createContext();

const BASE_URL = "http://localhost:3000";

const INITIAL = {
  currentBookmark: {},
  bookmarks: [],
  isLoading: false,
  error: null,
};
function bookmarkReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "bookmarks/loaded":
      return {
        ...state,
        isLoading: false,
        bookmarks: action.payload,
      };
    case "bookmark/loaded":
      return {
        ...state,
        isLoading: false,
        currentBookmark: action.payload,
      };
    case "bookmark/created":
      return {
        ...state,
        isLoading: false,
        bookmarks: [...state.bookmarks, action.payload],
        currentBookmark: action.payload,
      };
    case "bookmarks/deleted":
      return {
        ...state,
        isLoading: false,
        bookmarks: state.bookmarks.filter((item) => item.id !== action.payload),
        currentBookmark: null,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("unknown action");
  }
}

function BookMarkListContext({ children }) {
  const [{ bookmarks, currentBookmark, isLoading }, dispatch] = useReducer(
    bookmarkReducer,
    INITIAL
  );

  useEffect(() => {
    async function fetchBookmarkList() {
      dispatch({ type: "loading" });
      try {
        const { data } = await axios.get(`${BASE_URL}/bookmarks`);
        dispatch({ type: "bookmarks/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "an Error accured in loading bookmarks",
        });
        toast.error(error.message);
      }
    }
    fetchBookmarkList();
  }, []);

  async function getBookMark(id) {
    dispatch({ type: "loading" });
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      dispatch({ type: "bookmark/loaded", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({
        type: "rejected",
        payload: "an Error accured in loading loading data",
      });
    }
  }

  async function createBookMark(newBookmark) {
    dispatch({ type: "loading" });

    try {
      const { data } = await axios.post(`${BASE_URL}/bookmarks/`, newBookmark);
      dispatch({ type: "bookmark/created", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }
  async function deleteBookMark(id) {
    if (Number(id) === currentBookmark?.id) return;
    dispatch({ type: "loading" });

    try {
      await axios.delete(`${BASE_URL}/bookmarks/${id}`);
      dispatch({ type: "bookmarks/deleted", payload: id });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
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
