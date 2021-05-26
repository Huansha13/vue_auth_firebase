import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// IMPORTS EXTERNAL
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDxIhY6tCq3Rq3M_N2bT4dB5GGFzZE3Wm8",
    authDomain: "portafolio-ca0f8.firebaseapp.com",
    databaseURL: "https://portafolio-ca0f8-default-rtdb.firebaseio.com",
    projectId: "portafolio-ca0f8",
    storageBucket: "portafolio-ca0f8.appspot.com",
    messagingSenderId: "493230247268",
    appId: "1:493230247268:web:2811b3b0d7c3bb7487be71",
    measurementId: "G-HCXWBY28C1"
};
firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged( user => {
    store.dispatch('fetchUser', user);
    if (!app) {
        app =  createApp(App).use(store).use(router).mount('#app')
    }
});