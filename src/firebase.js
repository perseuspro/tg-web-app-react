import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';



const firebaseConfig = {
	apiKey: "AIzaSyDu3Ad7UzPTLro_RVSiDTyKEN3JDRf1ETI",
	authDomain: "salewbot.firebaseapp.com",
	projectId: "salewbot",
	storageBucket: "salewbot.appspot.com",
	messagingSenderId: "67022450921",
	appId: "1:67022450921:web:a28341969d5fa37b764078"
  };
const vapkey='BGUmYFe16fiAxKpLeyMqmk8IVGrBaxJ55hYtnjUJofgIluN1tc1TsBzV4NRFd2R51X-OGQwyLjyDGQJzYGhZ71Q'


initializeApp(firebaseConfig);



export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(getMessaging(), (payload) => {
      resolve(payload);
    });
  });

export const sendTokenToServer = (currentToken) => {
  console.log('Sending token to server...', currentToken);
  // Add your own logic here to send the FCM token to your server
};

export const requestNotificationsPermission = () => {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Permission granted.');

      getToken(getMessaging(), { vapidKey: vapkey })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token received: ', currentToken);
            sendTokenToServer(currentToken);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving the token. ', err);
        });
    } else {
      console.log('Permission denied.');
    }
  });
};