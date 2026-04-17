import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import doctorData from '../../data/DockerData'
import { useSelector } from 'react-redux';

const Doctor = () => {
  const doctorData = useSelector((state) => state.doctor.doctors);
  const nav = useNavigate()
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
                doctorData?.map((doctor) => <>
                <article className="card doctorCard" key={doctor.id}>
              <div className="doctorCard__img">
                <img src={`http://127.0.0.1:8000/media/${doctor.image}`} alt={doctor.full_name} />
              </div>
              <div className="doctorCard__body">
                <h3>{doctor.full_name}</h3>
                <p>{doctor.department}</p>
                <div className="row">
                  <span className={`badge badge--${doctor.doctor_status === 'active' ? 'green' : 'danger'}`}>
                    {doctor.doctor_status == 'active' ? 'Available' : 'Unavailable'}
                  </span>
                  <button className="btn btn--primary btn--sm" to={`/doctors/${doctor.id}`} onClick={() => nav(`/doctors/${doctor.id}`)}>
                    View
                  </button>
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
