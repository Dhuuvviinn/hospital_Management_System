import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './Redux/Slices/LoginSlice'
import  DoctorReducer  from './Redux/Slices/DoctorSlice'
import AppointmentReducer from './Redux/Slices/Appointment'
import FeedbackReducer from './Redux/Slices/FeedbackSlice'
const store = configureStore({
    reducer: {
        login: LoginReducer,
        doctor: DoctorReducer,
        appointment: AppointmentReducer,
        feedback: FeedbackReducer,
    },
})

export default store