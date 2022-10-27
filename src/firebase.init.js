// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkj-5hKjDLb5FldPjwlZJziCQFpRSvMaQ",
  authDomain: "xeducation-company.firebaseapp.com",
  projectId: "xeducation-company",
  storageBucket: "xeducation-company.appspot.com",
  messagingSenderId: "285678622194",
  appId: "1:285678622194:web:3530bb5086299c5d89c76b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app );

export default auth
