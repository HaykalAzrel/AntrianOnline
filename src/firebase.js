// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZ5I5PC_CSBojuWhTf-FlMGMnS7NdCT-s",
  authDomain: "antrian-online-d4e02.firebaseapp.com",
  projectId: "antrian-online-d4e02",
  storageBucket: "antrian-online-d4e02.appspot.com",
  messagingSenderId: "681219783268",
  appId: "1:681219783268:web:1281314c87151d4bb8fd71",
  measurementId: "G-39WVC73XPS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;