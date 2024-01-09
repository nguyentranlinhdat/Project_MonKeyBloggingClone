import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS1__A93wglrzsuAGMbfqbVIgAQ9kg_ko",
  authDomain: "monkey-blogging-b4204.firebaseapp.com",
  projectId: "monkey-blogging-b4204",
  storageBucket: "monkey-blogging-b4204.appspot.com",
  messagingSenderId: "85102149732",
  appId: "1:85102149732:web:b989d7221800d36a21df71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
