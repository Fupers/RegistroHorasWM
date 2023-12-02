import { React, useContext } from "react";
import './Topbar.css';
import { ThemeContext } from "../App";
import styled from "styled-components";

export function Topbar() {
  const {setTheme, theme} = useContext(ThemeContext)

  return (
    <div>
      <div className={`Topbar ${theme === "light" ? 'light':'dark'}`} />
      <div className={`divider ${theme === "light" ? 'light':'dark'}`} />
    </div>
    
  );
}