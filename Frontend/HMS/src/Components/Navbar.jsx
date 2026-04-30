import React from 'react'
import { Link, NavLink } from 'react-router'
import { LogoutUser } from '../Redux/Slices/LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import hms_logo from "../img/HMS_logo.png"
const Navbar = ({ isAuthenticated,setIsAuthenticated }) => {
const dispatch = useDispatch()
const logout = () =>{
    dispatch(LogoutUser())
}

    return (
        <>
            <div className="topbar">
  <div className="container topbar__row">
    <p style={{ margin: 0 }}>
      24/7 Emergency: <strong>+1 (555) 123-4567</strong>
    </p>
    <div className="topbar__meta">
      <span>Mon–Sun: 8:00–20:00</span>
      <span className="dot"></span>
      <a href="mailto:dhruvin123.saurabhifosys@gmail.com">dhruvin123.saurabhifosys@gmail.com</a>
    </div>
  </div>
</div>

<header className="header">
  <div className="container header__row">
    
    <Link className="brand" to="/">
      <img src={hms_logo} style={{height: "50px",width: "50px",display: "flex",alignItems: "center",justifyContent: "center"}}  />
      <span className="brand__name">HMS</span>
    </Link>

      {
      isAuthenticated ? (<>
      <input type="checkbox" id="navToggle" className="navToggle" />
    <label htmlFor="navToggle" className="hamburger" aria-label="Open menu">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav className="nav">
   <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
    Home
  </NavLink>

  <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
    Services
  </NavLink>

  <NavLink to="/doctors" className={({ isActive }) => isActive ? "active" : ""}>
    Doctors
  </NavLink>

  <NavLink to="/appointment" className={({ isActive }) => isActive ? "active" : ""}>
    Appointment
  </NavLink>

  <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
    About
  </NavLink>

  <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
    Feedback
  </NavLink>
    </nav>
     <div className="header__cta">
      
      <button className="btn btn--primary btn--sm" onClick={logout} >
        logout
      </button>
     
    </div>
      </>) : (<>  <div className="header__cta">
      
      <Link className="btn btn--ghost btn--sm" to="/login">Login</Link>
    
     
    </div></>)
    }
    

   
  </div>
</header>
        </>
    )
}

export default Navbar
