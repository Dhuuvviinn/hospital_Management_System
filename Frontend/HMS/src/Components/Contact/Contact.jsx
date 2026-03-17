import { Link } from 'react-router'

const Contact = () => {
  return (
    <>
     <section className="pageHero">
        <div className="container">
          <h1>Contact</h1>
          <p>Questions, feedback, or appointment help—reach out.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <div className="card__pad">
              <p className="kicker">Contact</p>
              <h2>Send us a message</h2>
              <p className="muted" style={{ marginTop: "10px" }}>
                We typically respond within 24 hours.
              </p>

              <form style={{ marginTop: "14px" }}>
                <div className="formGrid">
                  <div className="field">
                    <label htmlFor="cn">Full Name</label>
                    <input
                      id="cn"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="ce">Email</label>
                    <input
                      id="ce"
                      name="email"
                      type="email"
                      placeholder="john@email.com"
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="cs">Subject</label>
                    <input
                      id="cs"
                      name="subject"
                      type="text"
                      placeholder="Appointment query"
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="cm">Message</label>
                    <textarea
                      id="cm"
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <div className="field full">
                    <button className="btn btn--primary btn--full" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card__pad">
              <p className="kicker">Details</p>
              <h3 style={{ marginTop: "6px" }}>Reach us</h3>
              <div className="hr"></div>

              <div className="grid" style={{ gap: "10px" }}>
                <div className="listItem">
                  <div className="left">
                    <div className="ico">📍</div>
                    <div>
                      <div className="title">Address</div>
                      <div className="sub">123 Clinic Street, Your City</div>
                    </div>
                  </div>
                  <span className="badge badge--blue">Office</span>
                </div>

                <div className="listItem">
                  <div className="left">
                    <div className="ico">📞</div>
                    <div>
                      <div className="title">Phone</div>
                      <div className="sub">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <span className="badge badge--green">Call</span>
                </div>

                <div className="listItem">
                  <div className="left">
                    <div className="ico">✉️</div>
                    <div>
                      <div className="title">Email</div>
                      <div className="sub">support@medicare.com</div>
                    </div>
                  </div>
                  <span className="badge badge--amber">Mail</span>
                </div>
              </div>

              <div className="hr"></div>

              <Link className="btn btn--ghost" to="/dashboard">
                Open Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
