import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBAt7uE3vJRgjO8-MII7qxTBkcah-FWjew",
  authDomain: "chat-app-using-react-12414.firebaseapp.com",
  projectId: "chat-app-using-react-12414",
  storageBucket: "chat-app-using-react-12414.appspot.com",
    messagingSenderId: "803344431152",
  appId: "1:803344431152:web:3d602e2e3f696ee32595f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()