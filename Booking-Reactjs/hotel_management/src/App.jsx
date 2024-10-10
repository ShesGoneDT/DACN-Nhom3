import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Home from './web-view/homeComponent'
import Admin from './admin-view/adminComponent'
import Hotel from './web-view/hotelComponent'
import HotelDetail from './web-view/hotelDetailComponent'
import Booking from './web-view/bookingComponent'
import Login  from "./private/login";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
      <div>
        <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hotel-detail" element={<HotelDetail />} />
          <Route path="/booking" element={<Booking />} />
          {/* Trang quản trị */}
          <Route path="/admin/*" element={<Admin />} />
          <Route path="login" element={<Login  />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
