import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Appointment_TO_Doctor, Get_all_Appointment } from "../../Redux/Slices/Appointment";
import { toast } from "react-toastify";

const DoctorProfileSection = () => {

  const { id } = useParams()
  const { user } = useSelector((state) => state.login);
  const doctorData = useSelector((state) => state.doctor.doctors);
  const filterDataForProfile = doctorData.find((doctor) => doctor.id == id);
  const dispatch = useDispatch()
  const [bookAppointmentData, setBookAppointmentData] = useState({
    full_name: "",
    phone: "",
    appointment_date: "",
    appointment_time: "",
    reason: "",
  });
  
  const nav = useNavigate()
  const formatToAMPM = (time24) => {
    if (!time24) return "";

    const [hour, minute] = time24.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    return `${h}:${minute} ${ampm}`;
  };
  console.log("Book Appointment Data:", bookAppointmentData)
  const TakeAppointment = (e) => {
    e.preventDefault()
    console.log("Submitting appointment request with data:", filterDataForProfile)
    bookAppointmentData["doctor"] = id
    bookAppointmentData["patient"] = user.id
    bookAppointmentData["Department"] = filterDataForProfile.department
    dispatch(Appointment_TO_Doctor({token: user.access_token, data: bookAppointmentData})).unwrap().then((res)=>{
      toast.success("Appointment request sent successfully!")
      dispatch(Get_all_Appointment(user.access_token))
      nav('/')
    }).catch((err)=>{
      toast.error("Failed to send appointment request. Please try again.")
    })
  }
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="card">
          <div className="">
            <img src={`http://127.0.0.1:8000/media/${filterDataForProfile?.image}`} alt="" />
          </div>

          <div className="card__pad">
            <p className="kicker">Doctor Profile</p>
            <h2 style={{ marginTop: "6px" }}>{filterDataForProfile?.full_name}</h2>
            <p className="muted" style={{ marginTop: "8px", fontWeight: 900 }}>
              {`${filterDataForProfile?.department} • ${filterDataForProfile?.experience}+ years experience`}
            </p>

            <div className="hr"></div>

            <div className="grid" style={{ gap: "10px" }}>
              <div className="badge badge--green">Available today</div>
              <div className="badge badge--blue">English / Spanish</div>
              <div className="badge badge--amber">Clinic: Downtown</div>
            </div>

            <p className="muted" style={{ marginTop: "12px" }}>
              {filterDataForProfile?.bio}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card__pad">
            <p className="kicker">Book with this doctor</p>
            <h3 style={{ marginTop: "6px" }}>Appointment request</h3>
            <p className="muted" style={{ marginTop: "8px" }}>
              Static UI form. Wire to backend later.
            </p>

            <form onSubmit={TakeAppointment} method="get" style={{ marginTop: "14px" }}>
              <div className="formGrid">
                <div className="field">
                  <label htmlFor="n2">Full Name</label>
                  <input
                    id="n2"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={(e) => setBookAppointmentData({ ...bookAppointmentData, full_name: e.target.value })}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="p2">Phone</label>
                  <input
                    id="p2"
                    name="phone"
                    type="tel"
                    placeholder="+1 555 000 0000"
                    onChange={(e) => setBookAppointmentData({ ...bookAppointmentData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="dt2">Date</label>
                  <input id="dt2" name="date" type="date" required onChange={(e) => setBookAppointmentData({ ...bookAppointmentData, appointment_date: e.target.value })} />
                </div>

                {/* <div className="field">
                  <label htmlFor="tm2">Time</label>
                  <input id="tm2" name="time" type="time" required onChange={(e)=>setBookAppointmentData({...bookAppointmentData, appointment_time: e.target.value})} />
                </div> */}
                <div className="field half">
                  <label htmlFor="time">Select Time</label>

                  <input
                    type="time"
                    id="time"
                    onChange={(e) => {
                      const time24 = e.target.value;

                      setBookAppointmentData({
                        ...bookAppointmentData,
                        appointment_time: time24 + ":00"
                      });
                    }}
                  />

                  {/* Optional display */}
                  {bookAppointmentData.appointment_time && (
                    <p style={{ marginTop: "5px", color: "gray" }}>
                      Selected: {formatToAMPM(bookAppointmentData.appointment_time)}
                    </p>
                  )}
                </div>
                <div className="field full">
                  <label htmlFor="m2">Notes</label>
                  <textarea
                    id="m2"
                    name="notes"
                    rows="4"
                    placeholder="Describe symptoms briefly..."
                    onChange={(e) => setBookAppointmentData({ ...bookAppointmentData, reason: e.target.value })}
                  ></textarea>
                </div>

                <div className="field full">
                  <button className="btn btn--primary btn--full" type="submit">
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSection;