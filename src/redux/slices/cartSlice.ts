import { IService } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  services: IService[];
}

const services = JSON.parse(getFromLocalStorage("cart")) as IService[];

const initialState: IInitialState = {
  services: services ? services : []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IService>) => {
      const isExist =
        state.services &&
        state.services.some((service) => service.id === action.payload?.id);

      if (isExist) {
        state.services = state.services;
      } else {
        state.services.push(action.payload);

        setToLocalStorage("cart", JSON.stringify(state.services));
      }
    },

    removeFromCart: (state, action: PayloadAction<IService>) => {
      state.services = state.services.filter(
        (service) => service.id !== action.payload?.id
      );

      setToLocalStorage("cart", JSON.stringify(state.services));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
