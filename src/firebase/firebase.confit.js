// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqJ5RpcBWrd78yBwdZ5-VtQf5G2TGeXnA",
    authDomain: "ema-john-authentication-b0e01.firebaseapp.com",
    projectId: "ema-john-authentication-b0e01",
    storageBucket: "ema-john-authentication-b0e01.appspot.com",
    messagingSenderId: "1076356399635",
    appId: "1:1076356399635:web:733abfc15da8cef7c5b5e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;