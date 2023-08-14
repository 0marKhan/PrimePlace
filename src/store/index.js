import { configureStore, createSlice } from "@reduxjs/toolkit";

const estateSlice = createSlice({
  name: "forRent",
  initialState: {
    rentEstates: [],
    saleEstates: [],
  },
  reducers: {
    // copies the rent estates from the api into the store
    copyForRentEstates(state, action) {
      state.rentEstates = [...action.payload];
    },
    // copies the sale estates from the api into the store
    copyForSaleEstates(state, action) {
      state.saleEstates = [...action.payload];
    },
  },
});

// create the store and pass object of reducer functions to it
const store = configureStore({
  reducer: estateSlice.reducer,
});

// exporting so we can dispatch these reducer actions in other files
export const estateActions = estateSlice.actions;
export default store;
