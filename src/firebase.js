// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyD16KyQ8WxmbNiLHGp-4WiLNKgn1BriVlI",
  authDomain: "store-app-2aa0a.firebaseapp.com",
  projectId: "store-app-2aa0a",
  storageBucket: "store-app-2aa0a.appspot.com",
  messagingSenderId: "763916542936",
  appId: "1:763916542936:web:a94e1cc93dbbad4a32c8ad",
  measurementId: "G-B6WVFQZ0YT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, firebaseApp, storage};