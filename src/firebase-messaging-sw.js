importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

  const firebaseConfig = ({
    apiKey: "AIzaSyAM1UoCBqsJVWCKiIGzkseKRX_VZs9VkpY",
    authDomain: "push-example-7a47b.firebaseapp.com",
    projectId: "push-example-7a47b",
    storageBucket: "push-example-7a47b.appspot.com",
    messagingSenderId: "356240633626",
    appId: "1:356240633626:web:e1eb643bde617982cfc6a3"
  });

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
