import { createSlice } from "@reduxjs/toolkit";

const currentNavDrawerStatus = createSlice({
  name: "navDrawer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleNavDrawer: (state, { payload }) => {
      state.isOpen = payload.isOpen;
    },
  },
});

export const { toggleNavDrawer } = currentNavDrawerStatus.actions;

export default currentNavDrawerStatus.reducer;
