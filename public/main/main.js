/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { initializeApp, firestore, auth } from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var db = firestore();

function signIn(email, password, ep) {
    auth().signInWithEmailAndPassword(email, password);
    var user = auth().currentUser;

    var uid = user.uid;
    var password = user.password;

    var users = db.collection("users");

    users.doc(uid).get().then(function (doc) {
        var displayName = doc.data().displayName;
        var email = doc.data().email;

        console.log(displayName);
    });
};

function email() {
    var user = auth().currentUser;
    var uid = user.uid;

    var users = db.collection("users");
    users.doc(uid).get().then(function (doc) {
        var email = doc.data().email;
        return email;
    });
};

function password() {
    var user = auth().currentUser;
    var password = user.password;
    return password;
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
        window.location.replace(pagePath + "?email=" + email() + "&password=" + password());
    }
};