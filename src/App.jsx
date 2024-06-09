import NavBar from './components/NavBar'
import './App.css'
import Bannerimage from './components/BannerImage'
import Ticketmaker from './components/Ticketmaker'
import {  Route, Routes } from 'react-router-dom'
import Train from './components/Train'
import Bustravel from './components/Bustravel'
import Hotel from './components/Hotel'
import Airplane from './components/Airplane'



function App() {
  return (
    <div>
      <NavBar />
      <Bannerimage />
      <Ticketmaker />
      <Routes>
        <Route path='train' element={<Train />}/>
        <Route path='airplane' element={<Airplane />}/>
        <Route path='bus' element={<Bustravel />} />
        <Route path='hotel' element={<Hotel />}/>
      </Routes>
 
    </div>
 

  )
}

export default App



