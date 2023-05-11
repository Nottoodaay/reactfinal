import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const authenticateUser = createAsyncThunk("user/authenticateUser", async(values)=>{
    try {
        const route = "/users/register"
        const {data} = await axiosInstance.post(route, values.formValues)
        localStorage.setItem("token", data.token)
        localStorage.setItem("refreshToken", data.refreshToken)
        return data
    } catch (error) {
        
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        userData: null,
        loading: false,
        error: null,
    },
    extraReducers:(builder)=>{
        builder.addCase(authenticateUser.pending, (state)=>{
            state.loading = true 
        })
        builder.addCase(authenticateUser.fulfilled, (state, action)=>{
            state.loading = false
            state.userData = action.payload.user
            state.error = null
        })

        //TODO error case
    }
})

export const userReducer = userSlice.reducer