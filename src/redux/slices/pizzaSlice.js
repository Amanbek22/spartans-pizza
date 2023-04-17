import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPizza, deletePizza, getPizzas } from "../../api/Api";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async () => {
    const res = await getPizzas();
    return res.data;
})

export const fetchDeletePizza = createAsyncThunk('pizza/fetchDeletePizza', async (id) => {
    const res = await deletePizza(id)
    return res.data
})

export const fetchCreatePizza = createAsyncThunk('pizza/fetchCreatePizza', async (data) => {
    const res = await createPizza(data);
    return res.data
})

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzaData: [],
    progress: 5,
    error: '',
    isCreating: 'idle',
  },
  reducers: {},
  extraReducers:  (builder) => {
    // CREATE PIZZA
    builder.addCase(fetchCreatePizza.fulfilled, (state, action) => {
        state.pizzaData.push(action.payload)
        state.isCreating = 'success'
    })
    builder.addCase(fetchCreatePizza.pending, (state) => {
        state.isCreating = 'pending'
    })
    
    // GET PIZZAS
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzaData = action.payload
        state.progress = 100
    })
    
    builder.addCase(fetchPizzas.pending, (state) => {
        state.progress = 70
    })

    builder.addCase(fetchPizzas.rejected, (state, action) => {
        state.progress = 100
        state.error = action.payload
    })

    // DELETE PIZZA
    builder.addCase(fetchDeletePizza.fulfilled, (state, action) => {
        state.pizzaData = state.pizzaData.filter((item) => item.id !== action.payload.id)
    })

    
  }
});
export const {} = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer
