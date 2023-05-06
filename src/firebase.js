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

initializeApp(firebaseConfig);


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(getMessaging, (payload) => {
      resolve(payload);
    });
});



export const Sendrequest = () => {
	console.log("Requesting User Permission......");
	Notification.requestPermission().then((permission) => {
	  if (permission === "granted") {
		console.log("Notification User Permission Granted.");
  
   return getToken(getMessaging, { vapidKey: `BGUmYFe16fiAxKpLeyMqmk8IVGrBaxJ55hYtnjUJofgIluN1tc1TsBzV4NRFd2R51X-OGQwyLjyDGQJzYGhZ71Q` })
   .then((currentToken) => {
			if (currentToken) {
			  console.log('Client Token: ', currentToken);
			  
   } else {
			  
			  console.log('Failed to generate the registration token.');
   }
   })
   .catch((err) => {
			console.log('An error occurred when requesting to receive the token.', err);
   });
   } else {
		console.log("User Permission Denied.");
   }
   });
  }


