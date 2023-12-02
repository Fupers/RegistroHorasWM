/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEstadosHistoricosCC = /* GraphQL */ `
  subscription OnCreateEstadosHistoricosCC(
    $filter: ModelSubscriptionEstadosHistoricosCCFilterInput
  ) {
    onCreateEstadosHistoricosCC(filter: $filter) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEstadosHistoricosCC = /* GraphQL */ `
  subscription OnUpdateEstadosHistoricosCC(
    $filter: ModelSubscriptionEstadosHistoricosCCFilterInput
  ) {
    onUpdateEstadosHistoricosCC(filter: $filter) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEstadosHistoricosCC = /* GraphQL */ `
  subscription OnDeleteEstadosHistoricosCC(
    $filter: ModelSubscriptionEstadosHistoricosCCFilterInput
  ) {
    onDeleteEstadosHistoricosCC(filter: $filter) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCentroCostos = /* GraphQL */ `
  subscription OnCreateCentroCostos(
    $filter: ModelSubscriptionCentroCostosFilterInput
  ) {
    onCreateCentroCostos(filter: $filter) {
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
export const onUpdateCentroCostos = /* GraphQL */ `
  subscription OnUpdateCentroCostos(
    $filter: ModelSubscriptionCentroCostosFilterInput
  ) {
    onUpdateCentroCostos(filter: $filter) {
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
export const onDeleteCentroCostos = /* GraphQL */ `
  subscription OnDeleteCentroCostos(
    $filter: ModelSubscriptionCentroCostosFilterInput
  ) {
    onDeleteCentroCostos(filter: $filter) {
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
export const onCreateProyectos = /* GraphQL */ `
  subscription OnCreateProyectos(
    $filter: ModelSubscriptionProyectosFilterInput
  ) {
    onCreateProyectos(filter: $filter) {
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
export const onUpdateProyectos = /* GraphQL */ `
  subscription OnUpdateProyectos(
    $filter: ModelSubscriptionProyectosFilterInput
  ) {
    onUpdateProyectos(filter: $filter) {
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
export const onDeleteProyectos = /* GraphQL */ `
  subscription OnDeleteProyectos(
    $filter: ModelSubscriptionProyectosFilterInput
  ) {
    onDeleteProyectos(filter: $filter) {
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
