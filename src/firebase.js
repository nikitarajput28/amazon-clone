import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDcOPBjr4kdurXNsfE_4Ao5gi2om0YLKeg",
  authDomain: "fir-30e3c.firebaseapp.com",
  projectId: "fir-30e3c",
  storageBucket: "fir-30e3c.appspot.com",
  messagingSenderId: "209640410580",
  appId: "1:209640410580:web:1bbac0ef912997403c5a41"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// export const db = firebase.firestore();

