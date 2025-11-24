import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase project configuration
// You can find these values in your Firebase Console -> Project Settings
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-key",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "cargonex.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "cargonex",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "cargonex.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
