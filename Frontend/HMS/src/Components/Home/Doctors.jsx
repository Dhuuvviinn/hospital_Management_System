import React from "react";
import doctorData from "../../data/DockerData";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Doctors() {
  const doctorData = useSelector((state) => state.doctor.doctors);
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
            <div className="doctorCard__img"></div>
            <div className="doctorCard__body">
              <h3>{doctor.full_name}</h3>
              <p>{doctor.department}</p>
              <div className="row">
                <span className="badge badge--green">{doctor.doctor_status}</span>
                <Link className="btn btn--primary btn--sm" to={`/doctors/${doctor.id}`}>
                  View
                </Link>
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