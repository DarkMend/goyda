import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modal.slice";
import userReducer from './userSlice'; 

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        user: userReducer
    }  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;