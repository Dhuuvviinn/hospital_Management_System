import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <>
    <section className="pageHero">
        <div className="container">
          <h1>About MediCare</h1>
          <p>A clean static UI that you can wire to any backend.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          
          <div className="card">
            <div className="card__pad">
              <p className="kicker">Who we are</p>
              <h2>Patient-first care with modern systems</h2>

              <p className="muted" style={{ marginTop: "10px" }}>
                This template includes a public website (booking, doctors, services)
                and a separate admin dashboard (manage doctors, appointments,
                messages). It is pure HTML + CSS so you can integrate any backend later.
              </p>

              <div className="hr"></div>

              <div className="grid" style={{ gap: "10px" }}>
                <div className="badge badge--green">Clean UI patterns</div>
                <div className="badge badge--blue">Reusable components</div>
                <div className="badge badge--amber">
                  Dashboard layouts included
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__pad">
              <p className="kicker">What you get</p>
              <h3 style={{ marginTop: "6px" }}>Pages & layouts</h3>

              <p className="muted" style={{ marginTop: "10px" }}>
                Home, Services, Doctors, Doctor Profile, Appointment, Contact,
                Auth pages, plus dashboard pages for managing the system.
              </p>

              <div className="hr"></div>

              <Link className="btn btn--primary" to="/dashboard">
                Open Dashboard
              </Link>

              <Link
                className="btn btn--ghost"
                style={{ marginLeft: "10px" }}
                to="/appointment"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
