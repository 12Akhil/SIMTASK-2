// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtYIc3e10Iw72rELfwXBQExRHMn8SHqLg",
  authDomain: "netflix-react-ba3df.firebaseapp.com",
  projectId: "netflix-react-ba3df",
  storageBucket: "netflix-react-ba3df.appspot.com",
  messagingSenderId: "383283167695",
  appId: "1:383283167695:web:d649755c1773e0b48c92ba"
};

// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth =firebase.auth();

export {auth}
export default db;
