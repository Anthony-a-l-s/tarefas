import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCS2lf5COsU95I2SlxMqFEM_7e6PFBYQb0",
    authDomain: "tarefas-e7f8e.firebaseapp.com",
    projectId: "tarefas-e7f8e",
    storageBucket: "tarefas-e7f8e.appspot.com",
    messagingSenderId: "62781542440",
    appId: "1:62781542440:web:71a0b21279328a943be51d"
};

if(!firebase.apps.lengrh){
    firebase.initializeApp(firebaseConfig)
};

export default firebase;