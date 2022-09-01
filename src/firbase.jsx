// Import the functions you need from the SDKs you need

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: "smart-grin-358009.firebaseapp.com",
  projectId: "smart-grin-358009",
  storageBucket: "smart-grin-358009.appspot.com",
  messagingSenderId: "563835325402",
  appId: "1:563835325402:web:f81b7031e5fc13dbfa8ee3",
  measurementId: "G-FC7BEGC7FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// The latest update for auth with db
// const auth = firebase.auth();
// export const db = app.firestore();

export default auth;