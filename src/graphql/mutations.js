/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEstadosHistoricosCC = /* GraphQL */ `
  mutation CreateEstadosHistoricosCC(
    $input: CreateEstadosHistoricosCCInput!
    $condition: ModelEstadosHistoricosCCConditionInput
  ) {
    createEstadosHistoricosCC(input: $input, condition: $condition) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEstadosHistoricosCC = /* GraphQL */ `
  mutation UpdateEstadosHistoricosCC(
    $input: UpdateEstadosHistoricosCCInput!
    $condition: ModelEstadosHistoricosCCConditionInput
  ) {
    updateEstadosHistoricosCC(input: $input, condition: $condition) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEstadosHistoricosCC = /* GraphQL */ `
  mutation DeleteEstadosHistoricosCC(
    $input: DeleteEstadosHistoricosCCInput!
    $condition: ModelEstadosHistoricosCCConditionInput
  ) {
    deleteEstadosHistoricosCC(input: $input, condition: $condition) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCentroCostos = /* GraphQL */ `
  mutation CreateCentroCostos(
    $input: CreateCentroCostosInput!
    $condition: ModelCentroCostosConditionInput
  ) {
    createCentroCostos(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      administrador
      estado
      CentroCostos_EstadosHistoricosCC {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCentroCostos = /* GraphQL */ `
  mutation UpdateCentroCostos(
    $input: UpdateCentroCostosInput!
    $condition: ModelCentroCostosConditionInput
  ) {
    updateCentroCostos(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      administrador
      estado
      CentroCostos_EstadosHistoricosCC {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCentroCostos = /* GraphQL */ `
  mutation DeleteCentroCostos(
    $input: DeleteCentroCostosInput!
    $condition: ModelCentroCostosConditionInput
  ) {
    deleteCentroCostos(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      administrador
      estado
      CentroCostos_EstadosHistoricosCC {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProyectos = /* GraphQL */ `
  mutation CreateProyectos(
    $input: CreateProyectosInput!
    $condition: ModelProyectosConditionInput
  ) {
    createProyectos(input: $input, condition: $condition) {
      id
      nombre
      estado
      Proyecto_CentroCostos {
        id
        nombre
        descripcion
        administrador
        estado
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      proyectosProyecto_CentroCostosId
      __typename
    }
  }
`;
export const updateProyectos = /* GraphQL */ `
  mutation UpdateProyectos(
    $input: UpdateProyectosInput!
    $condition: ModelProyectosConditionInput
  ) {
    updateProyectos(input: $input, condition: $condition) {
      id
      nombre
      estado
      Proyecto_CentroCostos {
        id
        nombre
        descripcion
        administrador
        estado
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      proyectosProyecto_CentroCostosId
      __typename
    }
  }
`;
export const deleteProyectos = /* GraphQL */ `
  mutation DeleteProyectos(
    $input: DeleteProyectosInput!
    $condition: ModelProyectosConditionInput
  ) {
    deleteProyectos(input: $input, condition: $condition) {
      id
      nombre
      estado
      Proyecto_CentroCostos {
        id
        nombre
        descripcion
        administrador
        estado
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      proyectosProyecto_CentroCostosId
      __typename
    }
  }
`;
