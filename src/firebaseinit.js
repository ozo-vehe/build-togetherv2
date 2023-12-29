// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARDsukIwwX76O3q7pKO3oVVzCbRtyRIF8",
  authDomain: "build-together-bb2e9.firebaseapp.com",
  projectId: "build-together-bb2e9",
  storageBucket: "build-together-bb2e9.appspot.com",
  messagingSenderId: "427459111219",
  appId: "1:427459111219:web:1395bf5bff5b7cf7e6b646",
  measurementId: "G-P7EBP5CW4Z"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);