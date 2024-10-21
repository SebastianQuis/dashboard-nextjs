"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 10,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count < 1) return;
      state.count -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  resetCount,
  initCounterState,
} = counterSlice.actions;

export default counterSlice.reducer;
