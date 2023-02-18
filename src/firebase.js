import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHk1EWwHkdTYkso5mfYW1JA1yjF5qxozc",
  authDomain: "fir-b5b2c.firebaseapp.com",
  projectId: "fir-b5b2c",
  storageBucket: "fir-b5b2c.appspot.com",
  messagingSenderId: "819128498366",
  appId: "1:819128498366:web:2a08945597327325fd86ef",
  measurementId: "G-9LH1PCF69T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
