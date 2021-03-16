import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1sgZ8lwHo0MxL2u_eABLHKjVg6-4du20",
    authDomain: "slack-clone-f3a76.firebaseapp.com",
    projectId: "slack-clone-f3a76",
    storageBucket: "slack-clone-f3a76.appspot.com",
    messagingSenderId: "401198327597",
    appId: "1:401198327597:web:a8e5aac84197b2a58755a4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }