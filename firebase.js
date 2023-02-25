// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpDgIwx394WI6qden1FLpij4GjU8TvQmQ",
    authDomain: "fb-clone-a104e.firebaseapp.com",
    projectId: "fb-clone-a104e",
    storageBucket: "fb-clone-a104e.appspot.com",
    messagingSenderId: "950805234249",
    appId: "1:950805234249:web:227e9e5569a76c76e2b598",
    measurementId: "G-C94VNSBLFL"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
