import React from "react";
import doctorData from "../../data/DockerData";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Doctors() {
  const doctorData = useSelector((state) => state.doctor.doctors);
  const nav = useNavigate();
  return (
    <section className="section section--alt" id="doctors">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="kicker">Doctors</p>
            <h2>Top available doctors</h2>
          </div>
          <Link className="btn btn--ghost" to="/doctors">
            Browse all
          </Link>
        </div>

        <div className="grid grid-4">
          {doctorData.map((doctor) => <>
          <article className="card doctorCard" key={doctor.id}>
            <div className="doctorCard__img">
              <img src={`https://dhruvin-hms-media-bucket-12345.s3.us-east-1.amazonaws.com/${doctor.image}`} alt={doctor.full_name} />
            </div>
            <div className="doctorCard__body">
              <h3>{doctor.full_name}</h3>
              <p>{doctor.department}</p>
              <div className="row">
                <span className={`badge badge--${doctor.doctor_status === 'active' ? 'green' : 'danger'}`}>
                  {doctor.doctor_status == 'active' ? 'Available' : 'Unavailable'}
                </span>
                <button className="btn btn--primary btn--sm" disabled={doctor.doctor_status == "active" ? false : true} style={doctor.doctor_status == "active" ? {} : { opacity: "0.2", border: "none" }}  onClick={() => nav(`/doctors/${doctor.id}`)}>
                  View
                </button>
              </div>
            </div>
          </article>
          </>)}

        </div>
      </div>
    </section>
  );
}

export default Doctors;