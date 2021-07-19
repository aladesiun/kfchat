import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPon2-ueiTtPuWIBnaGv7oFwc5TOnPuRo",
    authDomain: "kfchat-e8bdb.firebaseapp.com",
    projectId: "kfchat-e8bdb",
    storageBucket: "kfchat-e8bdb.appspot.com",
    messagingSenderId: "94084253194",
    appId: "1:94084253194:web:44b752fcff459b6119c1f3",
    measurementId: "G-GJ368LKJY9"
  };
  firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')
