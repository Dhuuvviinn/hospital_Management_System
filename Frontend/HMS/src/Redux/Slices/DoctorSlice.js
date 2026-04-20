import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { baseURL } from "../baseurl"

export const GetAllDoctors = createAsyncThunk("docter/getAllDoctors",async(token,thunkAPI)=>{
    try {   
        const response = await axios.get(`${baseURL}/accounts/get-all-doctors/`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true

        })
        console.log("Doctors data:", response.data)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }   
})
const DoctorSlice = createSlice({
    name:"doctor",
    initialState:{
        doctors:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(GetAllDoctors.pending,(state)=>{
            state.loading = true
            state.error = null
        }
        ).addCase(GetAllDoctors.fulfilled,(state,action)=>{
            state.loading = false
            state.doctors = action.payload.doctors
            state.error = null
        }).addCase(GetAllDoctors.rejected,(state,{payload})=>{
            state.loading = false
            state.error = payload
        })
    }
})

export const {doctor} = DoctorSlice.actions
export default DoctorSlice.reducer