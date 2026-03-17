import React from 'react'

const Login = () => {
  return (
    <>
    <section className="section">
      <div className="container" style={{ display: "grid", placeItems: "center" }}>
        <div className="card" style={{ width: "min(520px, 100%)" }}>
          <div className="card__pad">
            <p className="kicker">Authentication</p>
            <h2 style={{ marginTop: "6px" }}>Login to Dashboard</h2>
            <div className="hr"></div>

            <form >
              <div className="formGrid">
                <div className="field full">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="admin@medicare.com"
                    required
                  />
                </div>

                <div className="field full">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="field full">
                  <button className="btn btn--primary btn--full" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>

            <div className="hr"></div>
            <p className="muted" style={{ fontSize: "14px" }}>
              No account? <a className="link" href="/signup">Create one</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login
