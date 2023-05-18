// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJYqcWzAP4AUoGA6hS5gJURpNGaCaq9h4",
  authDomain: "robot-toy-store.firebaseapp.com",
  projectId: "robot-toy-store",
  storageBucket: "robot-toy-store.appspot.com",
  messagingSenderId: "880621949521",
  appId: "1:880621949521:web:8892e509937c37cf799e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;