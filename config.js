import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const: firebaseConfig = {
    apiKey: "AIzaSyD8kTLaU9MAVFXrzPWbmVP12i8WkXeCOjE",
    authDomain: "projeto-78-a151c.firebaseapp.com",
    databaseURL: "https://projeto-78-a151c-default-rtdb.firebaseio.com",
    projectId: "projeto-78-a151c",
    storageBucket: "projeto-78-a151c.appspot.com",
    messagingSenderId: "435748300574",
    appId: "1:435748300574:web:99ef02a05f1b73f4ffcb0f"
  }
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
