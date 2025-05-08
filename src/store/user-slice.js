import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    isLogedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        login(state) {
            state.isLogedIn = true;
        },
        logout(state) {
            state.isLogedIn = false;
        },
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;