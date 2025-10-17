import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth.types";
import { RootState } from "@reduxjs/toolkit/query";
import { setLoacalStorageInfo } from "@/utils/auth";
import api from "@/lib/axios";

export const signUpUser = createAsyncThunk("auth/sign-up",async (data)=>{
    const res = await api.post('/auth/sign-up',data,{showSuccessToast:true})
    setLoacalStorageInfo({accessToken:res.data.accessToken,userId:res.data.user.id})
    return res.data
})

export const signInUser = createAsyncThunk("auth/sign-in",async(data) => {
    const res = await api.post('/auth/sign-in',data,{showSuccessToast:true});
    setLoacalStorageInfo({accessToken:res.data.accessToken,userId:res.data.user.id})
    return res.data;
})

export const fetchUserData = createAsyncThunk('auth/fetchUserData',async({credentials}) => {
    const res = await api.get('auth/user-data',credentials)
    return res.data;
})

const initialState:AuthState = {
    user:null,
    accessToken:null,
    isAuthenticated:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(signUpUser.fulfilled,(state,action)=>{
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
            })
            .addCase(signInUser.fulfilled,(state,action)=>{
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
            })
            .addCase(fetchUserData.fulfilled,(state,action)=>{
                state.user = action.payload
            })
    }

})





export const authSelectors = {
    isAuthenticated:((state:RootState) => state.auth.isAuthenticated),
    accessToken:((state:RootState) => state.auth.isAuthenticated),
    user:((state:RootState) =>state.auth.user),
}


export const authSliceReducer =  authSlice.reducer;