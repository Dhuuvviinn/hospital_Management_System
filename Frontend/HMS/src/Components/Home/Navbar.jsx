import React from 'react'

const Navbar = () => {
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

    <input type="checkbox" id="navToggle" className="navToggle" />
    <label htmlFor="navToggle" className="hamburger" aria-label="Open menu">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav className="nav">
      <a className="active" href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Doctors</a>
      <a href="#">Appointment</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>

    <div className="header__cta">
      
      <a className="btn btn--ghost btn--sm" href="auth/login.html">Login</a>
      <a className="btn btn--primary btn--sm" href="appointment.html">Book Now</a>
     
    </div>
  </div>
</header>
        </>
    )
}

export default Navbar
