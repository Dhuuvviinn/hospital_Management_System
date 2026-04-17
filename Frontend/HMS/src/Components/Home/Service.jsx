import React from "react";
import { Link } from "react-router";
import serviceData from "../../data/ServiceData";

function Service() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="kicker">Services</p>
            <h2>Departments & care services</h2>
          </div>
          <Link className="btn btn--ghost" to="/services">
            View all
          </Link>
        </div>

        <div className="grid grid-3">
          {
            serviceData.slice(0, 3).map((service)=><>
            <article className="card serviceCard">
            <div className="card__pad">
              <div className="ico">{service.icon}</div>
              <div className="title">{service.name}</div>
              <p className="desc">
                {service.description}
              </p>
              <Link className="link" to={service.link}>
                Book →
              </Link>
            </div>
          </article>
            </>)
          }
         
        </div>
      </div>
    </section>
  );
}

export default Service;