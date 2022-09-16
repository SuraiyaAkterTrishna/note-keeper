import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCzm_kNY5QHNXwTv0_rqmOcyMOPRlh0jlA",
    authDomain: "note-keep-62b77.firebaseapp.com",
    projectId: "note-keep-62b77",
    storageBucket: "note-keep-62b77.appspot.com",
    messagingSenderId: "512619696866",
    appId: "1:512619696866:web:ef793e289abce1f5d404bb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;