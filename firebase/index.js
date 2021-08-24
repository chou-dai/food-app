import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
import { firebaseConfig } from './config';

export default function initFirebase() {
  if(!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
  }
  console.log("Firebase was successfully init.")
}