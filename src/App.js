/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createCategoria } from './graphql/mutations'
import { listCategorias } from './graphql/queries'
import { withAuthenticator, Button, Heading, Text, TextField, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { nombre: '', descripcion: '' }

const App = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState)
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetchCategorias()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchCategorias() {
    try {
      const categoriaData = await API.graphql(graphqlOperation(listCategorias))
      const categorias = categoriaData.data.listCategorias.items
      setCategorias(categorias)
    } catch (err) { console.log('error fetching categorias') }
  }

  async function addCategoria() {
    try {
      if (!formState.nombre || !formState.descripcion) return
      const categoria = { ...formState }
      setCategorias([...categorias, categoria])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createCategoria, {input: categoria}))
    } catch (err) {
      console.log('error creating categoria:', err)
    }
  }

  return (
    <View style={styles.container}>
      <Heading level={1}>WENAAA {user.username}</Heading>
      <Button onClick={signOut} style={styles.button}>Sign out</Button>
      <h2>Amplify Categorias</h2>
      <TextField
        onChange={event => setInput('nombre', event.target.value)}
        style={styles.input}
        value={formState.nombre}
        placeholder="nombre"
      />
      <TextField
        onChange={event => setInput('descripcion', event.target.value)}
        style={styles.input}
        value={formState.descripcion}
        placeholder="descripcion"
      />
      <button style={styles.button} onClick={addCategoria}>Create Categoria</button>
      {
        categorias.map((categoria, index) => (
          <View key={categoria.id ? categoria.id : index} style={styles.categoria}>
            <Text style={styles.categorianombre}>{categoria.nombre}</Text>
            <Text style={styles.categoriadescripcion}>{categoria.descripcion}</Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  categoria: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  categorianombre: { fontSize: 20, fontWeight: 'bold' },
  categoriadescripcion: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
