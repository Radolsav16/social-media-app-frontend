"use client"
import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "@/features/auth/slice/authSlice";
console.log(authSliceReducer)
export const rootReducer = combineReducers({
    auth:authSliceReducer
})