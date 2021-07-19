import firebase from 'firebase/app'
import "firebase/database"
const config = {
    apiKey: "AIzaSyAPon2-ueiTtPuWIBnaGv7oFwc5TOnPuRo",
    authDomain: "kfchat-e8bdb.firebaseapp.com",
    projectId: "kfchat-e8bdb",
    storageBucket: "kfchat-e8bdb.appspot.com",
    messagingSenderId: "94084253194",
    appId: "1:94084253194:web:44b752fcff459b6119c1f3",
    measurementId: "G-GJ368LKJY9"
  };
const db = firebase.initializeApp(config);
export default db;