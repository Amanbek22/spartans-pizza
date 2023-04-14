import { createSlice } from "@reduxjs/toolkit";

const authLocal = JSON.parse(localStorage.getItem('auth'))
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: authLocal
  },
  reducers: {
    login: (state, action) => {
        state.isAuth = action.payload   
    },
    logout: () => {},
  },
});
export const { login: loginAction } = authSlice.actions;
export const authReducer = authSlice.reducer
