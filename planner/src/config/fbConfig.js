import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoKUeX2fqVN5Yh62akE2vZzbW52ip35Ag",
    authDomain: "net-ninja-planner.firebaseapp.com",
    databaseURL: "https://net-ninja-planner.firebaseio.com",
    projectId: "net-ninja-planner",
    storageBucket: "",
    messagingSenderId: "1071711800676"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;