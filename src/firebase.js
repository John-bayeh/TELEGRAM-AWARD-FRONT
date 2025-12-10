// firebase.js

// MODULAR IMPORTS
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// COMPAT IMPORTS (REQUIRED FOR RECAPTCHA)
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuDRDZrMwSQ-H3gGjM2rz2nxgtavrrzz4",
  authDomain: "telegramaward-8a4db.firebaseapp.com",
  projectId: "telegramaward-8a4db",
  storageBucket: "telegramaward-8a4db.appspot.com",
  messagingSenderId: "547164549552",
  appId: "1:547164549552:web:e821b32763beded65d2675"
};

// Initialize Modular Firebase
const app = initializeApp(firebaseConfig);

// Initialize Compat Firebase (NEEDED for RecaptchaVerifier)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const db = getFirestore(app);

// EXPORT compat firebase for Recaptcha
export { firebase };
