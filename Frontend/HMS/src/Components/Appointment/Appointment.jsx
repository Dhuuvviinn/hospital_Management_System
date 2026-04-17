import React, { use } from 'react'
import { Appointment_TO_Doctor, Get_all_Appointment, getAppointmentsUsingDepartment } from '../../Redux/Slices/Appointment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Appointment = () => {
  const [formData, setFormData] = React.useState({
    full_name: "",
    phone: "",
    Department: "",
    appointment_date: "",
    appointment_time: "",
    reason: "",
  })
  const {user} = useSelector((state)=>state.login)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const formatToAMPM = (time24) => {
    if (!time24) return "";

    const [hour, minute] = time24.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    return `${h}:${minute} ${ampm}`;
  };
  const BookAppointmentWithoutDoctor = (e) =>{
    e.preventDefault()
    formData["patient"] = user.id
    dispatch(getAppointmentsUsingDepartment({data:formData,token:user.access_token})).unwrap().then((res)=>{
      dispatch(Get_all_Appointment(user.access_token))
      nav('/')
    }).catch((err)=>{
      console.error("Failed to send appointment request.", err)
    })
  }
  return (
    <>
    <section className="pageHero">
        <div className="container">
          <h1>Appointment</h1>
          <p>Book a consultation slot in minutes.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">

          {/* Info Card */}
          <div className="card">
            <div className="card__pad">
              <p className="kicker">Appointment</p>
              <h2>Book an appointment</h2>

              <p className="muted" style={{ marginTop: "10px" }}>
                Submit your details and our team will confirm the slot.
                For emergencies, use the hotline.
              </p>

              <div className="hr"></div>

              <div className="grid" style={{ gap: "10px" }}>
                <div className="listItem">
                  <div className="left">
                    <div className="ico">📍</div>
                    <div>
                      <div className="title">Clinic location</div>
                      <div className="sub">123 Clinic Street, Your City</div>
                    </div>
                  </div>
                  <span className="badge badge--blue">Map</span>
                </div>

                <div className="listItem">
                  <div className="left">
                    <div className="ico">⏱️</div>
                    <div>
                      <div className="title">Working hours</div>
                      <div className="sub">Mon–Sun, 8:00–20:00</div>
                    </div>
                  </div>
                  <span className="badge badge--green">Open</span>
                </div>

                <div className="listItem">
                  <div className="left">
                    <div className="ico">📞</div>
                    <div>
                      <div className="title">Hotline</div>
                      <div className="sub">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <span className="badge badge--amber">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="card">
            <div className="card__pad">
              <p className="kicker">Request form</p>
              <h3 style={{ marginTop: "6px" }}>Enter your details</h3>

              <form style={{ marginTop: "14px" }} onSubmit={BookAppointmentWithoutDoctor}>
                <div className="formGrid">

                  <div className="field">
                    <label htmlFor="an">Full Name</label>
                    <input id="an" name="name" type="text" placeholder="John Doe" required onChange={(e)=>setFormData({...formData,full_name:e.target.value})}/>
                  </div>

                  {/* <div className="field">
                    <label htmlFor="ae">Email</label>
                    <input id="ae" name="email" type="email" placeholder="john@email.com" required />
                  </div> */}

                  <div className="field">
                    <label htmlFor="ap">Phone</label>
                    <input id="ap" name="phone" type="tel" placeholder="+1 555 000 0000" required onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>
                  </div>

                  <div className="field">
                    <label htmlFor="ad">Department</label>
                    <select id="ad" name="dept" required onChange={(e)=>setFormData({...formData,Department:e.target.value})}>
                      <option value="">Select</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                      <option>Dermatology</option>
                      <option>Diagnostics</option>
                      <option>Pediatrics</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="adate">Preferred Date</label>
                    <input id="adate" name="date" type="date" required onChange={(e)=>setFormData({...formData,appointment_date:e.target.value})}/>
                  </div>

                   <div className="field half">
                  <label htmlFor="time">Select Time</label>

                  <input
                    type="time"
                    id="time"
                    onChange={(e) => {
                      const time24 = e.target.value;

                      setFormData({
                        ...formData,
                        appointment_time: time24 + ":00"
                      });
                    }}
                  />

                  {/* Optional display */}
                  {formData.appointment_time && (
                    <p style={{ marginTop: "5px", color: "gray" }}>
                      Selected: {formatToAMPM(formData.appointment_time)}
                    </p>
                  )}
                </div>

                  <div className="field full">
                    <label htmlFor="amsg">Notes</label>
                    <textarea
                      id="amsg"
                      name="notes"
                      rows="4"
                      placeholder="Write symptoms or reason for visit..."
                      onChange={(e)=>setFormData({...formData,reason:e.target.value})}
                    ></textarea>
                  </div>

                  <div className="field full">
                    <button className="btn btn--primary btn--full" type="submit">
                      Submit Request
                    </button>

                    <p
                      className="muted"
                      style={{ marginTop: "10px", fontSize: "13px" }}
                    >
                      UI only. Replace form action when backend is ready.
                    </p>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Appointment
