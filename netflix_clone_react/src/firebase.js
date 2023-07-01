// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVK8oIi5BorvQwTtPHU1sNtMpQHXF4Sf0",
  authDomain: "simtask-2.firebaseapp.com",
  projectId: "simtask-2",
  storageBucket: "simtask-2.appspot.com",
  messagingSenderId: "1053400564510",
  appId: "1:1053400564510:web:e2c93b062d786d283f3f0f"
};


// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth =firebase.auth();

export {auth}
export default db;
