/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategoria = /* GraphQL */ `
  mutation CreateCategoria(
    $input: CreateCategoriaInput!
    $condition: ModelCategoriaConditionInput
  ) {
    createCategoria(input: $input, condition: $condition) {
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
export const updateCategoria = /* GraphQL */ `
  mutation UpdateCategoria(
    $input: UpdateCategoriaInput!
    $condition: ModelCategoriaConditionInput
  ) {
    updateCategoria(input: $input, condition: $condition) {
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
export const deleteCategoria = /* GraphQL */ `
  mutation DeleteCategoria(
    $input: DeleteCategoriaInput!
    $condition: ModelCategoriaConditionInput
  ) {
    deleteCategoria(input: $input, condition: $condition) {
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
export const createBebestible = /* GraphQL */ `
  mutation CreateBebestible(
    $input: CreateBebestibleInput!
    $condition: ModelBebestibleConditionInput
  ) {
    createBebestible(input: $input, condition: $condition) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBebestible = /* GraphQL */ `
  mutation UpdateBebestible(
    $input: UpdateBebestibleInput!
    $condition: ModelBebestibleConditionInput
  ) {
    updateBebestible(input: $input, condition: $condition) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBebestible = /* GraphQL */ `
  mutation DeleteBebestible(
    $input: DeleteBebestibleInput!
    $condition: ModelBebestibleConditionInput
  ) {
    deleteBebestible(input: $input, condition: $condition) {
      id
      nombre
      categoriaID
      createdAt
      updatedAt
      __typename
    }
  }
`;
