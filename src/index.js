import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfAJfatn-huP2aW6k3P7KFehGh2ctMdWI",
  authDomain: "donrouch-a2af1.firebaseapp.com",
  projectId: "donrouch-a2af1",
  storageBucket: "donrouch-a2af1.appspot.com",
  messagingSenderId: "533441538753",
  appId: "1:533441538753:web:0904db36436693e2a90240"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);