import { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { hideNavModal, showNavModal } from "../../../store/actions";
import { State } from "../../../store/reducer";

export default function BurgerNav() {
  const isOpen = useSelector((state: State) => state.isOpenNavModal);
  const dispatch = useDispatch();
  const handlClick = () => {
    isOpen ? dispatch(hideNavModal()) : dispatch(showNavModal());
  };

  return (
    <button className="main-burger-button" onClick={handlClick}>
      {isOpen ? (
        <i className="fa-solid fa-xmark main-burger-button-icon"></i>
      ) : (
        <i className="fa-solid fa-bars main-burger-button-icon"></i>
      )}
    </button>
  );
}
