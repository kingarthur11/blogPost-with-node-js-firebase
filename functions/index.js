const functions = require('firebase-functions');
const express = require('express');
const route = require('./route');

// const admin = require('firebase-admin');
// admin.initializeApp();
const app = express();

const bodyparser = require('body-parser');
const path = require('path');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(route.routes);


exports.user = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });
