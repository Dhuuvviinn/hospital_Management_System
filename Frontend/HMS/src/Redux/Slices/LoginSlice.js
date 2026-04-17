import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../services/API";

export const LoginUser = createAsyncThunk("auth/LoginUser",async (data,{rejectWithValue})=>{
    try{
        const response = await API.post("/accounts/login/",data)
        console.log("Login response:", response.data)
        return response.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.data)
    }
})

export const Me = createAsyncThunk('auth/me', async (_,{rejectWithValue})=>{
    try {
        const response = await API.get('/accounts/me/'  )
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)        
    }
})
export const LogoutUser = createAsyncThunk('auth/logout',async (_,{rejectWithValue})=>{
    try {
        const respose = await API.post('/accounts/logout/')
       
        return respose.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
const LoginSlice = createSlice({
    name:"login",
    initialState:{
        user:null,
        auth:false,
        loading:false,
        error:null

    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending,(state)=>{
            state.loading = true
            state.auth = false
            state.error = null
        }).addCase(LoginUser.fulfilled,(state,action)=>{
            state.user = action.payload.user
            state.loading = false
            state.auth = true
            state.error = null
        }).addCase(LoginUser.rejected,(state,{payload})=>{
            state.loading = false
            state.auth = false 
            state.error = payload
        }).addCase(Me.pending,(state)=>{
            state.loading = true
            state.auth = false 
            state.error = null
        }).addCase(Me.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload.user
            state.auth = true
            state.error = null 
        }).addCase(Me.rejected, (state, { payload }) => {
            state.loading = false
            state.auth = false
            state.error = payload
        }).addCase(LogoutUser.pending,(state)=>{
            state.loading = true
            state.auth = false
            state.error = null
        }).addCase(LogoutUser.fulfilled,(state)=>{
            state.loading = false
            state.user = null
            state.auth = false
            state.error = null
        }).addCase(LogoutUser.rejected,(state,{payload})=>{
            state.loading = false
            state.auth = false 
            state.error = payload   
        })
    }
})

export const {login} = LoginSlice.actions
export default LoginSlice.reducer
