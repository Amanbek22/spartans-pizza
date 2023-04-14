import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    data: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const findedEl = state.data.find((el) => el.id === action.payload.id);
      if (!findedEl) {
          state.data.push(action.payload);
      } else {
        alert("Этот продукт уже в корзине")
      }
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToBasket, deleteProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
