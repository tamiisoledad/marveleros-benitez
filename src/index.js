import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCx7kb2FuqUMYAnozl14QI4uYl54jnP0OY",
  authDomain: "coderhouse-ecommerce-4db20.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4db20",
  storageBucket: "coderhouse-ecommerce-4db20.appspot.com",
  messagingSenderId: "253661154223",
  appId: "1:253661154223:web:0538a01e98a2328b7dbd5a",
  measurementId: "G-XY8FHSBHBJ"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
