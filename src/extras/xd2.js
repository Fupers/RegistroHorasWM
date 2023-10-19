import React from "react";
import { Menu } from "./Menu";
import "./style.css";
import { Amplify, API, graphqlOperation } from 'aws-amplify'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  return (
    <div className="base">
      <div className="overlap">
        <img className="line" alt="Line" src="line-2.svg" />
        <div className="boton-de-b-squeda">
          <div className="overlap-group-2">
            <img className="search" alt="Search" src="search.png" />
            <div className="text-wrapper-2">Búsqueda</div>
          </div>
        </div>
        <img className="icono-campana" alt="Icono campana" src="icono-campana.png" />
        <img className="icono-notificaciones" alt="Icono notificaciones" src="icono-notificaciones.png" />
        <div className="avatar">
          <div className="overlap-2">
            <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
            <div className="ellipse-2" />
            <div className="text-wrapper-3">S</div>
          </div>
          <div className="text-wrapper-4">Sylvia Álvarez</div>
        </div>
      </div>
      <div className="overlap-3">
        <div className="cerrar-sesion">
          <img className="exit-to-app" alt="Exit to app" src="exit-to-app.svg" />
          <div className="text-wrapper-5">Cerrar sesión</div>
        </div>
        <img className="logowm-menu" alt="Logowm menu" src="logowm-menu-1.png" />
        <Menu
          className="menu-instance"
          iconoArea="icono-area-2.svg"
          iconoCentroCostos="icono-centro-costos-2.png"
          iconoClientes="image.svg"
          iconoProjectos="icono-projectos-2.png"
          iconoTareas="icono-tareas-2.svg"
          iconoUsuarios="image.png"
        />
      </div>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App