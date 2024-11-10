import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
    isActive: boolean;
}

const initialState: ModalState = {
    isActive: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        }
    }
})

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;