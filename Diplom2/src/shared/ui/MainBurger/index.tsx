import { useEffect, useState } from "react";
import "./index.css";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const handlClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button className="main-burger-button" onClick={handlClick}>
      {isOpen ? (
        <i className="fa-solid fa-bars main-burger-button-icon"></i>
      ) : (
        <i className="fa-solid fa-xmark main-burger-button-icon"></i>
      )}
    </button>
  );
}
