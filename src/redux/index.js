import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { basketReducer } from "./slices/basketSlice";
import { counterReducer } from "./slices/counterSlice";

const reducers = combineReducers({
    counter: counterReducer,
    basket: basketReducer,
    auth: authReducer,
})

export const store = configureStore({
  reducer: reducers,
});

console.log(store);
window.store = store;


store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem("auth", state.auth.isAuth);
});