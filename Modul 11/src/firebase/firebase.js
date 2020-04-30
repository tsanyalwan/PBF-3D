import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfJe3uYKO40CApGyJJEdbZej37evQbSuc",
  authDomain: "fir-login-app-c792a.firebaseapp.com",
  databaseURL: "https://fir-login-app-c792a.firebaseio.com",
  projectId: "fir-login-app-c792a",
  storageBucket: "fir-login-app-c792a.appspot.com",
  messagingSenderId: "738132778683",
  appId: "1:738132778683:web:ed3bf6b8df677cac79539e",
  measurementId: "G-PVD0SGCNXM"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
