
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKwNsWfw-2ZeHFJlvrzRcjqr7BigQ-FNs",
  authDomain: "comics-3065e.firebaseapp.com",
  projectId: "comics-3065e",
  storageBucket: "comics-3065e.firebasestorage.app",
  messagingSenderId: "608214934670",
  appId: "1:608214934670:web:6c5193dcb70555650395df",
  databaseURL: 'https://comics-3065e-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
