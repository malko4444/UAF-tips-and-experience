// src/config/firebase.js
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Keep only one import
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayBsDvWDWQImdx7uxGXwf7diGaFN_Cko",
  authDomain: "student-notes-app-d0cb3.firebaseapp.com",
  projectId: "student-notes-app-d0cb3",
  storageBucket: "student-notes-app-d0cb3.firebasestorage.app",
  messagingSenderId: "266578171743",
  appId: "1:266578171743:web:834709d344fb39ef0cc8ea",
  measurementId: "G-RLFYDEX0W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
