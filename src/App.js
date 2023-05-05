import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "../src/hooks/useTelegram";
import Header from '../src/components/Header/Header'

import firebase from './firebase';
import 'firebase/messaging'


function App() {
  const {onTogleButton, tg} = useTelegram()

  // useEffect(()=>{
  //   tg.ready()
  // },[])

  useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((token) => {
        console.log("FCM Token:", token);
      })
      .catch((error) => {
        console.log("Unable to get FCM token:", error);
      });
  }, []);
  
  return (
    <div className="App">
      <Header />
      <button onClick={getCities}>getCities</button>
    </div>
  );
}

export default App;
