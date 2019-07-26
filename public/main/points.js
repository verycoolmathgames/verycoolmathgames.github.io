/* eslint-disable no-unused-vars */

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCxRTkWjoToUoNsM8Rm6zPwiJBG_JCB4fo",
    authDomain: "verycoolthanksforsharing.firebaseapp.com",
    databaseURL: "https://verycoolthanksforsharing.firebaseio.com",
    projectId: "verycoolthanksforsharing",
    storageBucket: "verycoolthanksforsharing.appspot.com",
    messagingSenderId: "78626384450",
    appId: "1:78626384450:web:5c1a5470485502ab"
});

var user = firebase.auth().currentUser;
var db = firebase.firestore();
var totalPoints = db.collection("leaderboards").doc("totalPoints").collection("totalPoints").doc(user.displayName);

totalPoints.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var username = doc.id;
        var data = doc.data().userData.toString();

        var outerDiv = document.createElement("div");
        document.getElementById("leaderboard").appendChild(outerDiv);
        outerDiv.id = "outer" + username;

        var person = document.createElement("p");
        person.innerHTML = username + ": " + data;
        person.className = "person";
        document.getElementById(outerDiv.id).appendChild(person);
    });
});

function onloadPoints() {

};

function memePoints() {

}

function articlePoints() {

}