import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv4hliC-9CIQd4DzO841R_WnpZ5uskv-U",
  authDomain: "coder-proyect-3c57f.firebaseapp.com",
  projectId: "coder-proyect-3c57f",
  storageBucket: "coder-proyect-3c57f.appspot.com",
  messagingSenderId: "408936254480",
  appId: "1:408936254480:web:4e91d85a64d900ab430e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

reportWebVitals();
