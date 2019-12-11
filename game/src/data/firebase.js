import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAeZMYmproMg9QIBDdSyCHRRhHPp09s4Fk",
    authDomain: "game-battleship.firebaseapp.com",
    databaseURL: "https://game-battleship.firebaseio.com",
    projectId: "game-battleship",
    storageBucket: "game-battleship.appspot.com",
    messagingSenderId: "604009782000",
    appId: "1:604009782000:web:f9f1a3701e7f2d8d800035",
    measurementId: "G-YNKS310318"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;