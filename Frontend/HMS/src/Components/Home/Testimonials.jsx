import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Testimonials() {
  const { feedbacks } = useSelector((state) => state.feedback);

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
          {feedbacks.map((fb) => (
            <article className="card quote" key={fb.id}>
              <p>“{fb.message}”</p>

              {/* ⭐ Rating */}
              <div style={{ margin: "10px 0", color: "gold" }}>
                {"★".repeat(fb.rating)}
                {"☆".repeat(5 - fb.rating)}
              </div>

              <div className="quote__meta">
                <div className="avatar"></div>
                <div>
                  {/* Patient Name */}
                  <div style={{ fontWeight: 1000 }}>{fb.name}</div>

                  {/* Doctor Name */}
                  <div
                    className="muted"
                    style={{ fontWeight: 800, fontSize: "13px" }}
                  >
                    Dr. {fb.doctor_name || "General"}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;