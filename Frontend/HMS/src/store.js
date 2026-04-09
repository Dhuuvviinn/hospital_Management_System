import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './Redux/Slices/LoginSlice'
import  DoctorReducer  from './Redux/Slices/DoctorSlice'
const store = configureStore({
    reducer: {
        login: LoginReducer,
        doctor: DoctorReducer,
    },
})

export default store