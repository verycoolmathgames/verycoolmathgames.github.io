/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { initializeApp, firestore, auth } from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

initializeApp({
    apiKey: "AIzaSyCxRTkWjoToUoNsM8Rm6zPwiJBG_JCB4fo",
    authDomain: "verycoolthanksforsharing.firebaseapp.com",
    databaseURL: "https://verycoolthanksforsharing.firebaseio.com",
    projectId: "verycoolthanksforsharing",
    storageBucket: "verycoolthanksforsharing.appspot.com",
    messagingSenderId: "78626384450",
    appId: "1:78626384450:web:5c1a5470485502ab"
});

var db = firestore();

function signIn(email, password) {
    auth().signInWithEmailAndPassword(email, password);
    var user = auth().currentUser;

    var uid = user.uid;
    var password = user.password;

    var users = db.collection("users");

    users.doc(uid).get().then(function (doc) {
        var displayName = doc.data().displayName;
        global var email = doc.data().email;

        console.log(displayName);
    });
};

window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var URLEmail = urlParams.get('email');
    var URLPassword = urlParams.get('password');
    signIn(URLEmail, URLPassword);
};

function redirect(pagePath) {
    if (pagePath === "signout.html") {
        auth().signOut();
        window.location.replace("https://verycoolmathgames.github.io");
    }
    else {
        window.location.replace(pagePath + "?email=" + email + "&password=" + password);
    }
};