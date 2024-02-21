// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDogZDuFf9VWhhi6f5yn_J6WOg3pKGZh3k',
  authDomain: 'utak-merchant.firebaseapp.com',
  projectId: 'utak-merchant',
  storageBucket: 'utak-merchant.appspot.com',
  messagingSenderId: '1058327048305',
  appId: '1:1058327048305:web:2d41b8975102b463752bd0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
