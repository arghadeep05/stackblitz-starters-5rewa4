// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNp0lQQaeHx2QqJ9SvbA8qEHl-hg2piB8',
  authDomain: 'admin-react-b8677.firebaseapp.com',
  projectId: 'admin-react-b8677',
  storageBucket: 'admin-react-b8677.appspot.com',
  messagingSenderId: '94968531762',
  appId: '1:94968531762:web:86172ddff6bea5ffee652b',
  measurementId: 'G-N6KM1RBK66',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
