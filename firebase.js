// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCPAiddxY6tfTdeV9bZLhoJn8r98fOeA",
  authDomain: "ubernextjsapp.firebaseapp.com",
  projectId: "ubernextjsapp",
  storageBucket: "ubernextjsapp.appspot.com",
  messagingSenderId: "851915136111",
  appId: "1:851915136111:web:33e18cce1db55c7180819a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider =new GoogleAuthProvider()
const auth =getAuth()

export {app,provider,auth}