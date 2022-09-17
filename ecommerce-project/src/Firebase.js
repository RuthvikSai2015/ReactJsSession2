// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD56lBZJ78OLYjUPHzD0bGNx6jNiMZ0rE",
  authDomain: "ashokit-auth-project.firebaseapp.com",
  projectId: "ashokit-auth-project",
  storageBucket: "ashokit-auth-project.appspot.com",
  messagingSenderId: "475291209959",
  appId: "1:475291209959:web:f09f67b43f3ca67d269242",
  measurementId: "G-5E47K1YLMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}