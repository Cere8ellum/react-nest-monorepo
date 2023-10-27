import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IHelloState } from "../../interfaces/state.interface";

const initialState: IHelloState = {
  loading: false,
  error: null,
  result: null,
};

export const helloSlice = createSlice({
  name: "getHello",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.result = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action: PayloadAction<string | null>) => {
      state.result = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset, setLoading, setSuccess, setError } = helloSlice.actions;

// Reducer
export default helloSlice.reducer;

// Selector
export const helloSelector = (state: RootState) => state.helloReducer;
