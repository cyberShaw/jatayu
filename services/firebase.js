import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.app.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBZxdEoeTYZyUcqun61SDDFCJ_-ccpUPxQ",
        authDomain: "wire-cb4ef.firebaseapp.com",
        databaseURL: "https://wire-cb4ef.firebaseio.com",
        projectId: "wire-cb4ef",
        storageBucket: "wire-cb4ef.appspot.com",
        messagingSenderId: "411596089728",
        appId: "1:411596089728:web:562be86c3ec7248a017965",
        measurementId: "G-PF6ER3BTWH"
    };
    firebase.initializeApp(config)
}

const fireDb = firebase.firestore()
const fireAuth = firebase.auth()

export {fireDb, fireAuth}