import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLK4lsOG6iFC9bx3JM01k_BqrdNpSl0vA",
  authDomain: "orvion-client.firebaseapp.com",
  projectId: "orvion-client",
  storageBucket: "orvion-client.firebasestorage.app",
  messagingSenderId: "601463131274",
  appId: "1:601463131274:web:de565336df704610cfb173"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
