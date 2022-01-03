import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsbG-Rnr7rXOODNQwotBdDx1y6gyrKOMQ",
  authDomain: "linkedin-clone-63775.firebaseapp.com",
  projectId: "linkedin-clone-63775",
  storageBucket: "linkedin-clone-63775.appspot.com",
  messagingSenderId: "729019102239",
  appId: "1:729019102239:web:80a9649f72a36024be912a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
