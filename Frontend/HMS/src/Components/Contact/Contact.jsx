import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Get_all_feedback } from '../../Redux/Slices/FeedbackSlice';
const Contact = () => {
  const {user} = useSelector((state) => state.login);
  const [formData,setFormData] = useState({
    doctor_name: '',
    email: '',
    message: '',
    rating: 0 ,
  })
  const nav = useNavigate()
  const dispatch = useDispatch()
  const handleChange = async (e) => {
    e.preventDefault()
    formData["user_id"] = user.id
    const response = await axios.post("http://127.0.0.1:8000/feedback/submit-feedback/",formData,{
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${user.access_token}`
      }

    }).then((res) => {
      toast.success("Feedback submitted successfully!")
      dispatch(Get_all_feedback(user.access_token))
      nav("/")
    }).catch((err) => {
      toast.error("Error submitting feedback.");
    })
  }

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
              <p className="kicker">Feedback</p>
              <h2>Feedback Box</h2>

              <form style={{ marginTop: "14px" }} onSubmit={handleChange}>
                <div className="formGrid">
                  <div className="field">
                    <label htmlFor="cn">Dr Full Name</label>
                    <input
                      id="cn"
                      name="doctor_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      onChange={(e) => setFormData({ ...formData, doctor_name: e.target.value })}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="ce">Email<span>(Must be Valid and login Email)</span></label>
                    <input
                      id="ce"
                      name="email"
                      type="email"
                      placeholder="john@email.com"
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>



                  <div className="field full">
                    <label htmlFor="cm">Feedback For Doctor And Services </label>
                    <textarea
                      id="cm"
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      required
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className='field' style={{ display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center' }}>
                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>Rating</span>
                    {[1, 2, 3, 4, 5].map((star) => {
                      return (
                        <span
                          className='start'
                          style={{
                            cursor: 'pointer',
                            color: formData.rating >= star ? 'gold' : 'gray',
                            fontSize: `20px`,
                          }}
                          onClick={(e) => setFormData({ ...formData, rating: star })}
                        >
                          {' '}
                          ★{' '}
                        </span>
                      )
                    })}
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

              <button className="btn btn--ghost" to="/admin" disabled={user?.role == "patient" ? true : false} onClick={user.role == "admin" ? () => nav("/admin") : user.role == "staff" ? () => nav("/admin/appointments") : null}>
                Open Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
