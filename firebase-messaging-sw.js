messaging.getToken().then((currentToken) => {
    if (currentToken) {
        sendTokenToServer(currentToken);
        updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Please share permission, sharing is caring!');
        // Show permission UI.
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
    }
}).catch((err) => {
    console.log('Royce did something. An error happened. Sorry about Royce lul. ', err);
    showToken('Royce did something, so I can not show you the token. Sry tho. ', err);
    setTokenSentToServer(false);
});

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '78626384450'
});

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
});

importScripts('/__/firebase/5.5.6/firebase-app.js');
importScripts('/__/firebase/5.5.6/firebase-messaging.js');
importScripts('/__/firebase/init.js');

var messaging = firebase.messaging();

// START background_handler
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'Very Cool, Thanks for Sharing';
    var notificationOptions = {
        body: 'Someone has something very cool to share!',
        icon: '/images/verycoolmathgamestitle.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
// END background_handler