import { createSlice } from "@reduxjs/toolkit";

export interface serviceFilterInitialState {
  maxPrice: number | null;
  minPrice: number | null;
  category: string | null;
  tag: string | null;
  isRemoved: boolean;
}

const initialState: serviceFilterInitialState = {
  maxPrice: null,
  minPrice: null,
  category: null,
  tag: null,
  isRemoved: false
};

const serviceFiltersSlice = createSlice({
  name: "serviceFilters",
  initialState,
  reducers: {
    addMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    addMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addTag: (state, action) => {
      state.tag = action.payload;
    },
    removeFilter: (state) => {
      state.tag = null;
      state.minPrice = null;
      state.maxPrice = null;
      state.category = null;
      state.isRemoved = true
    },
  },
});

export default serviceFiltersSlice.reducer;
export const { addMaxPrice, addCategory, addMinPrice, addTag, removeFilter } =
  serviceFiltersSlice.actions;
