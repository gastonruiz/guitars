import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


 initializeApp({
  apiKey: "AIzaSyBazWGF36msIYUEK8UokMJP5wY-iSmYKyA",
  authDomain: "comercio-react-coder.firebaseapp.com",
  projectId: "comercio-react-coder",
  storageBucket: "comercio-react-coder.appspot.com",
  messagingSenderId: "44537604313",
  appId: "1:44537604313:web:087bbca356d571718476c8"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
