"use client"
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/slice/authSlice'
export const rootReducer = combineReducers({
    auth:authReducer
})