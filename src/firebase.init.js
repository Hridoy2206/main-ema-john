// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8-JS3dWcFFTr6dT5ANDBNAtj-jGzc_T8",
  authDomain: "ema-john-simple-1a9f2.firebaseapp.com",
  projectId: "ema-john-simple-1a9f2",
  storageBucket: "ema-john-simple-1a9f2.appspot.com",
  messagingSenderId: "641796783676",
  appId: "1:641796783676:web:2b6ec7bc6590e7b62b8d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;