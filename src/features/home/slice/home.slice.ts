import { createSlice } from "@reduxjs/toolkit";
import { HomeTypes } from "../types/home.types";


const initialState:HomeTypes.InitialState = {
    trendingTopics: [],
    suggestedUsers: [],
    title:'',
    subTitle:'',
    buttonsTexts:[],
    features:[],
    callToAction :{
        heading:'',
        text:'',
        buttons:[]
    },
    testimonials : []
}

const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{}
});



export default homeSlice.reducer;