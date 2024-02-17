// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_0HS7HCmVwNLmyB-SmzqyDn7juvOHdyg",
  authDomain: "prompt-battle-58ec1.firebaseapp.com",
  projectId: "prompt-battle-58ec1",
  storageBucket: "prompt-battle-58ec1.appspot.com",
  messagingSenderId: "1060800078966",
  appId: "1:1060800078966:web:7c1ff85e9c2cd1c859ab57",
  measurementId: "G-Z9N7NG194S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);