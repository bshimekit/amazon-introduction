import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABUaTsBsLE6-DUB1OGxpvuzwrWTnhFeiA",
  authDomain: "fir-d24d3.firebaseapp.com",
  projectId: "fir-d24d3",
  storageBucket: "fir-d24d3.appspot.com",
  messagingSenderId: "938813977174",
  appId: "1:938813977174:web:6d064d7354d1ecedd181f7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
