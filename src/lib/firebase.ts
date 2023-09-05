// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChmCzwAfxbR6Cq9bWfNibKPyM-u6qqHlc',
  authDomain: 'technet-4c716.firebaseapp.com',
  projectId: 'technet-4c716',
  storageBucket: 'technet-4c716.appspot.com',
  messagingSenderId: '1052824998738',
  appId: '1:1052824998738:web:537a825380b60db13b608b',
  measurementId: 'G-HJLVDV26DL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
