import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "./rootReducer";
import { socialApi } from "./service/socialApi";


export const store = configureStore({
    reducer:{
        ...rootReducer,
        [socialApi.reducerPath]:socialApi.reducer,
    },
   
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat().concat(socialApi.middleware)
    
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


setupListeners(store.dispatch);