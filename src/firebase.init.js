// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWyVjR_tp044uKMJGDdek2r6Zm66e37Z8",
  authDomain: "genius-car-services-7c201.firebaseapp.com",
  projectId: "genius-car-services-7c201",
  storageBucket: "genius-car-services-7c201.appspot.com",
  messagingSenderId: "59076232836",
  appId: "1:59076232836:web:59df551f3c7e30847564d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

