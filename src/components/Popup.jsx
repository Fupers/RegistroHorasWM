import React, { useState, useContext } from 'react';
import "./Popup.css";
import { ThemeContext } from "../App";
import { GenericButton } from "../assets/Buttons/GenericButton/GenericButton";

export const Popup = ({ onClick, children, Save, Confirmbutton}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className='popup-content2'>
          {children}
        </div>
        <div className='buttonposition'>
          <GenericButton onClick={onClick} label="Cerrar" size={80}/>
          <GenericButton onClick={Save} label={Confirmbutton} size={80}/>
        </div>
      </div>
    </div>
  );
};

export default Popup;