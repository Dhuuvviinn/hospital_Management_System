import React, { use } from 'react'
import { LoginUser } from '../../Redux/Slices/LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()

  const LoginAPIcall = (e) =>{
    e.preventDefault();
    console.log("formData")
    dispatch(LoginUser(formData)).unwrap().then(()=>{
      toast.success("Login successful!")
    }).catch(()=>{
      toast.error("Login failed. Please check your credentials.")
    })
  }
  return (
    <>
    <section className="section">
      <div className="container" style={{ display: "grid", placeItems: "center" }}>
        <div className="card" style={{ width: "min(520px, 100%)" }}>
          <div className="card__pad">
            <p className="kicker">Authentication</p>
            <h2 style={{ marginTop: "6px" }}>Login To HMS</h2>
            <div className="hr"></div>

            <form onSubmit={LoginAPIcall}>
              <div className="formGrid">
                <div className="field full">
                  <label>Email</label>
                  
                  <input
                    type="email"
                    placeholder="admin@medicare.com"
                    required
                    onChange = {(e)=> setFormData({...formData,email:e.target.value})}
                  />
                </div>

                <div className="field full">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                  />
                </div>

                <div className="field full">
                  <button className="btn btn--primary btn--full" type="submit" >
                    Login
                  </button>
                </div>
              </div>
            </form>

            <div className="hr" ></div>
            <div style={{display: 'flex',alignItems:'center',justifyContent:'space-between'}}>
           <p style={{ textAlign: "right", marginBottom: "8px" }}>
  <Link 
    to="/forget-password" 
    style={{ color: "#2563eb", fontWeight: "600", cursor: "pointer", fontSize: "13px" }}
  >
    Forgot password?
  </Link>
</p>


<p className="muted" style={{ fontSize: "14px" }}>
  No account? <Link className="link" to="/signup">Create one</Link>
</p>
</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login
