import * as firebase from "firebase";
import * as firebaseConfig from "../config/firebase.json"

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }