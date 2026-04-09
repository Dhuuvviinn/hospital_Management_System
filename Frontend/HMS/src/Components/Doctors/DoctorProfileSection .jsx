import React from "react";

const DoctorProfileSection = () => {
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="card">
          <div className="doctorCard__img" style={{ height: "220px" }}></div>

          <div className="card__pad">
            <p className="kicker">Doctor Profile</p>
            <h2 style={{ marginTop: "6px" }}>Dr. Amelia Carter</h2>
            <p className="muted" style={{ marginTop: "8px", fontWeight: 900 }}>
              Cardiologist • 12+ years experience
            </p>

            <div className="hr"></div>

            <div className="grid" style={{ gap: "10px" }}>
              <div className="badge badge--green">Available today</div>
              <div className="badge badge--blue">English / Spanish</div>
              <div className="badge badge--amber">Clinic: Downtown</div>
            </div>

            <p className="muted" style={{ marginTop: "12px" }}>
              Focus: Preventive cardiology, BP management, ECG interpretation,
              lifestyle interventions. Replace this with real doctor information.
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

            <form action="appointment.html" method="get" style={{ marginTop: "14px" }}>
              <div className="formGrid">
                <div className="field">
                  <label htmlFor="n2">Full Name</label>
                  <input
                    id="n2"
                    name="name"
                    type="text"
                    placeholder="John Doe"
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
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="dt2">Date</label>
                  <input id="dt2" name="date" type="date" required />
                </div>

                <div className="field">
                  <label htmlFor="tm2">Time</label>
                  <input id="tm2" name="time" type="time" required />
                </div>

                <div className="field full">
                  <label htmlFor="m2">Notes</label>
                  <textarea
                    id="m2"
                    name="notes"
                    rows="4"
                    placeholder="Describe symptoms briefly..."
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