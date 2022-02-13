import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0Nk-wLFt-w4qbZBDAkEJTgDtAgJHKRkE",
    authDomain: "twitter-clone-e9e31.firebaseapp.com",
    projectId: "twitter-clone-e9e31",
    storageBucket: "twitter-clone-e9e31.appspot.com",
    messagingSenderId: "238746086278",
    appId: "1:238746086278:web:82abf4e5011d4128545a07",
    measurementId: "G-NYLQJ4L3D4"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };