import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import  "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: "AIzaSyBb8g7O8_qfdeOwjEtvysriTJx-zTdqu4Y",
  // authDomain: "applicationtrackinsystem.firebaseapp.com",
  // projectId: "applicationtrackinsystem",
  // storageBucket: "applicationtrackinsystem.firebasestorage.app",
  // messagingSenderId: "551155467947",
  // appId: "1:551155467947:web:343a3cbaba73d268f099ee"

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
// firebase.initializeApp(firebaseConfig);
// export default firebase;

export { app, auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };





// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // Firebase configuration for the first project
// const firebaseConfig1 = {
//   apiKey: "AIzaSyBb8g7O8_qfdeOwjEtvysriTJx-zTdqu4Y",
//   authDomain: "applicationtrackinsystem.firebaseapp.com",
//   projectId: "applicationtrackinsystem",
//   storageBucket: "applicationtrackinsystem.firebasestorage.app",
//   messagingSenderId: "551155467947",
//   appId: "1:551155467947:web:343a3cbaba73d268f099ee"
// };

// // Firebase configuration for the second project
// const firebaseConfig2 = {
//   apiKey: "AIzaSyAJX6azHneOMDC7wewwtzViE8l928Z-b7Y",
//   authDomain: "job-hub-e1dcf.firebaseapp.com",
//   projectId: "job-hub-e1dcf",
//   storageBucket: "job-hub-e1dcf.appspot.com",
//   messagingSenderId: "996363041665",
//   appId: "1:996363041665:web:7f717361106cc9926c8680",
//   measurementId: "G-37E9Z19KHQ"
// };

// // Initialize Firebase app 1
// const app1 = initializeApp(firebaseConfig1, "app1");
// const auth1 = getAuth(app1);
// const db1 = getFirestore(app1);
// const storage1 = getStorage(app1);

// // Initialize Firebase app 2
// const app2 = initializeApp(firebaseConfig2, "app2");
// const auth2 = getAuth(app2);
// const db2 = getFirestore(app2);
// const storage2 = getStorage(app2);

// export { auth1, db1, storage1, auth2, db2, storage2 };
