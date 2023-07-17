import { createSlice } from "@reduxjs/toolkit";

type EntryState = {
  productId: string;
  productName: string;
};

type InitialState = {
  selectedValue: EntryState;
};

const initialState = {
  selectedValue: {
    productId: "",
    productName: "",
  } as EntryState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      return {
        selectedValue: {
          productId: action.payload.productId,
          productName: action.payload.productName,
        },
      };
    },
    clearSelected: () => {
      return {
        selectedValue: {
          productId: "",
          productName: "",
        },
      };
    },
  },
});

export const { setSelected, clearSelected } = auth.actions;
export default auth.reducer;
