import { createSlice } from "@reduxjs/toolkit";

interface AuthState{
    user:null|{},
    accessToken:string | null
    loading:boolean,
    error:null| {}
}

const initialState = {
    user:null,
    accessToken:null,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
})



export default authSlice.reducer;