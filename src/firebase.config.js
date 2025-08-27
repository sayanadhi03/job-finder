// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4vvel5NTldN80_o-W29PbwgIjEaKdlaE",
  authDomain: "online-job-portal-7287f.firebaseapp.com",
  projectId: "online-job-portal-7287f",
  storageBucket: "online-job-portal-7287f.firebasestorage.app",
  messagingSenderId: "598022048955",
  appId: "1:598022048955:web:77b2e844bea9ab82796d9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};