import React from 'react'

const AdminDocter = () => {
  return (
     <main className="main">
      <div className="content">
        <div className="container">
          <div className="pageTitle">
            <div>
              <p className="kicker">Management</p>
              <h1>Doctors</h1>
              <p className="muted" style={{ marginTop: "6px" }}>
                List, status, and departments (static UI).
              </p>
            </div>
            <a className="btn btn--primary" href="add-doctor.html">
              Add doctor
            </a>
          </div>

          <div className="card" style={{ padding: "18px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Experience</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Amelia Carter</td>
                  <td>Cardiology</td>
                  <td>12 yrs</td>
                  <td>
                    <span className="badge badge--green">Active</span>
                  </td>
                  <td>
                    <a className="btn btn--ghost btn--sm" href="#">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Dr. Ethan Miller</td>
                  <td>Neurology</td>
                  <td>9 yrs</td>
                  <td>
                    <span className="badge badge--green">Active</span>
                  </td>
                  <td>
                    <a className="btn btn--ghost btn--sm" href="#">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Dr. Sofia Nguyen</td>
                  <td>Dermatology</td>
                  <td>7 yrs</td>
                  <td>
                    <span className="badge badge--amber">On Leave</span>
                  </td>
                  <td>
                    <a className="btn btn--ghost btn--sm" href="#">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Dr. Noah Patel</td>
                  <td>Orthopedics</td>
                  <td>10 yrs</td>
                  <td>
                    <span className="badge badge--green">Active</span>
                  </td>
                  <td>
                    <a className="btn btn--ghost btn--sm" href="#">
                      Edit
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

export default AdminDocter
