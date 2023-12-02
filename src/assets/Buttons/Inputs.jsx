import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Inputs.css";

//Input para escribir palabras o textos cortos
export const GenericInput = ({label, onChange, value}) => {
  const {setTheme, theme} = useContext(ThemeContext)

  return (
    <input 
      className={`inputstyle ${theme === "light" ? 'light':'dark'}`}
      placeholder={label}
      onChange={onChange}
      value={value}
    >
    </input>
  );
}

//Input para escribir textos largo (Descripciones)
export const DescriptionInput = () => {
  return (
    <h1>Description</h1>
  );
}