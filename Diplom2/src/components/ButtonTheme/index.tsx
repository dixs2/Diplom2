import { useContext } from "react";
import "./index.css";
import { ThemeContext, useThemeContext } from "../../context/Theme.Provider";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ButtomTheme() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <button className="button-theme " onClick={toggleTheme}>
      {darkMode ? (
        <i className="fa-solid fa-moon button-theme-dark"></i>
      ) : (
        <i className="fa-solid fa-sun button-theme-light"></i>
      )}
    </button>
  );
}
