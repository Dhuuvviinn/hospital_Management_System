import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"

const Banner = () => {
  const [Apdata, setApdata] = useState({
    name: "",
    phone: "",
    dept: "",
    date: ""
  })
  const {role} = useSelector((state)=>state.login.user)
  console.log(role)
  const navigate = useNavigate()
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="pill">Trusted Clinic & Hospital</p>

            <h1>
              Book Doctors,{" "}
              <span style={{ color: "var(--primary-600)" }}>Faster</span> and Smarter.
            </h1>

            <p>
              Clean booking UI, specialist profiles, and an admin dashboard layout
              for managing doctors, appointments, and messages.
            </p>

            <div className="hero__actions">
              <Link className="btn btn--primary" to="/appointment">
                Book Appointment
              </Link>
              <Link className="btn btn--ghost" to="/doctors">
                Browse Doctors
              </Link>
              <button
                className="btn btn--ghost"
                disabled={role !== 'patient'? false : true}
                onClick={role == "admin" ? () => navigate("/admin") : role == "staff" ? () => navigate("/admin/appointments") : null}
              >
                Open Dashboard
              </button>

            </div>

            <div className="hero__stats">
              <div className="stat">
                <div className="stat__num">120+</div>
                <div className="stat__label">Specialists</div>
              </div>

              <div className="stat">
                <div className="stat__num">10k+</div>
                <div className="stat__label">Patients Served</div>
              </div>

              <div className="stat">
                <div className="stat__num">25+</div>
                <div className="stat__label">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="card heroCard">
            <h3>Quick Appointment</h3>
            <p className="muted">Submit the request — confirm later via backend.</p>

            <form action="appointment.html" method="get" style={{ marginTop: "12px" }}>
              <div className="formGrid">
                <div className="field">
                  <label htmlFor="n">Full Name</label>
                  <input
                    id="n"
                    name="name"
                    type="text"
                    onChange={(e) => setApdata({ ...Apdata, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="p">Phone</label>
                  <input
                    id="p"
                    name="phone"
                    type="tel"
                    onChange={(e) => setApdata({ ...Apdata, phone: e.target.value })}
                    placeholder="+1 555 000 0000"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="d">Department</label>
                  <select id="d" name="dept" onChange={(e) => setApdata({ ...Apdata, dept: e.target.value })} required>
                    <option value="">Select</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Neurology</option>
                    <option>Diagnostics</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="dt">Date</label>
                  <input id="dt" name="date" onChange={(e) => setApdata({ ...Apdata, date: e.target.value })} type="date" required />
                </div>

                <div className="field full">
                  <button className="btn btn--primary btn--full" type="submit">
                    Request Booking
                  </button>

                  <div
                    style={{ marginTop: "10px", fontSize: "13px" }}
                    className="muted"
                  >
                    UI only. Connect your backend later.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="strip">
        <div class="container strip__row">
          <div class="stripItem">
            <div class="ico">🩺</div>
            <div>
              <h4>Verified Doctors</h4>
              <p>Specialists across multiple departments.</p>
            </div>
          </div>
          <div class="stripItem">
            <div class="ico">⏱️</div>
            <div>
              <h4>Fast Booking</h4>
              <p>Simple flow designed for conversion.</p>
            </div>
          </div>
          <div class="stripItem">
            <div class="ico">🏥</div>
            <div>
              <h4>Modern Facilities</h4>
              <p>Clean, safe and patient-friendly care.</p>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Banner

