import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore module separately
import "firebase/compat/auth"; // Import Auth module separately

const firebaseConfig = {
  apiKey: "AIzaSyDngC7JhWARGmuHm8iFH2YRZCiWLAAsQqc",
  authDomain: "netflix-clone-project-2ba73.firebaseapp.com",
  projectId: "netflix-clone-project-2ba73",
  storageBucket: "netflix-clone-project-2ba73.appspot.com",
  messagingSenderId: "320473384964",
  appId: "1:320473384964:web:587a1309969e443b040d51",
  measurementId: "G-TDVGF7PFQP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // Changed to firebaseApp.firestore()
const auth = firebaseApp.auth(); 
export { auth };
export { db }; // Exporting db as well
export default firebaseApp; // Exporting firebaseApp
