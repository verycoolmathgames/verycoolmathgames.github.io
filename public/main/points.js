/* eslint-disable no-unused-vars */

window.document.addEventListener("DOMContentLoaded", event => {

    const firebase = require(firebase());
    const app = firebase.app();
    const db = firebase.firestore();
    const chatHistory = db.collection("website_chat");

    chatHistory.onSnapshot(doc => {
        const chatData = doc.data();
        var name = document.createTextNode(chatData.displayName + `<br>`);
        var text = document.createTextNode(chatData.text + `<br>`);
    })

});

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
