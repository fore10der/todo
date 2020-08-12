import * as firebase from "firebase";
import * as dotenv from "dotenv"
import * as firebaseConfig from "../config/firebase.json"
dotenv.config()

console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }