import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC12JROpwZShq0RNGrImYtOwmYw1DOYJuI",
  authDomain: "test-2af00.firebaseapp.com",
  projectId: "test-2af00",
  storageBucket: "test-2af00.appspot.com",
  messagingSenderId: "612051103180",
  appId: "1:612051103180:web:1235947759b43c09b7c169",
  measurementId: "G-FL90WPE1SX"
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export { firebase };