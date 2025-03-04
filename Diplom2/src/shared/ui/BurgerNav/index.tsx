import { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useSelectShowNavModal } from "../../../store/selectors";
import { hideNavModal, showNavModal } from "../../../store/navModal";

export default function BurgerNav() {
  const isOpen = useSelectShowNavModal();
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
