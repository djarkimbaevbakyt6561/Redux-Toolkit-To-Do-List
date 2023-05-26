import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    formValid: false
}
export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        getEmailValue: (state, action) => {
            state.email = action.payload
        },
        getPasswordValue: (state, action) => {
            state.password = action.payload
        },
        emailValidHandler: (state, action) => {
            state.emailValid = action.payload.includes("@")
        },
        passwordValidHandler: (state, action) => {
            state.passwordValid = action.payload.trim().length > 6
        },
        formValidHandler: (state, action) => {
            state.formValid = state.passwordValid && state.emailValid ? true : false
        }
    }
})
export const loginReducer = loginSlice.reducer
export const loginActions = loginSlice.actions