import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "../src/hooks/useTelegram";
import Header from '../src/components/Header/Header'

import { initializeApp, messaging  } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDu3Ad7UzPTLro_RVSiDTyKEN3JDRf1ETI",
  authDomain: "salewbot.firebaseapp.com",
  projectId: "salewbot",
  storageBucket: "salewbot.appspot.com",
  messagingSenderId: "67022450921",
  appId: "1:67022450921:web:a28341969d5fa37b764078"
};

const fcm = initializeApp(firebaseConfig);
const dbfcm = getFirestore(fcm);

async function getCities(dbfcm) {
  const citiesCol = collection(dbfcm, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const getToken = async () => {
  try {
    const messagingInstance = messaging();
    await messagingInstance.requestPermission();
    const token = await messagingInstance.getToken();
    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.log("Unable to get FCM token:", error);
  }
};

function App() {
  const {onTogleButton, tg} = useTelegram()

  // useEffect(()=>{
  //   tg.ready()
  // },[])

  
  return (
    <div className="App">
      <Header />
      <button onClick={getCities}>getCities</button>
      <button onClick={getToken}>getToken </button>
    </div>
  );
}

export default App;
