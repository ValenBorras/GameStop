import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBroFjXTNoel1sylEJv7B7bAk5uxDPPZdM",
  authDomain: "gamestop-react.firebaseapp.com",
  projectId: "gamestop-react",
  storageBucket: "gamestop-react.appspot.com",
  messagingSenderId: "557987004163",
  appId: "1:557987004163:web:351ff3f672bd57ca3c3336",
  measurementId: "G-DJ7R3WRVZR"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
