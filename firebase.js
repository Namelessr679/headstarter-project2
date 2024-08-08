// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getfirebase, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8mRud-uCQ4uBZtytOUhaAD7RCy9yvFwA",
  authDomain: "inventory-management-3f2ee.firebaseapp.com",
  projectId: "inventory-management-3f2ee",
  storageBucket: "inventory-management-3f2ee.appspot.com",
  messagingSenderId: "208884696658",
  appId: "1:208884696658:web:7fa25b6ef0413f172e018b",
  measurementId: "G-NSPG42QSL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}