// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJX6azHneOMDC7wewwtzViE8l928Z-b7Y",
  authDomain: "job-hub-e1dcf.firebaseapp.com",
  projectId: "job-hub-e1dcf",
  storageBucket: "job-hub-e1dcf.appspot.com",
  messagingSenderId: "996363041665",
  appId: "1:996363041665:web:7f717361106cc9926c8680",
  measurementId: "G-37E9Z19KHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage = getStorage(app);