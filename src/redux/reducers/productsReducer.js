import { typeProducts } from "../types/types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeProducts.add:
      return {
        products: [action.payload],
      };
    case typeProducts.list:
      return {
        products: [...action.payload],
      };
    case typeProducts.delete:
      return {
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case typeProducts.edit:
      return {
        ...state,
      };
    case typeProducts.search:
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};
