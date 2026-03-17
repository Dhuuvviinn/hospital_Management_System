import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Home/Banner'
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Services from './Components/Services/Services'
import Doctors from './Components/Home/Doctors'
import Appointment from './Components/Appointment/Appointment'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Doctor from './Components/Doctors/Doctor'
import Login from './Components/Auth/Login'

function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function PublicRoute({ isAuthenticated }) {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change this to false to test the login route

  return (
    <>
    <BrowserRouter>
    <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
