import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// eslint-disable-next-line
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

ReactDOM.render(<App />, document.getElementById('root'))

var admin = require('firebase-admin');
// eslint-disable-next-line
var app = admin.initializeApp();