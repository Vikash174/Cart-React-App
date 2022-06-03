import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBF2VuxUquu6wy04IpXjzXH-WWghxj8COk",
  authDomain: "cart-6f416.firebaseapp.com",
  projectId: "cart-6f416",
  storageBucket: "cart-6f416.appspot.com",
  messagingSenderId: "714089042857",
  appId: "1:714089042857:web:141bac6ee4a4903ad6aab8"
};

// Initialize Firebase
 const app =  initializeApp(firebaseConfig);
 
export default getFirestore();

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

