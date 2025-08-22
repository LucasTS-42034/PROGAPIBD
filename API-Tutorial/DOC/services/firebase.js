// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYplnMGw5Od07VvURH23LofXMML08vuno",
  authDomain: "prog-8cbf1.firebaseapp.com",
  projectId: "prog-8cbf1",
  storageBucket: "prog-8cbf1.firebasestorage.app",
  messagingSenderId: "1049860068529",
  appId: "1:1049860068529:web:a720129e75b02de27abe90",
  measurementId: "G-Y0NQMQ93YG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
