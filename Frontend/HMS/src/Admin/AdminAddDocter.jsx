import axios from 'axios'
import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { GetAllDoctors } from '../Redux/Slices/DoctorSlice'
const AdminAddDocter = () => {
  const [formData, setFormData] = React.useState({
    full_name: "",
    department: "",
    experience: "",
    email: "",
    doctor_status: "",
    bio: "",
    image: null
  })
  console.log("Form Data:", formData)
  const {access_token} = useSelector((state)=> state.login.user)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const {user} = useSelector((state)=>state.login)
  const StaffLoginCreate = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://127.0.0.1:8000/accounts/admin-create-staff/',formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${access_token}`
      }
    })
    console.log("Response from adding doctor:", response) 
    if (response.status === 201){
      toast.success("Doctor added successfully!")
      dispatch(GetAllDoctors(user.access_token))
      nav('/')
    } else {
      toast.error("Failed to add doctor. Please try again.")
    }
  }

  return (
    <>

        {/* Main */}
        <main className="main">
         

          {/* Content */}
          <div className="content">
            <div className="container">
              <div className="pageTitle">
                <div>
                  <p className="kicker">Create</p>
                  <h1>Add Doctor</h1>
                  <p className="muted" style={{ marginTop: 6 }}>
                    Static UI form (wire to backend later).
                  </p>
                </div>

                <Link className="btn btn--ghost" to="/admin/doctors">
                  Back to list
                </Link>
              </div>

              <div className="card" style={{ padding: 18 }}>
                <form onSubmit={StaffLoginCreate}>
                  <div className="formGrid">
                    <div className="field">
                      <label htmlFor="dn">Doctor Name</label>
                      <input
                        id="dn"
                        type="text"
                        placeholder="Dr. Full Name"
                        required
                        onChange={(e)=>setFormData({...formData,full_name: e.target.value})}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="dn">Doctor Email</label>
                      <input
                        id="dn"
                        type="email"
                        placeholder="Dr. Email Must with @hms.com"
                        required
                        onChange={(e)=>setFormData({...formData,email: e.target.value})}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="dd">Department</label>
                      <select id="dd" required onChange={(e)=>setFormData({...formData,department: e.target.value})}>
                        <option value="">Select</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                        <option>Dermatology</option>
                        <option>Diagnostics</option>
                        <option>Pediatrics</option>
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="dx">Experience</label>
                      <input
                        id="dx"
                        type="text"
                        placeholder="e.g., 10 years"
                        required
                        onChange={(e)=>setFormData({...formData,experience: e.target.value})}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="ds">Status</label>
                      <select id="ds" required onChange={(e)=>setFormData({...formData,doctor_status: e.target.value})}>
                        <option value="">Select</option>
                        <option value="active">Active</option>
                        <option value="on_leave">On_Leave</option>      {/* ✅ lowercase 'l' */}
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>

                    <div className="field full">
                      <label htmlFor="db">Bio</label>
                      <textarea
                        id="db"
                        rows="5"
                        placeholder="Write a short doctor bio..."
                        onChange={(e)=>setFormData({...formData,bio: e.target.value})}
                      ></textarea>
                    </div>
                    <div className="field full">
                      <label htmlFor="di">Image</label>
                      <input
                        id="di"
                        type="file"
                        accept="image/*"
                        onChange={(e)=>setFormData({...formData,image: e.target.files[0]})}
                      />
                    </div>
                    <div className="field full">
                      <button
                        className="btn btn--primary btn--full"
                        type="submit"
                      >
                        Save Doctor
                      </button>
                      <div className="note">
                        Replace with POST /api/doctors.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </>
  )
}

export default AdminAddDocter
