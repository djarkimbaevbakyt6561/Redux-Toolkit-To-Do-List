import { createSlice } from "@reduxjs/toolkit";

const authFromLocal = localStorage.getItem("Auth")
const auth = authFromLocal
const initialState = {
    auth: auth
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleLogHandler: (state, action) => {
            state.auth = !state.auth
        }
    }
})
export const authReducer = authSlice.reducer
export const authActions = authSlice.actions