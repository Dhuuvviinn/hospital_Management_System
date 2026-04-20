import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import React, { use } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { baseURL } from '../../Redux/baseurl'

const Sigup = () => {
  const [formData, setFormData] = React.useState({
    full_name: "",
    email: "",
    password: "",
    role: ""
  })
  const dispatch = useDispatch()
  const nav = useNavigate()
  const SignUpUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${baseURL}/accounts/signup/`, formData)
      
      if (response.status === 201) {
        toast.success("Account created successfully!")
        nav('/login')
      } 
    } catch (error) {
      toast.error("Signup failed. Please try again.")
      console.log("❌ Something is wrong in signup :", error)      
    }
  }

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
                Create an HMS Account
              </h2>

              <div className="hr"></div>

              <form onSubmit={SignUpUser}>
                <div className="formGrid">
                  <div className="field full">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      id="full_name"
                      type="text"
                      placeholder="Your Name"
                      required
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      required
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>

                  <div className="field full">
                    <button className="btn btn--primary btn--full" type="submit">
                      Create Account
                    </button>
                    <p className="muted" style={{ marginTop: "10px", fontSize: "13px" }}>
                      Static UI. Redirects to dashboard.
                    </p>
                  </div>
                </div>
              </form>
              <div className="hr"></div>

              <p className="muted" style={{ fontSize: "14px" }}>
                Already have an account?{" "}
                <Link className="link" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sigup
