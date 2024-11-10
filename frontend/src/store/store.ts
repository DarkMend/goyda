import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modal.slice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer
    }  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;