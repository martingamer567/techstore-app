import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwWjiyPgalqCuDigsV12RYA13Z9eAhMYs",
  authDomain: "techstore-app-d0a57.firebaseapp.com",
  projectId: "techstore-app-d0a57",
  storageBucket: "techstore-app-d0a57.firebasestorage.app",
  messagingSenderId: "403101061697",
  appId: "1:403101061697:web:da9e382b3b6d696e2facc0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);