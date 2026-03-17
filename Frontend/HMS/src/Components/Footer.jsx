import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer">
  <div className="container footer__grid">
    <div>
      <a className="brand" href="index.html">
        <span
          className="brand__mark"
          style={{ background: "rgba(255,255,255,.10)", color: "#fff" }}
        >
          +
        </span>
        <span className="brand__name" style={{ color: "#fff" }}>
          MediCare
        </span>
      </a>
      <p style={{ marginTop: "10px", color: "rgba(255,255,255,.75)" }}>
        Static HTML + CSS healthcare UI (public site + admin dashboard).
      </p>
    </div>

    <div>
      <h4>Quick Links</h4>
      <a href="services.html">Services</a>
      <br />
      <a href="doctors.html">Doctors</a>
      <br />
      <a href="appointment.html">Appointment</a>
      <br />
      <a href="dashboard/index.html">Dashboard</a>
    </div>

    <div>
      <h4>Contact</h4>
      <div style={{ color: "rgba(255,255,255,.75)" }}>
        123 Clinic Street, Your City
        <br />
        +1 (555) 123-4567
        <br />
        support@medicare.com
      </div>
    </div>
  </div>

  <div className="container footer__bottom">
    © {new Date().getFullYear()} MediCare. All rights reserved.
  </div>
</footer>
    </>
  )
}

export default Footer
