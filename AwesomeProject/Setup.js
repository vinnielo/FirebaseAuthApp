import React from 'react';
import App  from "./App";
import firebase from "@react-native-firebase/app";
import Auth from "@react-native-firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8aDxXuCMwppO6ne9IPSwxuGn-ikFUURE",
    authDomain: "alongwithme-22328.firebaseapp.com",
    databaseURL: "https://alongwithme-22328.firebaseio.com",
    projectId: "alongwithme-22328",
    storageBucket: "alongwithme-22328.appspot.com",
    messagingSenderId: "455176172872",
    appId: "1:455176172872:web:0f95df233b7f92e359ef7d",
    measurementId: "G-W2GYKM516W"
  };

  if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig); 
  }
  
  export {firebase, Auth}

function Setup() {
  return <App/>
;
};


export default Setup;
