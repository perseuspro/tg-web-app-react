import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from "../src/hooks/useTelegram";
import Header from '../src/components/Header/Header'
import * as PusherPushNotifications from "@pusher/push-notifications-web";

function App() {
  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: '6465a952-e818-497f-9ca9-2e2b9ad3655b',
    });

    beamsClient.start()
      .then(() => beamsClient.addDeviceInterest('hello'))
      .then(() => console.log('Successfully registered and subscribed!'))
      .catch(console.error);
  }, []);

  return (
    <div>
      /* Your app code here */
    </div>
  );
}

export default App;
