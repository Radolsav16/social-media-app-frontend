import { BASE_URL } from "@/app/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth.types";
import axios from "axios";
import { RootState } from "@reduxjs/toolkit/query";

export const signUpUser = createAsyncThunk("auth/sign-up",async (data)=>{
    const res = await axios.post(BASE_URL + '/auth/sign-up',data);
    return res.data
})

export const signInUser = createAsyncThunk("auth/sign-in",async(data) => {
    const res = await axios.post(BASE_URL + '/auth/sign-in',data);
    return res.data;
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
                state.error = null;
            })
            .addCase(signUpUser.fulfilled,(state,action)=>{
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.user
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(signUpUser.rejected,(state,action)=>{
                state.error = {message:action.payload}
                state.loading = false;
            })

            .addCase(signInUser.pending,(state)=>{
                state.loading = true;
                state.error = null
            })

            .addCase(signInUser.fulfilled,(state,action)=>{
                state.loading = false;
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.user;
                state.error = null
                state.isAuthenticated = true;
            })

            .addCase(signInUser.rejected,(state,action) =>{
                state.loading = false;
                state.error = {message:action.payload}
            })
    }

})





export const authSelectors = {
    isAuthenticated:((state:RootState) => state.auth.isAuthenticated),
    accessToken:((state:RootState) => state.auth.isAuthenticated),
    isLoading:((state:RootState) => state.auth.loading),
    user:((state:RootState) =>state.auth.user),
    error:((state:RootState) => state.auth.error)
}


export const authSliceReducer =  authSlice.reducer;