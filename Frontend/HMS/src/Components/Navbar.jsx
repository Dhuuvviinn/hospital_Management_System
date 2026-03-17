import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = ({ isAuthenticated,setIsAuthenticated }) => {
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
      <span className="brand__name">Group3</span>
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
    Contact
  </NavLink>
    </nav>
     <div className="header__cta">
      
      <Link className="btn btn--primary btn--sm" onClick={()=>setIsAuthenticated(false)} to="/logout">logout</Link>
     
    </div>
      </>) : (<>  <div className="header__cta">
      
      <Link className="btn btn--ghost btn--sm" onClick={()=>setIsAuthenticated(true)} to="/login">Login</Link>
      <Link className="btn btn--primary btn--sm" to="/appointment">Book Now</Link>
     
    </div></>)
    }
    

   
  </div>
</header>
        </>
    )
}

export default Navbar
