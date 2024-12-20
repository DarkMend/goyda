import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/product.interface";
// import { checkAuth } from "../api/checkAuth";

export interface UserState {
    user: {
        email: string,
        id: number,
        name: string,
        role: number,
        cart: IProduct[] | null;
    } | null,
    isAuth: boolean
}

export const initialState: UserState = {
    user: null,
    isAuth: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.user = action.payload.user;
            state.isAuth = true;
        },
        removeUser(state) {
            state.user = null;
            state.isAuth = false;
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(checkAuth.fulfilled, (state, action) => {
    //         state.user = action.payload?.user;  
    //         state.isAuth = true;
    //     })
    // }
})

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: UserState) => state.user

export default userSlice.reducer;