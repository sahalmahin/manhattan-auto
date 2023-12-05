// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};


// VITE_APIKEY=AIzaSyDTuukaxfBlRrL4cMMP-TGBkFhsn_YSWGM
// VITE_AUTHDOMAIN=manhattan-auto.firebaseapp.com
// VITE_PROJECTID=manhattan-auto
// VITE_STORAGEBUCKET=manhattan-auto.appspot.com
// VITE_MESSAGINGSENDERID=981939040946
// VITE_APPID=1:981939040946:web:6be1a0cea9b071ffa04fab


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;