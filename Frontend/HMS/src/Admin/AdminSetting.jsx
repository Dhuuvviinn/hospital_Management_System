import React from 'react'

const AdminSetting = () => {
  return (
    <>
          <main className="main">
      <div className="topbar">
        <div className="container topbar__row">
          <label
            htmlFor="sideToggle"
            className="sideToggleBtn"
            aria-label="Toggle sidebar"
          >
            <span></span>
            <span></span>
            <span></span>
          </label>

          <div className="search" role="search">
            <span style={{ fontWeight: 1000, opacity: 0.7 }}>⌕</span>
            <input
              type="text"
              placeholder="Search doctors, patients, appointments..."
            />
          </div>

          <div className="userPill">
            <span className="dot"></span>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 1000 }}>Admin</div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  fontWeight: 800,
                }}
              >
                online
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="pageTitle">
            <div>
              <p className="kicker">System</p>
              <h1>Settings</h1>
              <p className="muted" style={{ marginTop: "6px" }}>
                Branding + clinic settings (static UI).
              </p>
            </div>
          </div>

          <div className="grid grid-2">
            <div className="card" style={{ padding: "18px" }}>
              <p className="kicker">Clinic</p>
              <h3 style={{ marginTop: "6px" }}>Business details</h3>

              <form action="#" method="post" style={{ marginTop: "14px" }}>
                <div className="formGrid">
                  <div className="field full">
                    <label htmlFor="cname">Clinic name</label>
                    <input id="cname" type="text" defaultValue="MediCare" />
                  </div>

                  <div className="field full">
                    <label htmlFor="caddr">Address</label>
                    <input
                      id="caddr"
                      type="text"
                      defaultValue="123 Clinic Street, Your City"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="cph">Phone</label>
                    <input
                      id="cph"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="cmail">Email</label>
                    <input
                      id="cmail"
                      type="email"
                      defaultValue="support@medicare.com"
                    />
                  </div>

                  <div className="field full">
                    <button className="btn btn--primary btn--full" type="submit">
                      Save
                    </button>
                    <div className="note">Replace with PUT /api/settings</div>
                  </div>
                </div>
              </form>
            </div>

            <div className="card" style={{ padding: "18px" }}>
              <p className="kicker">Brand</p>
              <h3 style={{ marginTop: "6px" }}>Theme settings</h3>
              <p className="muted" style={{ marginTop: "10px" }}>
                Edit CSS variables in <code>assets/css/base.css</code>.
              </p>

              <div className="hr"></div>

              <div className="grid" style={{ gap: "10px" }}>
                <div className="listItem">
                  <div className="left">
                    <div className="ico">🎨</div>
                    <div>
                      <div className="title">Primary color</div>
                      <div className="sub">--primary / --primary-600</div>
                    </div>
                  </div>
                  <span className="badge badge--blue">CSS</span>
                </div>

                <div className="listItem">
                  <div className="left">
                    <div className="ico">🧩</div>
                    <div>
                      <div className="title">Components</div>
                      <div className="sub">
                        Buttons, cards, forms, tables
                      </div>
                    </div>
                  </div>
                  <span className="badge badge--green">Reusable</span>
                </div>

                <div className="listItem">
                  <div className="left">
                    <div className="ico">🔒</div>
                    <div>
                      <div className="title">Auth pages</div>
                      <div className="sub">Static login/register</div>
                    </div>
                  </div>
                  <span className="badge badge--amber">UI only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default AdminSetting
