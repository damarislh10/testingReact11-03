import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "../reducers/registerReducer";
import { loginReducer } from "../reducers/loginReducer";
import { productsReducer } from "../reducers/productsReducer";
import { carritoReducer } from "../reducers/carritoReducer";
import {
  obtenerStateStorage,
  guardarStateStorage,
} from "../../components/LocalStorage";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  products: productsReducer,
  carrito: carritoReducer,
});

const storeState = obtenerStateStorage();

export const store = createStore(
  reducers,
  storeState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  guardarStateStorage({
    carrito: store.getState().carrito,
  });
});
