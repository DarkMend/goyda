import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser(state) {
            state.user = null;
            state.token = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;