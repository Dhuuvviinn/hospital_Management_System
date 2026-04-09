import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function ResetPasswordUser() {

const { token } = useParams()   // gets token from URL: /reset-password?token=xxx
  const nav = useNavigate()
    
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    setLoading(true)
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/reset-password/", {
        token,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      })
      setSuccess(true)
      setTimeout(() => nav('/login'), 3000)  // redirect after 3s
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
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
          Reset Password
        </h2>
        <hr style={{ marginBottom: '1.5rem', borderColor: '#eee' }} />

        {success ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
            <p style={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px' }}>
              Password reset successful!
            </p>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '20px' }}>
              Redirecting to login in 3 seconds...
            </p>
            <Link to="/login" style={{ color: '#2563eb', fontWeight: 600, fontSize: '14px' }}>
              Go to Login now
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <p style={{ color: '#888', fontSize: '14px', marginBottom: '1.5rem' }}>
              Enter your new password below.
            </p>

            {/* new password */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 600, fontSize: '14px', display: 'block', marginBottom: '6px' }}>
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

            {/* confirm password */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 600, fontSize: '14px', display: 'block', marginBottom: '6px' }}>
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: `1.5px solid ${formData.confirmPassword && formData.password !== formData.confirmPassword ? 'red' : '#e0e0e0'}`,
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                  Passwords don't match
                </p>
              )}
            </div>

            {error && (
              <p style={{ color: 'red', fontSize: '13px', marginBottom: '12px' }}>{error}</p>
            )}

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
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>

          </form>
        )}

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

export default ResetPasswordUser