import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp({
    apiKey: "AIzaSyDWGDvj1vdJhKL2YkOX5f_uHjSMVBFxxoU",
    authDomain: "adchat-c3487.firebaseapp.com",
    projectId: "adchat-c3487",
    storageBucket: "adchat-c3487.appspot.com",
    messagingSenderId: "552568448251",
    appId: "1:552568448251:web:f566b2a8937da9c5a8bc5e"
  }).auth();