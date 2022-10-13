import firebase from "firebase/compat/app";


require("firebase/compat/firestore");
require("firebase/compat/auth");
require("firebase/compat/storage");
require("firebase/compat/functions");

const config = {
  apiKey: "AIzaSyADFHq2e7t4AslCTeAcKSHW7J4EkpklHcg",
  authDomain: "sequoia-1214c.firebaseapp.com",
  projectId: "sequoia-1214c",
  storageBucket: "sequoia-1214c.appspot.com",
  messagingSenderId: "1079430348294",
  appId: "1:1079430348294:web:4af5e60a6e78bff1310d87",
  measurementId: "G-EE6RQPRB4C"
};

// Initialize Firebase
// if (!firebase.getApps.length) {
  const app = firebase.initializeApp(config);
// }

const auth = firebase.auth();
const db = firebase.firestore();
const increment = firebase.firestore.FieldValue.increment(1);
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, increment, storage, functions};