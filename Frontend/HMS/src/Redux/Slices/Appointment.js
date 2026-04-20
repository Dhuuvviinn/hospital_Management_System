import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetAllDoctors } from "./DoctorSlice"
import axios from "axios"
import { toast } from "react-toastify"
import { baseURL } from "../baseurl"

export const Appointment_TO_Doctor = createAsyncThunk("appointment/AppoitnmentsToDoctor",async({data,token},{rejectWithValue})=>{
    console.log("Data received in Get_All_Appointments:", data,token)
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/appointment-to-doctor/",data,{
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }catch(error){
        return rejectWithValue(error.response.data)
    }
})

export const getAppointmentsUsingDepartment = createAsyncThunk("appointment/getAppointmentsUsingDepartment",async({token,data},{rejectWithValue})=>{
    console.log("Data received in getAppointmentsUsingDepartment:", data,token)
    try {
        const response = await axios.post(`${baseURL}/api/book-appointment-without-selecting-doctor/`,data,{
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            toast.success("Appointment request sent successfully!")
        })
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const Get_all_Appointment = createAsyncThunk("appointment/GetAllAppointments",async(token,{rejectWithValue})=>{
    try {
        const response = await axios.get(`${baseURL}/api/get_all_Appointments/`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        console.log("Response from Get_all_Appointment API:", response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
const AppointmentSlice = createSlice({
    name:"appointment",
    initialState:{
        appointments:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(Get_all_Appointment.pending,(state)=>{
            state.loading = true
            state.error = null
        }).addCase(Get_all_Appointment.fulfilled,(state,action)=>{
            state.loading = false
            state.appointments = action.payload
            state.error = null
        }).addCase(Get_all_Appointment.rejected,(state,{payload})=>{
            state.loading = false
            state.error = payload   
            })
    }
})

export const {appointment} = AppointmentSlice.actions
export default AppointmentSlice.reducer