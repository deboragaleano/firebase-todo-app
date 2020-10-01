import firebase from "firebase"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBqs5gJXK_TPTRP_YPFtivUoYCW8kBNEuA",
    authDomain: "fir-todo-react-app.firebaseapp.com",
    databaseURL: "https://fir-todo-react-app.firebaseio.com",
    projectId: "fir-todo-react-app",
    storageBucket: "fir-todo-react-app.appspot.com",
    messagingSenderId: "533426110966",
    appId: "1:533426110966:web:d1a505acae492f9a8487d7",
    measurementId: "G-J8FQY0Y3FN"
  });

  const db = firebaseConfig.firestore();

  export default db; 