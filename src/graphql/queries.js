/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategoria = /* GraphQL */ `
  query GetCategoria($id: ID!) {
    getCategoria(id: $id) {
      id
      nombre
      descripcion
      R_CategoriaBebestible {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategorias = /* GraphQL */ `
  query ListCategorias(
    $filter: ModelCategoriaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        descripcion
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBebestible = /* GraphQL */ `
  query GetBebestible($id: ID!) {
    getBebestible(id: $id) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBebestibles = /* GraphQL */ `
  query ListBebestibles(
    $filter: ModelBebestibleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBebestibles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        categoriaID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bebestiblesByCategoriaID = /* GraphQL */ `
  query BebestiblesByCategoriaID(
    $categoriaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBebestibleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bebestiblesByCategoriaID(
      categoriaID: $categoriaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        categoriaID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
