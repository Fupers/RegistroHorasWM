import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createCentroCostos } from '../graphql/mutations'
import { listCentroCostos } from '../graphql/queries'

const initialState = { nombre: '', descripcion: '', administrador: '', estado: false}

export function Test() {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listCentroCostos))
      const todos = todoData.data.listCentroCostos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.nombre || !formState.descripcion || !formState.administrador) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createCentroCostos, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Centro de Costos</h2>
      <input
        onChange={event => setInput('nombre', event.target.value)}
        style={styles.input}
        value={formState.nombre}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('descripcion', event.target.value)}
        style={styles.input}
        value={formState.descripcion}
        placeholder="Description"
      />
      <input
        onChange={event => setInput('administrador', event.target.value)}
        style={styles.input}
        value={formState.administrador}
        placeholder="Admin"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  todoAdministrador: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}