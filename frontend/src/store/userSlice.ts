import { createSlice } from "@reduxjs/toolkit";
import { checkAuth } from "../api/checkAuth";

export interface User {
    email: string,
    id: number,
    name: string
}

export interface UserState {
    user: User | null,
    token: string | null,
    isAuth: boolean
}

const initialState: UserState = {
    user: null,
    token: null,
    isAuth: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = action.payload.isAuth;
        },
        removeUser(state) {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.user = action.payload?.user;   
        })
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;