import { baseApi } from "./api/baseApi";
import serviceFiltersReducer from "./slices/serviceFilterSlice";
import cartReducer from "./slices/cartSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  serviceFilters: serviceFiltersReducer,
  cart: cartReducer,
};
