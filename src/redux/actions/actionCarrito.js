import { typeCarrito } from "../types/types";

export const AddCarrito = (product) => {
  return {
    type: typeCarrito.add,
    payload: product,
  };
};

export const BorrarCarrito = (id) => {
  return {
    type: typeCarrito.delete,
    payload: id,
  };
};
