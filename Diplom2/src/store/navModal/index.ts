import { createSlice } from "@reduxjs/toolkit";

const navModalSlice = createSlice({
  name: "navModal",
  initialState: { isOpen: false },
  reducers: {
    showNavModal: (state) => {
      state.isOpen = true;
    },
    hideNavModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showNavModal, hideNavModal } = navModalSlice.actions;

export { navModalSlice };
