import { React, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import "./styles_pages/_General.css";
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { listCentroCostos } from '../graphql/queries';
import { updateCentroCostos, createCentroCostos, deleteCentroCostos } from '../graphql/mutations'
import { StateButton } from "../assets/Buttons/StateButton/StateButton";
import { GenericButton } from "../assets/Buttons/GenericButton/GenericButton";
import { FaCirclePlus } from "react-icons/fa6";
import { Popup } from "../components/Popup";
import { GenericInput } from "../assets/Buttons/Inputs";
import { EditAction, DeleteAction, ViewAction } from "../assets/Buttons/Actions";


const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});

const initialState = { nombre: '', descripcion: '', administrador: '', estado: false}

export function Centrocostos() {

  const {setTheme, theme} = useContext(ThemeContext)
  const [todos, setTodos] = useState([])
  const [selectedRowValues, setSelectedRowValues] = useState(null);

  //#region Crea nuevo Centro de costos

  const [formStateCreate, setFormStateCreate] = useState(initialState)

  function setInput(key, value) {
    setFormStateCreate({ ...formStateCreate, [key]: value })
  }

  async function addData() {
    try {
      if (!formStateCreate.nombre || !formStateCreate.descripcion || !formStateCreate.administrador) return //Cambiar segun datos
      const todo = { ...formStateCreate }
      setTodos([...todos, todo])
      setFormStateCreate(initialState)
      await API.graphql(graphqlOperation(createCentroCostos, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }
  
  //#endregion

  //#region Popups

  const [isCreatePopupOpen, setCreatePopupOpen] = useState(false);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const openEditPopup = () => {
    setEditPopupOpen(!isEditPopupOpen);
  };

  const openCreatePopup = () => {
    setCreatePopupOpen(!isCreatePopupOpen);
  };

  const openDeletePopup = () => {
    setDeletePopupOpen(!isDeletePopupOpen);
  };
  
  //#endregion

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listCentroCostos))
      const todos = todoData.data.listCentroCostos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  const [formStateEdit, setFormStateEdit] = useState(initialState)

  function setInputEdit(key, value) {
    setFormStateEdit({ ...formStateEdit, [key]: value })
  }

  async function updateData(id) {
    try {

      if (!(formStateEdit.nombre || formStateEdit.descripcion || formStateEdit.administrador || formStateEdit.estado)) return;

    
      const updatedData = {
        ...(formStateEdit.nombre && { nombre: formStateEdit.nombre }),
        ...(formStateEdit.descripcion && { descripcion: formStateEdit.descripcion }),
        ...(formStateEdit.administrador && { administrador: formStateEdit.administrador }),
        id
      };

      //const updatedData = { ...formStateEdit, id };
      setTodos(todos.map(todo => (todo.id === id ? updatedData : todo)));
      setFormStateEdit(initialState);
      await API.graphql(graphqlOperation(updateCentroCostos, { input: updatedData }));
      await fetchTodos();
    } catch (err) {
      console.log('Error actualizando el centro de costos:', err);
    }
  }

  async function updateEstado(id, estadodata) {
    try {
      
      const updatedData = {
        estado: estadodata,
        id
      };
  
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedData } : todo)));
      setFormStateEdit(initialState);
      await API.graphql(graphqlOperation(updateCentroCostos, { input: updatedData }));
      await fetchTodos();
    } catch (err) {
      console.log('Error actualizando el estado del centro de costos:', err);
    }
  }

  async function deleteData(id) {
    try {
      await API.graphql(graphqlOperation(deleteCentroCostos, { input: { id } }));
      await fetchTodos();
    } catch (error) {
      console.error('Error al eliminar el centro de costos:', error);
    }
  };

  const rows = todos.map((todo, index) => ({
    id: todo.id ? todo.id : index,
    nombre: todo.nombre,
    descripcion: todo.descripcion,
    administrador: todo.administrador,
    estado: todo.estado
  }));

  const columns = [
    { field: 'nombre', headerName: 'Nombre', flex: 1 },
    { field: 'administrador', headerName: 'Administrador', flex: 1 },
    { field: 'descripcion', headerName: 'Descripción', flex: 1 },
    {
      field: 'estado',
      headerName: 'Estado',
      maxWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <StateButton
          property1={params.row.estado ? 'frame-24' : 'frame-23'}
          onClick={() => {
            console.log('estado anterior: ',params.row.estado)
            handleCambiarEstado(params.row.id, params.row.estado);
          }}
          size={75}
        />
      ),
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      minWidth: 140,
      maxWidth: 180,
      flex: 1,
      renderCell: (params) => (
        <div className="ActionPosition">
          <EditAction
            onClick={() => {
              openEditPopup();
              const id = params.row.id;
              const selectedValues = todos.find(item => item.id === id);
              setSelectedRowValues(selectedValues);
            }}
          >
          </EditAction>
          <ViewAction
            onClick={() => handleView(params.row.id)}
          >
          </ViewAction>
          <DeleteAction
            onClick={() => {
              openDeletePopup()
              const id = params.row.id;
              const selectedValues = todos.find(item => item.id === id);
              setSelectedRowValues(selectedValues);
            }}
          >
          </DeleteAction>

        </div>
      ),
    },
  ];

  //#region Codigo Acciones

  const handleView = (id) => {
    // Lógica para eliminar la fila con el ID proporcionado
    console.log(`Observar fila con ID ${id}`);
  };

  //#endregion 

  //#region Codigo Estado

  const handleCambiarEstado = async (id, estado) => {
    try {
      updateEstado(id, !estado)
      console.log('estado actual: ',!estado)
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
    }
  };

  //#endregion

  return (
    <div className={`pagecontainer ${theme === "light" ? 'light':'dark'}`}>
      <div className="centerbox">
        <div className="titlefuntion">
          <h1>Centro de Costos</h1>
        </div>
        <div className="buttonsection">
          <GenericButton label="Crear" onClick={openCreatePopup} icon={<FaCirclePlus/>} />
        </div>
        <div className="boxfuntion">
          <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
              className="custom-data-grid"
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection
              disableRowSelectionOnClick
              />
          </div>
        </div>
      </div>
      {isCreatePopupOpen && (
        <Popup
          onClick={openCreatePopup}
          Save={() => {
            addData();
            openCreatePopup();
          }}
          Confirmbutton="Guardar"
        >
          <h2>Crear Centro de Costos</h2>
          <p>Nombre</p>
          <GenericInput
            label="Nombre"
            onChange={event => setInput('nombre', event.target.value)}
            value={formStateCreate.nombre}
          />
          <p>Administrador</p>
          <GenericInput
            label="Administrador"
            onChange={event => setInput('administrador', event.target.value)}
            value={formStateCreate.administrador}
          />
          <p>Descripción</p>
          <GenericInput
            label="Descripción"
            onChange={event => setInput('descripcion', event.target.value)}
            value={formStateCreate.descripcion}
          />
        </Popup>)
      }
      {isEditPopupOpen && (
        <Popup
          onClick={openEditPopup}
          Save={() => {
            updateData(selectedRowValues.id);
            openEditPopup();
          }}
          Confirmbutton="Guardar"
        >
          <h2>Editar Centro de Costos</h2>
          <p>Nombre</p>
          <GenericInput
            label={selectedRowValues.nombre}
            onChange={event => setInputEdit('nombre', event.target.value)}
            value={formStateEdit.nombre}
          />
          <p>Administrador</p>
          <GenericInput
            label={selectedRowValues.administrador}
            onChange={event => setInputEdit('administrador', event.target.value)}
            value={formStateEdit.administrador}
          />
          <p>Descripción</p>
          <GenericInput
            label={selectedRowValues.descripcion}
            onChange={event => setInputEdit('descripcion', event.target.value)}
            value={formStateEdit.descripcion}
          />
        </Popup>)
      }
      {isDeletePopupOpen && (
        <Popup
          onClick={openDeletePopup}
          Save={() => {
            deleteData(selectedRowValues.id);
            openDeletePopup();
          }}
          Confirmbutton="Eliminar"
        >
          <h2>¿Desea eliminar?</h2>
          <p className="datainfo">Nombre</p>
          <p className="datadelete">{selectedRowValues.nombre}</p>
          <p className="datainfo">Administrador</p>
          <p className="datadelete">{selectedRowValues.administrador}</p>
          <p className="datainfo">Descripción</p>
          <p className="datadelete">{selectedRowValues.descripcion}</p>
        </Popup>)
      }
    </div>
  );
}