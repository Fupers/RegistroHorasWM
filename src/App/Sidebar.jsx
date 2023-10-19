import React from 'react';
import './Sidebar.css';
import SidebarButton from './SidebarButton';

const Sidebar = () => {

    const handleButtonClick = () => {
        // Define la lógica para el botón aquí
        alert('Hiciste clic en el botón de la barra lateral');
    }

    return (
        <div className="sidebar">
        <div className="logo">
            <img src="logowm.png" alt="Logo" />
        </div>
        <div className="sidebar">
            <SidebarButton text="Categoria" onClick={handleButtonClick} />
            <SidebarButton text="Bebidas" onClick={handleButtonClick} />
        </div>
        </div>
    );
};

export default Sidebar;
