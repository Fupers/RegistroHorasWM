import { React, useContext } from "react";
import { ThemeContext } from "../../../App";
import "./GenericButton.css";

export const GenericButton = ({ onClick, label, icon, size }) => {
  const {setTheme, theme} = useContext(ThemeContext)

  const buttonStyle = {
    width: size ? `${(parseFloat(size)/100) * 110}px` : '110px',
    height: size ? `${(parseFloat(size)/100) * 35}px` : '35px',
    fontSize: size ? `${(parseFloat(size)/100) * 20}px` : '18px',
  };

  return (
    <button
      onClick={onClick}
      className={`buttonstyle ${theme === "light" ? 'light':'dark'}`}
      style={buttonStyle}
    >
      <div className="positioncontent">
        {icon && <span className="iconstyle">{icon}</span>}
        {label}
      </div>
    </button>
  );
}