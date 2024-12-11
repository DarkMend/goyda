import { createSlice } from "@reduxjs/toolkit";
// import { checkAuth } from "../api/checkAuth";

export interface User {
    email: string,
    id: number,
    name: string
}

export interface UserState {
    user: User | null,
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
        setUser(state, action) {
            state.user = action.payload.data;
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

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;