// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDSAAuGBKEaprYnOzrxBRkQs0pztJh_N4U",
  authDomain: "react-skrtate-app.firebaseapp.com",
  projectId: "react-skrtate-app",
  storageBucket: "react-skrtate-app.appspot.com",
  messagingSenderId: "795696330220",
  appId: "1:795696330220:web:9e34d1f64e7f78e9b2bcc9",
  measurementId: "G-31ZYX9PHGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default auth
// const analytics = getAnalytics(app);