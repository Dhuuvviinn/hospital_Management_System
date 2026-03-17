import React from 'react'
import { Link } from 'react-router'
import doctorData from '../../data/DockerData'

const Doctor = () => {
  return (
    <>
    <section className="pageHero">
        <div className="container">
          <h1>Doctors</h1>
          <p>Find the right specialist and book an appointment.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="kicker">Doctors</p>
              <h2>Browse specialists</h2>
            </div>
            <Link className="btn btn--ghost" to="/appointment">
              Book now
            </Link>
          </div>

          <div className="grid grid-4">
            {
                doctorData.map((doctor) => <>
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
                </>)
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Doctor
