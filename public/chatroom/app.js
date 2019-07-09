window.document.addEventListener("DOMContentLoaded", event => {

    const firebase = require(firebase());
    const app = firebase.app();
    const db = firebase.firestore();
    const chatHistory = db.collection("website_chat").doc("5rz9qkx3yCvAzEuPiiOt");

    chatHistory.onSnapshot(doc => {
        const chatData = doc.data();
        var name = document.createTextNode(chatData.displayName + `<br>`);
        document.createTextNode(chatData.text + `<br>`);
        var chatStuff = document.createElement("H1");
        chatStuff.appendChild();
        document.body.appendChild(h);
    })

});