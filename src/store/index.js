import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

const estateSlice = createSlice({
  name: "forRent",
  initialState: {
    rentEstates: [],
    saleEstates: [],
    estateDetails: {
      baths: 0,
      area: 0,
      photo: "",
      price: 0,
      rooms: 0,
      photoIDs: [],
      geo: [],
      amenities: [],
      contactName: "",
      furnishingStatus: "",
      purpose: "",
      title: "",
    },
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
    // for copying details to show in description
    setEstateDetails(state, action) {
      state.estateDetails = action.payload;
    },
  },
});

const estatePersistConfig = {
  key: "estate",
  storage,
  serialize: JSON.stringify, // Convert non-serializable to serializable
  deserialize: JSON.parse, // Convert serializable to non-serializable
  whitelist: ["estateDetails"],
};

const persistedEstateReducer = persistReducer(
  estatePersistConfig,
  estateSlice.reducer
);

const store = configureStore({
  reducer: persistedEstateReducer,
});

export const estateActions = estateSlice.actions;
export default store;
export const persistor = persistStore(store);
