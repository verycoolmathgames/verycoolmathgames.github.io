window.document.addEventListener("DOMContentLoaded", event => {

    const firebase = require(firebase());
    const app = firebase.app();
    const db = firebase.firestore();
    const chatHistory = db.collection("website_chat").doc("5rz9qkx3yCvAzEuPiiOt");

    chatHistory.onSnapshot(doc => {
        const chatData = doc.data();
        document.createTextNode(chatData.displayName + `<br>`);
        document.createTe(chatData.text + `<br>`);
    })

});