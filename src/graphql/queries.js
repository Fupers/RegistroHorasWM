/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEstadosHistoricosCC = /* GraphQL */ `
  query GetEstadosHistoricosCC($id: ID!) {
    getEstadosHistoricosCC(id: $id) {
      id
      estado
      centrocostosID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEstadosHistoricosCCS = /* GraphQL */ `
  query ListEstadosHistoricosCCS(
    $filter: ModelEstadosHistoricosCCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstadosHistoricosCCS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        estado
        centrocostosID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCentroCostos = /* GraphQL */ `
  query GetCentroCostos($id: ID!) {
    getCentroCostos(id: $id) {
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
export const listCentroCostos = /* GraphQL */ `
  query ListCentroCostos(
    $filter: ModelCentroCostosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCentroCostos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        descripcion
        administrador
        estado
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProyectos = /* GraphQL */ `
  query GetProyectos($id: ID!) {
    getProyectos(id: $id) {
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
export const listProyectos = /* GraphQL */ `
  query ListProyectos(
    $filter: ModelProyectosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProyectos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        estado
        createdAt
        updatedAt
        proyectosProyecto_CentroCostosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const estadosHistoricosCCSByCentrocostosID = /* GraphQL */ `
  query EstadosHistoricosCCSByCentrocostosID(
    $centrocostosID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEstadosHistoricosCCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    estadosHistoricosCCSByCentrocostosID(
      centrocostosID: $centrocostosID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        estado
        centrocostosID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
