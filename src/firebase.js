// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaBAk8gZ2Bq4h6NN-fhqj78crPGxieHB4",
  authDomain: "graviton-tars.firebaseapp.com",
  projectId: "graviton-tars",
  storageBucket: "graviton-tars.appspot.com",
  messagingSenderId: "1013537286253",
  appId: "1:1013537286253:web:39de8abe648d364e7d3764",
  measurementId: "G-Q3J27KCTM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);