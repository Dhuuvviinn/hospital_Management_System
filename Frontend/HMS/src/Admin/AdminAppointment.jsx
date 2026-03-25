import React from 'react'

const AdminAppointment = () => {
  return (
     <main className="main">
      <div className="content">
        <div className="container">
          <div className="pageTitle">
            <div>
              <p className="kicker">Management</p>
              <h1>Appointments</h1>
              <p className="muted" style={{ marginTop: "6px" }}>
                Confirm / reject appointments (static UI).
              </p>
            </div>
            <a className="btn btn--ghost" href="../appointment.html">
              Public booking page
            </a>
          </div>

          <div className="card" style={{ padding: "18px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Dr. Amelia Carter</td>
                  <td>2026-03-02</td>
                  <td>10:30</td>
                  <td>
                    <span className="badge badge--amber">Pending</span>
                  </td>
                  <td>
                    <a className="btn btn--primary btn--sm" href="#">
                      Confirm
                    </a>{" "}
                    <a className="btn btn--ghost btn--sm" href="#">
                      Reject
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Ayesha R.</td>
                  <td>Dr. Noah Patel</td>
                  <td>2026-03-02</td>
                  <td>11:15</td>
                  <td>
                    <span className="badge badge--green">Confirmed</span>
                  </td>
                  <td>
                    <a className="btn btn--ghost btn--sm" href="#">
                      Reschedule
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>Sarah W.</td>
                  <td>Dr. Ethan Miller</td>
                  <td>2026-03-02</td>
                  <td>12:00</td>
                  <td>
                    <span className="badge badge--green">Confirmed</span>
                  </td>
                  <td>
                    <a className="btn btn--ghost btn--sm" href="#">
                      Reschedule
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>James K.</td>
                  <td>Dr. Sofia Nguyen</td>
                  <td>2026-03-03</td>
                  <td>14:30</td>
                  <td>
                    <span className="badge badge--amber">Pending</span>
                  </td>
                  <td>
                    <a className="btn btn--primary btn--sm" href="#">
                      Confirm
                    </a>{" "}
                    <a className="btn btn--ghost btn--sm" href="#">
                      Reject
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminAppointment
