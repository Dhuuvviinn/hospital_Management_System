import React from "react";
import doctorData from "../../data/DockerData";
import { Link } from "react-router";

function Doctors() {
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
          {doctorData.slice(0, 4).map((doctor) => <>
          <article className="card doctorCard">
            <div className="doctorCard__img"></div>
            <div className="doctorCard__body">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <div className="row">
                <span className="badge badge--green">Available</span>
                <Link className="btn btn--primary btn--sm" to={doctor.profileLink}>
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