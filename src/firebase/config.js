// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfPSKzFM5lhpAiUbDBrgnIUiJI_SXpUVQ",
    authDomain: "app-ecommerce-clotheshop.firebaseapp.com",
    projectId: "app-ecommerce-clotheshop",
    storageBucket: "app-ecommerce-clotheshop.appspot.com",
    messagingSenderId: "417210610406",
    appId: "1:417210610406:web:4061bce01ecab77e224127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app) // en ésta constante guardo la base de datos de mi ecommerce