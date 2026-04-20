import React from 'react'
import { doctor, GetAllDoctors } from '../Redux/Slices/DoctorSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import { baseURL } from '../Redux/baseurl'

const AdminDocter = () => {
  const { doctors } = useSelector((state) => state.doctor)
  const { user } = useSelector((state) => state.login)
  const [doctorStatus, setDoctorStatus] = React.useState({
    id: null,
    doctor_status: null
  })

  const dispatch = useDispatch()
const ChangeUpdates = async () => {
  try {
    const res = await axios.post(
      `${baseURL}/accounts/update-doctor-status/`,
      {
        id: doctorStatus.id,
        doctor_status: doctorStatus.doctor_status,
      },
      {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      }
    );

    console.log("SUCCESS:", res.data);

    toast.success("Doctor status updated successfully!");
    dispatch(GetAllDoctors(user.access_token));

  } catch (err) {
    console.error(
      "ERROR:",
      err.response ? err.response.data : err.message
    );
  }
};
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
                {
                  doctors.map((doctor) => (
                    <tr>
                      <td>{doctor.full_name}</td>
                      <td>{doctor.department}</td>
                      <td>{doctor.experience} yrs</td>
                      <td>
                        <span className="badge badge--green">{doctor.doctor_status == "active" ? "Active" : "Inactive"}</span>
                      </td>
                      <td>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => setDoctorStatus({ id: doctor.id, doctor_status: e.target.value })}>
                          <option selected>Status Update</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </td>
                    </tr>
                  ))
                }

                
              </tbody>
            </table>
          </div>
          <button className='btn btn--primary' style={{marginTop: "18px"}} onClick={ChangeUpdates}>
            Save Changes
          </button>
        </div>

      </div>
    </main>
  )
}

export default AdminDocter


