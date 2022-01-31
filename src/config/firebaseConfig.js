import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCQsZugsHCxq54hECvVUDr-saBNHW6sCHQ",
    authDomain: "todo-6a3bd.firebaseapp.com",
    projectId: "todo-6a3bd",
    storageBucket: "todo-6a3bd.appspot.com",
    messagingSenderId: "106415835292",
    appId: "1:106415835292:web:09ba97a224edf79ac64559"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;