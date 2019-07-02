import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCxRTkWjoToUoNsM8Rm6zPwiJBG_JCB4fo",
    authDomain: "verycoolmathgames.firebaseapp.com",
    databaseURL: "https://verycoolmathgames.firebaseio.com",
    projectId: "verycoolthanksforsharing",
    storageBucket: "react-firebase-authentication-eeec7.appspot.com",
    messagingSenderId: "144750278413"
};
firebase.initializeApp(config);
export default firebase;
