import { typeProducts } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  query,
  where,
  doc,
  deleteDoc,
} from "@firebase/firestore";

export const searchAsync = (product) => {
  return async (dispatch) => {
    const traerCollection = collection(db, "productos");
    const q = query(
      traerCollection,
      where("nombre", ">", product, "<", product + "z")
    );
    const datos = await getDocs(q);
    const products = [];

    datos.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      products.push({
        ...data,
      });
    });

    dispatch(searchSync(products));
  };
};

export const searchSync = (product) => {
  return {
    type: typeProducts.search,
    payload: product,
  };
};

// update async

export const editAsync = (id, contentAll) => {
  return async (dispatch) => {
    updateDoc(doc(db, "productos", id), contentAll);
    dispatch(editSyn(contentAll));
    dispatch(listProductAsync());
  };
};

// update sync

export const editSyn = (contentAll) => {
  return {
    type: typeProducts.edit,
    payload: contentAll,
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    deleteDoc(doc(db, "productos", id));
    dispatch(deleteSincrono(id));
    dispatch(listProductAsync());
  };
};
// delete -------------------------------

export const deleteSincrono = (product) => {
  return {
    type: typeProducts.delete,
    payload: product,
  };
};

export const listProductAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      productos.push({
        ...data,
      });
    });
    dispatch(listSync(productos));
  };
};

export const listSync = (products) => {
  return {
    type: typeProducts.list,
    payload: products,
  };
};

export const registerProductAsync = (newProducto) => {
  return (dispatch) => {
    addDoc(collection(db, "productos"), newProducto)
      .then((resp) => {
        dispatch(registerProductSync(newProducto));
        dispatch(listProductAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerProductSync = (product) => {
  return {
    type: typeProducts.add,
    payload: product,
  };
};
