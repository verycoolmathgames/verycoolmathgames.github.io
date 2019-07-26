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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var totalPointsRef = db.collection("'leaderboards'/'leaderboards'/'totalPoints'").doc(user.displayName);
totalPointsRef.get().then(function (doc) {
    if (doc.exists) {
        var totalPoints = doc.data().userData;
        console.log(totalPoints);
    } else {
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

totalPointsRef.onSnapshot(function (doc) {
    console.log("Current data: ", doc.data());
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var memesUploadedRef = db.collection("'leaderboards'/'leaderboards'/'memesUploaded'").doc(user.displayName);
totalPointsRef.get().then(function (doc) {
    if (doc.exists) {
        var memesUploaded = doc.data().userData;
        console.log(memesUploaded);
    } else {
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

memesUploadedRef.onSnapshot(function (doc) {
    console.log("Current data: ", doc.data());
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var articlesUploadedRef = db.collection("'leaderboards'/'leaderboards'/'memesUploaded'").doc(user.displayName);
totalPointsRef.get().then(function (doc) {
    if (doc.exists) {
        var memesUploaded = doc.data().userData;
        console.log(memesUploaded);
    } else {
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

articlesUploadedRef.onSnapshot(function (doc) {
    console.log("Current data: ", doc.data());
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function onloadPoints() {

};

function memePoints() {

}

function articlePoints() {

}