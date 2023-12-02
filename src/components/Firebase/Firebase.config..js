// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTuukaxfBlRrL4cMMP-TGBkFhsn_YSWGM",
  authDomain: "manhattan-auto.firebaseapp.com",
  projectId: "manhattan-auto",
  storageBucket: "manhattan-auto.appspot.com",
  messagingSenderId: "981939040946",
  appId: "1:981939040946:web:6be1a0cea9b071ffa04fab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;