importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

const firebaseConfig = {
	apiKey: "AIzaSyDu3Ad7UzPTLro_RVSiDTyKEN3JDRf1ETI",
	authDomain: "salewbot.firebaseapp.com",
	projectId: "salewbot",
	storageBucket: "salewbot.appspot.com",
	messagingSenderId: "67022450921",
	appId: "1:67022450921:web:a28341969d5fa37b764078"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});