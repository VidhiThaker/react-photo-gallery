import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxP2zoqXKFMSqgF4NvM6RmexfU48EbgP4",
    authDomain: "gallery-69708.firebaseapp.com",
    projectId: "gallery-69708",
    storageBucket: "gallery-69708.appspot.com",
    messagingSenderId: "876185086929",
    appId: "1:876185086929:web:5731025234d4f146810ef0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timeStamp};

