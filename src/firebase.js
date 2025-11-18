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

let app, auth, db;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

export { app, auth, db };
