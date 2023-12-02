import { React, useContext } from "react";
import { ThemeContext } from "../App";
import styled from "styled-components";
import "./styles_pages/Home.css";
import "./styles_pages/_General.css";
import logo from "../assets/logohome.png";


export function Home() {
  const {setTheme, theme} = useContext(ThemeContext)

  return (
    <div className={`pagecontainerlogo ${theme === "light" ? 'light':'dark'}`}>
      <div className="logocontainer">
        <img className="logohome" src={logo}/>
      </div>
    </div>
  );
}