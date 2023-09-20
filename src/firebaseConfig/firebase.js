// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpxXWexBcMK_f3CupNBPkSyDDFg-uX8cY",
  authDomain: "empresas-detalles.firebaseapp.com",
  projectId: "empresas-detalles",
  storageBucket: "empresas-detalles.appspot.com",
  messagingSenderId: "229001967309",
  appId: "1:229001967309:web:89fa275237719db1be5b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// connection to data base on firestore
export const db = getFirestore(app);