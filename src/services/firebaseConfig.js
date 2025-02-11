import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import  "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage } from 'firebase/storage';

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
const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };



