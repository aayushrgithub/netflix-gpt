// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEN3Q0gjdG_w3RlVzIxVh6WdRW6hRHQsU",
    authDomain: "netflix-gpt-7210e.firebaseapp.com",
    projectId: "netflix-gpt-7210e",
    storageBucket: "netflix-gpt-7210e.appspot.com",
    messagingSenderId: "454173071891",
    appId: "1:454173071891:web:3f1946e87a5a58563d7de6",
    measurementId: "G-CMV399QXZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
