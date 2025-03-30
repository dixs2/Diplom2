import { createSlice } from "@reduxjs/toolkit";

const addModalSlice = createSlice({
  name: "addModal",
  initialState: { isOpen: false },
  reducers: {
    showAddModal: (state) => {
      state.isOpen = true;
    },
    hideAddModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showAddModal, hideAddModal } = addModalSlice.actions;

export { addModalSlice };
