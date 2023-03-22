import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrbZUzWvA7nD5k2k3iFPe2xUQbCQmvjU4",
  authDomain: "clone-329c5.firebaseapp.com",
  projectId: "clone-329c5",
  storageBucket: "clone-329c5.appspot.com",
  messagingSenderId: "1040306068754",
  appId: "1:1040306068754:web:79df4bc5696786fa4f67cb",
  measurementId: "G-NBFDR99P34",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
