// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyButivT9iP2IArmnE3fvdIME_BCCUldC_Q",
  authDomain: "car-sport-c5bee.firebaseapp.com",
  projectId: "car-sport-c5bee",
  storageBucket: "car-sport-c5bee.firebasestorage.app",
  messagingSenderId: "823084408266",
  appId: "1:823084408266:web:771dae5e337b1ee6910333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
