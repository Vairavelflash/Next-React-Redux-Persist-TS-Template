// features/featureslice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConfigurationState {
btn:boolean
}

const initialState: ConfigurationState = {
btn:false
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<boolean>) => {
      state.btn=action.payload;
    },
  
  },
});

export const {
  setState
} = featureSlice.actions;

export default featureSlice.reducer;
