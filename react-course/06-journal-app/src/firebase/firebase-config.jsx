import 'firebase/firestore';
import 'firebase/auth';

// Import the needed functions from the SDKs.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM20-qGAwNhriasqRZ5QuudVJkCjSPxpU",
    authDomain: "react-app-cursos-9de97.firebaseapp.com",
    projectId: "react-app-cursos-9de97",
    storageBucket: "react-app-cursos-9de97.appspot.com",
    messagingSenderId: "363953590711",
    appId: "1:363953590711:web:6af83247cc8ec2f3b89832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 

export{
    app,
    db,
    googleAuthProvider
}