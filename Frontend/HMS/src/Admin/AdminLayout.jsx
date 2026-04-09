import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
     <div className="dash">
      <input type="checkbox" id="sideToggle" />

      <div className="dashLayout">
        <aside className="sidebar">
          <div className="sidebar__inner">
            <a className="sideBrand" href="../index.html" title="Back to site">
              <span className="mark">+</span>
              <span>MediCare Admin</span>
            </a>

            <nav className="sideNav">
              <NavLink  to="/admin" end className={({ isActive }) => isActive ? "active" : ""}>
                <span>Overview</span>
                <span style={{ opacity: 0.55 }}>›</span>
              </NavLink>
              <NavLink to="/admin/docter" className={({ isActive }) => isActive ? "active" : ""}>
                <span>Doctors</span>
                <span style={{ opacity: 0.55 }}>›</span>
              </NavLink>
              <NavLink to="/admin/appointments" className={({ isActive }) => isActive ? "active" : ""}>
                <span>Appointments</span>
                <span style={{ opacity: 0.55 }}>›</span>
              </NavLink>
              <NavLink to="/admin/add-doctor" className={({ isActive }) => isActive ? "active" : ""}>
                <span>Add Doctor</span>
                <span style={{ opacity: 0.55 }}>›</span>
              </NavLink>
              <NavLink to="/admin/message" className={({ isActive }) => isActive ? "active" : ""}>
                <span>Messages</span>
                <span style={{ opacity: 0.55 }}>›</span>
              </NavLink>
              <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "active" : ""}>
                <span>Settings</span>
                <span style={{ opacity: 0.55 }}>›</span>
              </NavLink >
            </nav>

            <div className="sideHint">
              <div style={{ fontWeight: 1000 }}>UI only</div>
              <div style={{ marginTop: 6 }}>
                Wire the tables and forms to your backend APIs later.
              </div>
            </div>
          </div>
        </aside>

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
                  <div style={{ fontWeight: 1000,color: "black" }}>Admin</div>
                  <div
                    style={{
                      fontSize: 12,
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
          <>
          <Outlet />     
          </>
          
        </main>
      </div>
    </div>
    </>
  )
}

export default AdminLayout
