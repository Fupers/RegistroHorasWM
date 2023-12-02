import { React, useContext } from "react";
import './Actions.css';
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

//Boton Editar
export const EditAction = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className="ActionButton Edit"
    >
      <MdEdit className="IconActions"/>
    </button>
  );
}

//Boton Eliminar
export const DeleteAction = ({onClick}) => {
  return (
    <button
      className="ActionButton Delete"
      onClick={onClick}
    >
      <MdDelete className="IconActions"/>
    </button>
  );
}

//Boton Observar
export const ViewAction = ({onClick}) => {
  return (
    <button
      className="ActionButton View"
      onClick={onClick}
    >
      <FaEye className="IconActions"/>
    </button>
  );
}