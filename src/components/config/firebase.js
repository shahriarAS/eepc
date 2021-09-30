// Package Import
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFqFuXymuXZ-PhA0XbejVlTujp_fHUkd4",
    authDomain: "eepc-30719.firebaseapp.com",
    projectId: "eepc-30719",
    storageBucket: "eepc-30719.appspot.com",
    messagingSenderId: "495790525472",
    appId: "1:495790525472:web:6ba229718ab72a71568045",
    measurementId: "G-L3P31SCKSQ",
    databaseURL: "https://eepc-30719-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };

const firebase = initializeApp(firebaseConfig);

export default firebase;