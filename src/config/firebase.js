import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, setDoc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { sign } from 'crypto'

const firebaseConfig = {
    apiKey: "AIzaSyA3fk3_JA0H5oY-JC582p8hzF6tlgOI-RM",
    authDomain: "challenge-ey-482ec.firebaseapp.com",
    projectId: "challenge-ey-482ec",
    storageBucket: "challenge-ey-482ec.appspot.com",
    messagingSenderId: "971836200260",
    appId: "1:971836200260:web:52cdb40cc06e0f9ba37311",
    measurementId: "G-X0RMRVGGXJ"
};
firebase.initializeApp(firebaseConfig);

const tenantId = "TENANT_ID1";

//const db = getFirestore()
const db = getFirestore()
//auth.tenantId = tenantId;
//const database = firebase.firestore();
export default db;