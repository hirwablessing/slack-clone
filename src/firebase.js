import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiBmVLvFJoMQlh_E6Iuwf3H3iOuYj77Mc",
  authDomain: "slack-clone-69ddc.firebaseapp.com",
  databaseURL: "https://slack-clone-69ddc.firebaseio.com",
  projectId: "slack-clone-69ddc",
  storageBucket: "slack-clone-69ddc.appspot.com",
  messagingSenderId: "182508851545",
  appId: "1:182508851545:web:75527c3b74aadd05123c48",
  measurementId: "G-E738TTLQ5E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
