import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyBcUURlhCOCZHoOc-UjTavWvtu0ML55-i0",
  authDomain: "react-project-js-abf84.firebaseapp.com",
  projectId: "react-project-js-abf84",
  storageBucket: "react-project-js-abf84.appspot.com",
  messagingSenderId: "1018882949538",
  appId: "1:1018882949538:web:4c6277dbdeb74a982432fb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
