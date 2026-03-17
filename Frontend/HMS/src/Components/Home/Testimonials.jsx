import React from "react";

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="kicker">Testimonials</p>
            <h2>What patients say</h2>
          </div>
        </div>

        <div className="grid grid-3">
          <article className="card quote">
            <p>“Super clean UI. Booking flow is simple and fast.”</p>
            <div className="quote__meta">
              <div className="avatar"></div>
              <div>
                <div style={{ fontWeight: 1000 }}>Sarah W.</div>
                <div
                  className="muted"
                  style={{ fontWeight: 800, fontSize: "13px" }}
                >
                  Cardiology
                </div>
              </div>
            </div>
          </article>

          <article className="card quote">
            <p>“Doctor profiles are clear and well structured.”</p>
            <div className="quote__meta">
              <div className="avatar"></div>
              <div>
                <div style={{ fontWeight: 1000 }}>James K.</div>
                <div
                  className="muted"
                  style={{ fontWeight: 800, fontSize: "13px" }}
                >
                  Diagnostics
                </div>
              </div>
            </div>
          </article>

          <article className="card quote">
            <p>“Dashboard layout is perfect for managing appointments.”</p>
            <div className="quote__meta">
              <div className="avatar"></div>
              <div>
                <div style={{ fontWeight: 1000 }}>Ayesha R.</div>
                <div
                  className="muted"
                  style={{ fontWeight: 800, fontSize: "13px" }}
                >
                  Pediatrics
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;