import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from "../src/hooks/useTelegram";
import Header from '../src/components/Header/Header'

import firebase from './firebase';


function App() {
  const [token, setToken] = useState('');
  const {onTogleButton, tg} = useTelegram()

  useEffect(() => {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((token) => {
        console.log("FCM Token:", token);
        setToken(token);
      })
      .catch((error) => {
        console.log("Unable to get FCM token:", error);
      });
  }, []);
  
  return (
    <div className="App">
      <Header />
      <span>Token: {token}</span>
    </div>
  );
}

export default App;
