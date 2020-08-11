import firebase from "firebase";
const firebaseConfig = {
  apiKey: 'AIzaSyB9Csztp9VhAtJWLcDacAVtygpVViClS64',
  authDomain: 'twitter-clone-92f2f.firebaseapp.com',
  databaseURL: 'https://twitter-clone-92f2f.firebaseio.com',
  projectId: 'twitter-clone-92f2f',
  storageBucket: 'twitter-clone-92f2f.appspot.com',
  messagingSenderId: '777100328823',
  appId: '1:777100328823:web:fe2b2c4191f4ad89dbeb72',
  measurementId: 'G-52VTHHME40',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;