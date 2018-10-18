import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFEDiyKr0odxhihoMwpXYQuD6LZ1pMjIE",
    authDomain: "ayush-mario-plan.firebaseapp.com",
    databaseURL: "https://ayush-mario-plan.firebaseio.com",
    projectId: "ayush-mario-plan",
    storageBucket: "ayush-mario-plan.appspot.com",
    messagingSenderId: "563632870125"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase;