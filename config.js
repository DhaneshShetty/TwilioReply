// Import the functions you need from the SDKs you need
var {initializeApp} = require('firebase/app');
var {getDatabase} = require('firebase/database');
var env = require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig={
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseUrl:process.env.databaseUrl,
  projectId:process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId:process.env.appId,
  measurementId: process.env.measurementId
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

module.exports = {database}