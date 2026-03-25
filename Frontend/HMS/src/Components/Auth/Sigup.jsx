import React from 'react'

const Sigup = () => {
  return (
    <>
     <section className="section">
      <div
        className="container"
        style={{ display: "grid", placeItems: "center" }}
      >
        <div className="card" style={{ width: "min(560px, 100%)" }}>
          <div className="card__pad">
            <p className="kicker">Authentication</p>
            <h2 style={{ marginTop: "6px" }}>
              Create an Admin Account
            </h2>

            <div className="hr"></div>

            <form >
              <div className="formGrid">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 555 000 0000"
                    required
                  />
                </div>

                <div className="field full">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>

                <div className="field full">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div className="field full">
                  <button
                    className="btn btn--primary btn--full"
                    type="submit"
                  >
                    Create Account
                  </button>

                  <p
                    className="muted"
                    style={{ marginTop: "10px", fontSize: "13px" }}
                  >
                    Static UI. Redirects to dashboard.
                  </p>
                </div>
              </div>
            </form>

            <div className="hr"></div>

            <p className="muted" style={{ fontSize: "14px" }}>
              Already have an account?{" "}
              <a className="link" href="/login">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sigup
