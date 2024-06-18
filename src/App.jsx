import NavBar from "./components/NavBar";
import "./App.css";
import Bannerimage from "./components/BannerImage";
import Ticketmaker from "./components/Ticketmaker";
import { Route, Routes } from "react-router-dom";
import Hotel from "./components/Hotel";
import { Toaster } from "react-hot-toast";
import { MyProvider } from "./components/hooks/context/ListTickets";
import Train from "./components/Train";
import Airplane from "./components/Airplane";
import Bustravel from "./components/Bustravel";
import Hotels from "./components/Hotels";
import Applayout from "./components/Applayout";

import SingleHotel from "./SingleHotel";
import HotelProvider from "./components/hooks/context/HotelProvider";

function App() {
  return (
    <div>
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
            <Route path='train' element={<Train />} />
            <Route path='airplane' element={<Airplane />} />
            <Route path='bus' element={<Bustravel />} />
          </Routes>
        </MyProvider>
      </HotelProvider>
    </div>
  );
}

export default App;
