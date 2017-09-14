//var functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
//var admin = require('firebase-admin');
//admin.initializeApp(functions.config().firebase);


/*Handlebars.addMessage = functions.https.onRequest(function(req, res) {
    console.log(req);
    var original = req.query.text;
// Push the new message into the Realtime Database using the Firebase Admin SDK.
admin.database().ref('/prospects').push({original: original}).then(function(snapshot) {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref);
});
});
*/

var config = {
    apiKey: "AIzaSyCe10qhLv_-f348imnBoz3uQXNt6KAPGds",
    authDomain: "papillon-ad8fa.firebaseapp.com",
    databaseURL: "https://papillon-ad8fa.firebaseio.com",
    projectId: "papillon-ad8fa",
    storageBucket: "papillon-ad8fa.appspot.com",
    messagingSenderId: "17500589997"
};
firebase.initializeApp(config);

var defaultStorage = firebase.storage();
var defaultDatabase = firebase.database();
