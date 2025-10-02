import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const socialApi = createApi({
    reducerPath:'socialApi',
    baseQuery:fetchBaseQuery({baseUrl:''}),
    endpoints:()=>({})
});