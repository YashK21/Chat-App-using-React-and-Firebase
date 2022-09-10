import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import "../config.json"
const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: "chat-app-using-react-12414.firebaseapp.com",
  projectId: "chat-app-using-react-12414",
  storageBucket: "chat-app-using-react-12414.appspot.com",
  messagingSenderId: config.messagingSenderId,
  appId: "1:803344431152:web:3d602e2e3f696ee32595f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()