import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDuUVZ8vNcTpqYFK2qdMuhwHXuV5sodmuE",
  authDomain: "photogallery-fb7b7.firebaseapp.com",
  projectId: "photogallery-fb7b7",
  storageBucket: "photogallery-fb7b7.appspot.com",
  messagingSenderId: "968868341286",
  appId: "1:968868341286:web:058f754ae15879e61ea8e7",
  measurementId: "G-SXY7TQ4N8Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//connect to storage, firestore and timestamp  (this like mongoDB...maybe??)
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectStorage, timestamp };
