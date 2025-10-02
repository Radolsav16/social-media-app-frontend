import { Provider } from "react-redux";
import { store } from ".";
import React from "react";


export const StoreProvider = ({children}:{children:React.ReactNode}) =>{
    <Provider store={store}>
        {children}
    </Provider>
}