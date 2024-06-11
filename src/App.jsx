import NavBar from './components/NavBar'
import './App.css'
import Bannerimage from './components/BannerImage'
import Ticketmaker from './components/Ticketmaker'
import {  Route, Routes } from 'react-router-dom'
import Hotel from './components/Hotel'
import { Toaster } from 'react-hot-toast'
import { MyProvider } from './components/hooks/context/ListTickets'
import Train from './components/Train'
import Airplane from './components/Airplane'
import Bustravel from './components/Bustravel'
import Hotels from './components/Hotels'



function App() {
  return (
    <div>
    <MyProvider>
    <Toaster />
      <NavBar />
      <Bannerimage />
      <Ticketmaker />
      <Routes>
        <Route path='hotel' element={<Hotel />}/>
        <Route path='hotels' element={<Hotels />} />
        <Route path='train' element={<Train />}/>
        <Route path='airplane' element={<Airplane />}/>
        <Route path='bus' element={<Bustravel />}/>
        
      </Routes>
     
    </MyProvider>
    </div>
 

  )
}

export default App



