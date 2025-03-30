import { useSelector } from "react-redux";
import { RootState } from ".";
import { showNavModal } from "./navModal";

const selectorshowNavModal = (state: RootState) => state.navModal.isOpen;
export const useSelectShowNavModal = () => useSelector(selectorshowNavModal);

const selectorAddNavModal = (state: RootState) => state.addModal.isOpen;
export const useSelectShowAddModal = () => useSelector(selectorAddNavModal);
