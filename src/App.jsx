import NavBar from "./components/NavBar";
import "./App.css";
import Bannerimage from "./components/BannerImage";
import Ticketmaker from "./components/Ticketmaker";
import { Route, Routes } from "react-router-dom";
import Hotel from "./components/ReacentHotel";
import { Toaster } from "react-hot-toast";
import { MyProvider } from "./components/hooks/context/ListTickets";
import Train from "./components/Train";
import Airplane from "./components/Airplane";
import Bustravel from "./components/Bustravel";
import Hotels from "./components/Hotels";
import Applayout from "./components/Applayout";
import SingleHotel from "./SingleHotel";
import BookMark from "./BookMark";
import HotelProvider from "./components/hooks/context/HotelProvider";
import BookMarkLayout from "./components/BookMarkLayout";
import BookMarkListContext from "./components/hooks/context/BookMarkListContext";
import SingleBookmrark from "./SingleBookmrark";
import AddnewBookmark from "./components/AddnewBookmark";

function App() {
  return (
    <div>
      <BookMarkListContext>
        <HotelProvider>
          <MyProvider>
            <Toaster />
            <NavBar />
            <Bannerimage />
            <Ticketmaker />
            <Routes>
              <Route path='/' element={<Hotel />} />
              <Route path='hotels' element={<Applayout />}>
                <Route index element={<Hotels />} />
                <Route path=':id' element={<SingleHotel />} />
              </Route>
              <Route path='/bookmark' element={<BookMarkLayout />}>
                <Route index element={<BookMark />} />
                <Route path=':id' element={<SingleBookmrark />} />
                <Route path='add' element={<AddnewBookmark />} />
              </Route>
              <Route path='train' element={<Train />} />
              <Route path='airplane' element={<Airplane />} />
              <Route path='bus' element={<Bustravel />} />
            </Routes>
          </MyProvider>
        </HotelProvider>
      </BookMarkListContext>
    </div>
  );
}

export default App;
