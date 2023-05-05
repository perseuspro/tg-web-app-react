import * as firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyDu3Ad7UzPTLro_RVSiDTyKEN3JDRf1ETI",
	authDomain: "salewbot.firebaseapp.com",
	projectId: "salewbot",
	storageBucket: "salewbot.appspot.com",
	messagingSenderId: "67022450921",
	appId: "1:67022450921:web:a28341969d5fa37b764078"
  };


firebase.initializeApp(firebaseConfig);

export default firebase