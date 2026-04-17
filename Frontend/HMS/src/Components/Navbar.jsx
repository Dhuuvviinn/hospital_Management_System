import React from 'react'
import { Link, NavLink } from 'react-router'
import { LogoutUser } from '../Redux/Slices/LoginSlice'
import { useDispatch } from 'react-redux'

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
      <span>support@medicare.com</span>
    </div>
  </div>
</div>

<header className="header">
  <div className="container header__row">
    
    <a className="brand" href="index.html">
      <span className="brand__mark">+</span>
      <span className="brand__name">Group5</span>
    </a>

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
      <Link className="btn btn--primary btn--sm" to="/appointment">Book Now</Link>
     
    </div></>)
    }
    

   
  </div>
</header>
        </>
    )
}

export default Navbar
