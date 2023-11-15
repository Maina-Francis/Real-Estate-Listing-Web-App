// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-web-app-9e5fa.firebaseapp.com",
  projectId: "real-estate-web-app-9e5fa",
  storageBucket: "real-estate-web-app-9e5fa.appspot.com",
  messagingSenderId: "372593902623",
  appId: "1:372593902623:web:7d64feae9de5d8218d412a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
