import React from 'react'
import appointments from '../data/AdminData'
import { useSelector } from 'react-redux'
const AdminIndex = () => {
  const {user} = useSelector((state)=> state.login)
  const {doctors} = useSelector((state)=> state.doctor)
  const {appointments} = useSelector((state)=> state.appointment)
  const appoitmentCopy = appointments.data.map((appointment)=>{
     return appointment
  })
  const AppointmentPendingStatus = appointments.data.filter(
    (appointment) => appointment.status === "pending"
  ).length

  const appointmentCopy = appointments.data.map((appointment) => {
  const doctor = doctors.find((doctor) => doctor.id === appointment.doctor);

  return {
    ...appointment,
    doctor_name: doctor ? doctor.full_name : "Unknown Doctor",
  };
});

console.log(appointmentCopy);

  return (
    <>
     <main className="main">

          <div className="content">
            <div className="container">
              <div className="pageTitle">
                <div>
                  <p className="kicker">Dashboard</p>
                  <h1>Overview</h1>
                  <p className="muted" style={{ marginTop: 6 }}>
                    Key stats + latest appointments (static UI).
                  </p>
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn btn--ghost" href="../index.html">
                    Public site
                  </a>
                  <a className="btn btn--primary" href="add-doctor.html">
                    Add doctor
                  </a>
                </div>
              </div>

              <div className="cards" style={{ marginBottom: 18 }}>
                <div className="card metric">
                  <div className="row">
                    <div style={{ fontWeight: 1000 }}>Total Doctors</div>
                    <span className="badge badge--blue">Live</span>
                  </div>
                  <div className="big">{doctors.length}</div>
                  <div className="small">+2 this week</div>
                </div>

                <div className="card metric">
                  <div className="row">
                    <div style={{ fontWeight: 1000 }}>Appointments</div>
                    <span className="badge badge--green">Today</span>
                  </div>
                  <div className="big">{appointments.data.length}</div>
                  <div className="small">78% confirmed</div>
                </div>

                <div className="card metric">
                  <div className="row">
                    <div style={{ fontWeight: 1000 }}>Pending Requests</div>
                    <span className="badge badge--amber">Queue</span>
                  </div>
                  <div className="big">{AppointmentPendingStatus}</div>
                  <div className="small">Need review</div>
                </div>

                {/* <div className="card metric">
                  <div className="row">
                    <div style={{ fontWeight: 1000 }}>New Messages</div>
                    <span
                      className="badge"
                      style={{
                        background: "rgba(244,63,94,.12)",
                        borderColor: "rgba(244,63,94,.22)",
                        color: "#be123c",
                      }}
                    >
                      Inbox
                    </span>
                  </div>
                  <div className="big">7</div>
                  <div className="small">Last 24h</div>
                </div> */}
              </div>

              <div className="fullWidth">
                <div className="card" style={{ padding: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 1000 }}>
                        Latest Appointments
                      </div>
                      <div
                        className="muted"
                        style={{
                          fontWeight: 800,
                          fontSize: 13,
                          marginTop: 4,
                        }}
                      >
                        Recent requests + statuses
                      </div>
                    </div>
                    <a className="btn btn--ghost btn--sm" href="appointments.html">
                      View all
                    </a>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Patient</th>
                          <th>Doctor</th>
                          <th>Time</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointmentCopy.map((item, index) => (
                          <tr key={index}>
                            <td>{item.full_name}</td>
                            <td>{item.doctor_name}</td>
                            <td>{item.appointment_time}</td>
                            <td>
                              <span className={`${item.status == 'confirmed' ? 'badge badge--green' : 'badge badge--danger'}`}>{item.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* <div className="card formCard">
                  <p className="kicker">Quick actions</p>
                  <h3 style={{ marginTop: 6 }}>Send update</h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    Draft a message to the staff (UI only).
                  </p>

                  <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 12 }}>
                    <div className="field">
                      <label htmlFor="t">Title</label>
                      <input id="t" type="text" placeholder="System update" />
                    </div>

                    <div className="field" style={{ marginTop: 10 }}>
                      <label htmlFor="m">Message</label>
                      <textarea
                        id="m"
                        rows="4"
                        placeholder="Write your update..."
                      ></textarea>
                    </div>

                    <button
                      className="btn btn--primary btn--full"
                      style={{ marginTop: 12 }}
                      type="submit"
                    >
                      Send
                    </button>

                    <div className="note">Replace with API call later.</div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default AdminIndex
