import * as firebase from 'firebase' 
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAwdHuN7bBLpkHavmJ1dAfjSjj2A8DLZi8",
    authDomain: "wily-cfad7.firebaseapp.com",
    projectId: "wily-cfad7",
    storageBucket: "wily-cfad7.appspot.com",
    messagingSenderId: "1098881122034",
    appId: "1:1098881122034:web:15a36fd9e94d025bfada6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()