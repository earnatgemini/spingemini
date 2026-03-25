// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// మీ Firebase Console లో ఉన్న 'Project Settings' నుండి ఈ వివరాలు కాపీ చేయండి
const firebaseConfig = {
  apiKey: "AIzaSyD1P5PoYl467FXxaaWFaCGHWuZs1yUMGwY",
  authDomain: "gemini-spinning-wheel-game.firebaseapp.com",
  projectId: "gemini-spinning-wheel-game",
  storageBucket: "gemini-spinning-wheel-game.firebasestorage.app",
  messagingSenderId: "691322332189",
  appId: "1:691322332189:web:e757b79d4d9eb010b692f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ఎగుమతి (Export) చేయడం ద్వారా ఇతర ఫైల్స్ లో వాడుకోవచ్చు
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
