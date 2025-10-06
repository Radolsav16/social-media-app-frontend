import { BASE_URL } from "@/app/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth.types";
import axios from "axios";
import { RootState } from "@reduxjs/toolkit/query";

export const signUpUser = createAsyncThunk("auth/sign-up",async (data)=>{
    try {
    const res = await axios.post(BASE_URL + '/auth/sign-up',data);
    console.log(res);
    return res
    } catch (error) {
        console.log(error)
    }
   
})


const initialState:AuthState = {
    user:null,
    accessToken:null,
    loading:false,
    error:null,
    isAuthenticated:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(signUpUser.pending,(state)=>{
                state.loading = true;
            })
            .addCase(signUpUser.fulfilled,(state,action)=>{
                console.log('here!')
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.user
                state.isAuthenticated = true;
            })
            .addCase(signUpUser.rejected,(state,action)=>{
                console.log(action.payload,'action payload error')
                state.error = {message:action.payload}
            })
    }

})





export const authSelectors = {
    isAuthenticated:(state:RootState) => {
        console.log(state.auth,'state auth')
    }
}


export const authSliceReducer =  authSlice.reducer;