import React from 'react'
import { useSelector } from 'react-redux'

const AdminMessage = () => {
  const {feedbacks} = useSelector((state)=> state.feedback)
  return (
    <>
     <main className="main">
      <div className="content">
        <div className="container">
          <div className="pageTitle">
            <div>
              <p className="kicker">Inbox</p>
              <h1>Messages</h1>
              <p className="muted" style={{ marginTop: "6px" }}>
                Contact requests from the public site (static UI).
              </p>
            </div>
            <a className="btn btn--ghost" href="../contact.html">
              Open Contact page
            </a>
          </div>

          <div className="full">
            <div className="card" style={{ padding: "18px" }}>
              <div style={{ fontWeight: 1000 }}>Recent</div>
              <div
                className="muted"
                style={{ fontWeight: 800, fontSize: "13px", marginTop: "4px" }}
              >
                Click to view (static)
              </div>

              <div style={{ marginTop: "12px" }} className="grid">
                {
                  feedbacks.map((fb)=>(
                    <>
                     <div className="listItem">
                  <div className="left">
                    <div className="avatarSq" style={{display: "flex", alignItems: "center", justifyContent: "center",color: "white", backgroundColor: "green"}}><h1>{fb.name.charAt(0).toUpperCase()}</h1></div>
                    <div>
                      <div className="title" style={{color: "green"}}>{fb.name.toUpperCase()}</div>
                      <div className="sub">{fb.message}</div>
                      <div className="sub">{fb.email}</div>
                    </div>
                  </div>
                  <span className="badge badge--green">Dr {fb.doctor_name}</span>
                </div>
                    </>
                  ))
                }
              </div>
            </div>

            {/* <div className="card formCard">
              <p className="kicker">Preview</p>
              <h3 style={{ marginTop: "6px" }}>Sarah W.</h3>
              <p className="muted" style={{ marginTop: "8px" }}>
                Subject: Appointment query
                <br />
                Message: Can I get an earlier slot for cardiology consultation?
              </p>

              <div className="hr"></div>
              <form action="#" method="post">
                <div className="field">
                  <label htmlFor="r">Reply</label>
                  <textarea
                    id="r"
                    rows="5"
                    placeholder="Write your reply..."
                  ></textarea>
                </div>
                <button
                  className="btn btn--primary btn--full"
                  style={{ marginTop: "12px" }}
                  type="submit"
                >
                  Send Reply
                </button>
                <div className="note">Replace with POST /api/messages/reply</div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default AdminMessage
