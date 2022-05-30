// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJTxFMu86ruRxOUsqvCMrckw5qSvp8d4",
  authDomain: "messaging-b60c0.firebaseapp.com",
  projectId: "messaging-b60c0",
  storageBucket: "messaging-b60c0.appspot.com",
  messagingSenderId: "12398985677",
  appId: "1:12398985677:web:e20ae057c32b9030fcc484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;