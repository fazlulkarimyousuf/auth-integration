// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDHh1R4EZDFb65RgQCxrwRsJqXaSSYD8",
  authDomain: "auth-integration-74053.firebaseapp.com",
  projectId: "auth-integration-74053",
  storageBucket: "auth-integration-74053.firebasestorage.app",
  messagingSenderId: "169028221875",
  appId: "1:169028221875:web:055834a3dae7ebe412a9c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);