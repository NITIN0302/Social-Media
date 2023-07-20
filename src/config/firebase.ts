
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEWgaJJ5lSruFAMJo2-n1OSOpWyEUaQUc",
  authDomain: "social-media-6fac7.firebaseapp.com",
  projectId: "social-media-6fac7",
  storageBucket: "social-media-6fac7.appspot.com",
  messagingSenderId: "345792921300",
  appId: "1:345792921300:web:1654fbe15603735ba54541"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);