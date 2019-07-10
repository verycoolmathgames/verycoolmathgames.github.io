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