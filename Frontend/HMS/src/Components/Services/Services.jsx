import React from 'react'
import { Link } from 'react-router'
import serviceData from '../../data/ServiceData';
const Services = () => {
  return (
    <>
     <section className="pageHero">
        <div className="container">
          <h1>Services</h1>
          <p>Departments and care services offered by MediCare.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="kicker">Services</p>
              <h2>Choose a department</h2>
            </div>
            <Link className="btn btn--ghost" to="/appointment">
              Book now
            </Link>
          </div>

          <div className="grid grid-3">
            {
                serviceData.map((Service) => <>
                <article className="card serviceCard">
              <div className="card__pad">
                <div className="ico">{Service.icon}</div>
                <div className="title">{Service.name}</div>
                <p className="desc">
                  {Service.description}
                </p>
                <Link className="link" to={Service.link}>Book →</Link>
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

export default Services
