// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA055nhv0chkIKluct26cr-8GWAdjIges",
  authDomain: "otp-project-7613a.firebaseapp.com",
  projectId: "otp-project-7613a",
  storageBucket: "otp-project-7613a.appspot.com",
  messagingSenderId: "1097138836088",
  appId: "1:1097138836088:web:85ebc8d3ed41a9a6b7938d",
  measurementId: "G-D0JZCNT2X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()