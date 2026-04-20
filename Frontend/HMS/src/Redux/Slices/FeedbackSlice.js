import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../baseurl";

export const Get_all_feedback = createAsyncThunk("feedback/GetAllFeedback",async(token,{rejectWithValue})=>{
   
    try {
        const response = await axios.get(`${baseURL}/feedback/GetAllFeedback/`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        console.log("Response from Get_all_feedback API:", response.data)
        return response.data
    } catch (error) {
        console.error("Error in Get_all_feedback thunk:", error.response ? error.response.data : error.message)
        return rejectWithValue(error.response.data)
    }
})

const feedbackSlice = createSlice({
    name:"feedback",
    initialState:{
        feedbacks:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
            builder.addCase(Get_all_feedback.pending,(state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(Get_all_feedback.fulfilled,(state,action)=>{
                state.loading = false
                state.feedbacks = action.payload
                state.error = null
            })
            .addCase(Get_all_feedback.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            })  
    }
})
export const FeedbackActions = feedbackSlice.actions
export default feedbackSlice.reducer
