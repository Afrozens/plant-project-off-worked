// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNlRw4YMtNCyVTGh2LjrvAs_ko9k4PRg",
  authDomain: "plant-project-of-worked.firebaseapp.com",
  projectId: "plant-project-of-worked",
  storageBucket: "plant-project-of-worked.appspot.com",
  messagingSenderId: "540044709381",
  appId: "1:540044709381:web:6242395ae035008300d66c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)