import firebase from 'firebase'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});
export const getfirebase = () => app
export const getfirestore = () => firebase.firestore(app)