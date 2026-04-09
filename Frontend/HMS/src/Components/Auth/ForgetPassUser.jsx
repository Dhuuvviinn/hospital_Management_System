import axios from 'axios'
import React, { useState } from 'react'
import { data, Link, useNavigate } from 'react-router'
const ForgetPassUser = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const nav = useNavigate()
    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post("http://127.0.0.1:8000/accounts/forget-password/", {"email": email})
            console.log("response:", response)
            if (response.status === 200) {
                alert("Reset link sent to your email!")
               // navigate to reset password page
            }
            
        } catch (error) {
            console.log("❌ Something is wrong in sending reset link:", error)
            alert("Failed to send reset link. Please try again.")
        } finally {
            setLoading(false)
        }
    }
  return (
     <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f6fa',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      }}>

        <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>
          Authentication
        </p>
        <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '1.5rem' }}>
          Forgot Password
        </h2>
        <hr style={{ marginBottom: '1.5rem', borderColor: '#eee' }} />

       
          <form onSubmit={sendEmail}>

            <p style={{ color: '#888', fontSize: '14px', marginBottom: '1.5rem' }}>
              Enter your email and we'll send you a link to reset your password.
            </p>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 600, fontSize: '14px', display: 'block', marginBottom: '6px' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1.5px solid #e0e0e0',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '50px',
                background: loading ? '#93c5fd' : '#2563eb',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: '8px',
              }}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>

          </form>
        

        <hr style={{ margin: '1.5rem 0', borderColor: '#eee' }} />
        <p style={{ fontSize: '14px', color: '#888', textAlign: 'center' }}>
          Remember your password?{' '}
          <Link to="/login" style={{ color: '#2563eb', fontWeight: 600 }}>
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default ForgetPassUser
