/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategoria = /* GraphQL */ `
  subscription OnCreateCategoria(
    $filter: ModelSubscriptionCategoriaFilterInput
  ) {
    onCreateCategoria(filter: $filter) {
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
export const onUpdateCategoria = /* GraphQL */ `
  subscription OnUpdateCategoria(
    $filter: ModelSubscriptionCategoriaFilterInput
  ) {
    onUpdateCategoria(filter: $filter) {
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
export const onDeleteCategoria = /* GraphQL */ `
  subscription OnDeleteCategoria(
    $filter: ModelSubscriptionCategoriaFilterInput
  ) {
    onDeleteCategoria(filter: $filter) {
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
export const onCreateBebestible = /* GraphQL */ `
  subscription OnCreateBebestible(
    $filter: ModelSubscriptionBebestibleFilterInput
  ) {
    onCreateBebestible(filter: $filter) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBebestible = /* GraphQL */ `
  subscription OnUpdateBebestible(
    $filter: ModelSubscriptionBebestibleFilterInput
  ) {
    onUpdateBebestible(filter: $filter) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBebestible = /* GraphQL */ `
  subscription OnDeleteBebestible(
    $filter: ModelSubscriptionBebestibleFilterInput
  ) {
    onDeleteBebestible(filter: $filter) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
