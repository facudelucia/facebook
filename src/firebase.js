import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBAABvltxbgX1vC_W6-ZTSxDmbVNN1Z3mk",
    authDomain: "fb-clone-b6160.firebaseapp.com",
    databaseURL: "https://fb-clone-b6160.firebaseio.com",
    projectId: "fb-clone-b6160",
    storageBucket: "fb-clone-b6160.appspot.com",
    messagingSenderId: "278176344040",
    appId: "1:278176344040:web:b7d084ac6d7fa4eacde65d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db