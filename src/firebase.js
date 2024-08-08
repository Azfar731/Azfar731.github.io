// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa2nAxarIqw8gfHnT2sK7nVM7rIMwuBrM",
  authDomain: "portfolio-771f1.firebaseapp.com",
  projectId: "portfolio-771f1",
  storageBucket: "portfolio-771f1.appspot.com",
  messagingSenderId: "1050997976300",
  appId: "1:1050997976300:web:891e4cb3fdd46c3940c9c9"
};

// Initialize Firebase
const collectionName =  "azzi"  //edit to reflect the right collection
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const personCollection = collection(db, collectionName)