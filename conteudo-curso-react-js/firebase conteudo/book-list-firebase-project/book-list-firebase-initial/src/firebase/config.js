import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBPsHeMgnrqY1Ev5GGoQ8KUYAe8ZWeA28",
  authDomain: "book-list-with-firebase-9dc50.firebaseapp.com",
  projectId: "book-list-with-firebase-9dc50",
  storageBucket: "book-list-with-firebase-9dc50.appspot.com",
  messagingSenderId: "279700921870",
  appId: "1:279700921870:web:9386959cfbfdfcadd3665f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
