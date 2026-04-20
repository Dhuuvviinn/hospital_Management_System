import axios from 'axios'
import { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Get_all_Appointment } from '../Redux/Slices/Appointment'
import { baseURL } from '../Redux/baseurl'

const AdminAppointment = () => {
  const {appointments} = useSelector((state)=> state.appointment)
  const {user} = useSelector((state)=> state.login)
  const {doctors} = useSelector((state)=> state.doctor) 
  const dispatch = useDispatch()
  const appointmentsCopy = appointments.data.map((a) => ({ ...a }))
  for (let i of doctors) {
    console.log("Doctor in loop:", i.full_name)
    for (let j of appointmentsCopy) {
      if (i.id == j.doctor) {
        j["doctor_name"] = i.full_name
      }
    }
  }

  const confirmAppointment = (id, status) => {
    // if (status == "confirmed") {
      const response = axios.post(`${baseURL}/api/doctor-accept-reject-appointment/`,{ id: id, status: status },{
        headers:{
          Authorization: `Bearer ${user.access_token}`
        },
      }).then((res)=>{
        if (res.status == 200){
          toast.success("Appointment confirmed successfully!")
          dispatch(Get_all_Appointment(user.access_token))
        }
      }).catch((err)=>{
        console.error("Error confirming appointment:", err.response ? err.response.data : err.message)
      })
    }
  // }
  
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

                {
                  user.role == "staff" ? (<>
                  {
                 appointments && appointments.data.map((appointment)=>(
                    <tr key={appointment.id}>
                  <td>{appointment.full_name}</td>
                  <td>{user.full_name}</td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_time}</td>
                  <td>
                    <span className="badge badge--amber">{appointment.status}</span>
                  </td>
                  <td>
                    {appointment.status == "pending" ? (
                      <>
                        <p className="btn btn--primary btn--sm"  onClick={()=>{confirmAppointment(appointment.id,"confirmed")}}>
                          Confirm
                        </p>
                        <p className="btn btn--ghost btn--sm"  onClick={()=>{confirmAppointment(appointment.id,"cancelled")}}>
                          Reject
                        </p>
                      </> 
                    ):(
                      <>
                       <p className="btn btn--ghost btn--sm" onClick={()=>{confirmAppointment(appointment.id,"cancelled")}}>
                      Cancelled
                    </p>
                      </>
                    )}
                    
                   
                  </td>
                </tr>
                  ))
                }
                  </>) : (<>
                  {
                 appointmentsCopy && appointmentsCopy.map((appointment)=>(
                    <tr key={appointment.id}>
                  <td>{appointment.full_name}</td>
                  <td>{appointment.doctor_name}</td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_time}</td>
                  <td>
                    <span className="badge badge--amber">{appointment.status}</span>
                  </td>
                  <td>
                    {appointment.status == "pending" ? (
                      <>
                        <a className="btn btn--primary btn--sm" href="#" >
                          Confirm
                        </a>
                        <a className="btn btn--ghost btn--sm" href="#">
                          Reject
                        </a>
                      </>
                    ):(
                      <>
                       <a className="btn btn--ghost btn--sm" href="#" >
                      Cancelled
                    </a>
                      </>
                    )}
                    
                   
                  </td>
                </tr>
                  ))
                }
                  </>)
                }
                
                

               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminAppointment
