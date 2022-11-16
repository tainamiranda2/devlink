
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD8qtSG3Qb42OWgDxJb3Pg_FO0zVxFXRtk",
  authDomain: "devlink-61a2d.firebaseapp.com",
  projectId: "devlink-61a2d",
  storageBucket: "devlink-61a2d.appspot.com",
  messagingSenderId: "433021638874",
  appId: "1:433021638874:web:17cfbcc28bddd1c12b6de3",
  measurementId: "G-0696RHHWPH"
};

// Initialize Firebase

const firebaseApp=initializeApp(firebaseConfig)
const db=getFirestore(firebaseApp)
const auth=getAuth(firebaseApp);
export {db,auth}