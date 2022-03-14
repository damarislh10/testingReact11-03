// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy1p65tEqGIv6Y1SN9iwYEjJovfjYkJdQ",
  authDomain: "as-19782.firebaseapp.com",
  projectId: "as-19782",
  storageBucket: "as-19782.appspot.com",
  messagingSenderId: "1020195925392",
  appId: "1:1020195925392:web:adfd61816d6c446e15d715",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };
