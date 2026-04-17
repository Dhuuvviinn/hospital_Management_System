import { Suspense, use, useEffect, useState } from 'react'
import { lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Home/Banner'
const Home = lazy(()=> import('./Components/Home/Home'))
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Services from './Components/Services/Services'
import Doctors from './Components/Home/Doctors'
import Appointment from './Components/Appointment/Appointment'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Doctor from './Components/Doctors/Doctor'
const Login = lazy(()=> import('./Components/Auth/Login'))
const Sigup = lazy(()=> import('./Components/Auth/Sigup'))
import AdminIndex from './Admin/AdminIndex'
import AdminLayout from './Admin/AdminLayout'
import AdminDocter from './Admin/AdminDocter'
import AdminAppointment from './Admin/AdminAppointment'
import AdminMessage from './Admin/AdminMessage'
import { useDispatch, useSelector } from 'react-redux'
import { Me } from './Redux/Slices/LoginSlice'
import { Loader } from './Components/Loader'
import ForgetPassUser from './Components/Auth/ForgetPassUser'
import ResetPasswordUser from './Components/Auth/ResetPasswordUser'
import AdminSetting from './Admin/AdminSetting'
import AdminAddDocter from './Admin/AdminAddDocter'
import { GetAllDoctors } from './Redux/Slices/DoctorSlice'
import DoctorProfileSection from './Components/Doctors/DoctorProfileSection '
import { Get_all_Appointment } from './Redux/Slices/Appointment'
import { Get_all_feedback } from './Redux/Slices/FeedbackSlice'
function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function PublicRoute({ isAuthenticated }) {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change this to false to test the login route
  
  const dispatch = useDispatch()
  const {auth,loading,user} = useSelector((state)=> state.login)
  const hideNabar = location.pathname === '/admin' || location.pathname.startsWith('/admin/');

  useEffect(()=>{
    dispatch(Me())
  },[])

  useEffect(()=>{
    if(auth){
      dispatch(GetAllDoctors(user.access_token))
      dispatch(Get_all_Appointment(user.access_token))
      dispatch(Get_all_feedback(user.access_token))
    }
  },[auth])

  if (loading) return <Loader />;
  return (
    <>
    <BrowserRouter>
    {
      !hideNabar && <Navbar isAuthenticated={auth} setIsAuthenticated={isAuthenticated}/>
    }
    <Suspense fallback={<Loader />}> 
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={auth} />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/doctors/:id" element={<DoctorProfileSection />} />
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/admin' element={<AdminLayout/>} >
            <Route index element={<AdminIndex/>} />
            <Route path='/admin/docter' element={<AdminDocter/>} />
            <Route path='/admin/add-doctor' element={<AdminAddDocter/>} />
            <Route path='/admin/message' element={<AdminMessage/>} />
            <Route path='/admin/appointments' element={<AdminAppointment/>} />
            <Route path='/admin/settings' element={<AdminSetting/>} />
          </Route>
        </Route>
        <Route element={<PublicRoute isAuthenticated={auth} />}>
          <Route path="/login" element={<Login />} />
          <Route path='/forget-password' element={<ForgetPassUser />} />
          <Route path='/reset-password/:token' element={<ResetPasswordUser />} />
          <Route path="/signup" element={<Sigup />} />
        </Route>
      </Routes>
    </Suspense>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
