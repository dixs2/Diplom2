import { useState } from "react";
import "./index.css";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const handlClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button className="burger-button" onClick={handlClick}>
      {isOpen ? (
        <i className="fa-solid fa-bars burger-button-icon"></i>
      ) : (
        <i className="fa-solid fa-xmark burger-button-icon"></i>
      )}
    </button>
  );
}
