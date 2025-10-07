"use client"
import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "@/features/auth/slice/authSlice";
export const rootReducer = combineReducers({
    auth:authSliceReducer,
})