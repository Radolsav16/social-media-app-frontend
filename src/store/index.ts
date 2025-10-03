import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "./rootReducer";



export const makeStore =  () => {
    return configureStore({
        reducer:{
        ...rootReducer,
    },
   
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat()
    })
    
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
