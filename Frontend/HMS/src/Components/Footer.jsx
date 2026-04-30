import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import hms_logo from "../img/HMS_logo.png"
const Footer = () => {
  return (
    <>
    <footer className="footer">
  <div className="container footer__grid">
    <div>
      <a className="brand" href="index.html">

        <span className="brand__name" style={{ color: "#fff" }}>
          <img src={hms_logo} alt="HMS Logo" style={{ height: "50px", width: "50px" }} />
        </span>
        <span className="brand__name">HMS</span>
      </a>
      <p style={{ marginTop: "10px", color: "rgba(255,255,255,.75)" }}>
          Your trusted healthcare partner.
      </p>
    </div>

    <div>
      <h4>Quick Links</h4>
      <Link to="/Services">Services</Link>
      <br />
      <Link to="/Doctors">Doctors</Link>
      <br />
      <Link to="/Appointment">Appointment</Link>
      <br />
    
    </div>

    <div>
      <h4>Contact</h4>
      <div style={{ color: "rgba(255,255,255,.75)" }}>
        123 Clinic Street, Your City
        <br />
        +1 (555) 123-4567
        <br />
       dhruvin123.saurabhifosys@gmail.com
      </div>
    </div>
  </div>

  <div className="container footer__bottom">
    © {new Date().getFullYear()} HMS. All rights reserved.
  </div>
</footer>
    </>
  )
}

export default Footer
