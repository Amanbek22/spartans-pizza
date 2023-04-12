import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});
export const incremented = counterSlice.actions.incremented;

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    data: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.data.push(action.payload)
    },
  },
});
export const { addToBasket } = basketSlice.actions;

const reducers = combineReducers({
    counter: counterSlice.reducer,
    basket: basketSlice.reducer
})

export const store = configureStore({
  reducer: reducers,
});

console.log(store);
console.log(counterSlice);
window.store = store;
window.plus = counterSlice.actions.incremented;
