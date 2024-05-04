// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsB_ounkNB-GvXHQd7T_m-xjcob0AfZ28",
  authDomain: "movieflixgpt-e2534.firebaseapp.com",
  projectId: "movieflixgpt-e2534",
  storageBucket: "movieflixgpt-e2534.appspot.com",
  messagingSenderId: "957560186216",
  appId: "1:957560186216:web:a3baf34dca37425c9a62dd",
  measurementId: "G-FFDD2M73FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();