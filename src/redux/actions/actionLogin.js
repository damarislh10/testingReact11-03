import { types } from "../types/types";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { facebook, google } from "../../firebase/firebaseConfig";
import Swal from "sweetalert2";

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log("Bienvenid@", user.displayName);
      })
      .catch((e) => {
        console.log("El usuario no existe");
        Swal.fire({
          icon: "warning",
          title: "Usuario no registrado",
        });
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log(`Bienvenid@ ${user.displayName}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log(`Bienvenid@ ${user.displayName}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginSincrono = (id, displayname) => {
  return {
    type: types.login,
    payload: {
      id,
      displayname,
    },
  };
};

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then((user) => {
        dispatch(logoutSync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logoutSync = () => {
  return {
    type: types.logout,
  };
};
