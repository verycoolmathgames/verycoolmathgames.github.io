import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

ReactDOM.render(<App />, document.getElementById('root'))

var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});