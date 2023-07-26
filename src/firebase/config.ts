// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAynGuecnSsCUQU8K3k7VNv5U__Z2dFnlw",
  authDomain: "react-practice-ed7c0.firebaseapp.com",
  projectId: "react-practice-ed7c0",
  storageBucket: "react-practice-ed7c0.appspot.com",
  messagingSenderId: "648304026700",
  appId: "1:648304026700:web:3a866a33ee7e5f030580e9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);