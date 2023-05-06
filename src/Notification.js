import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { onMessageListener, requestNotificationsPermission } from './firebase';

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });

  const notify = () => {
    toast(<ToastDisplay />);
  };

  useEffect(() => {
	const fetchData = async () => {
	  requestNotificationsPermission();
  
	  const unregister = onMessageListener().then((payload) => {
		setNotification({
		  title: payload.notification.title,
		  body: payload.notification.body,
		});
	  });
  
	  return unregister;
	}
  
	fetchData();
  }, []);

  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification.title}</b>
        </p>
        <p>{notification.body}</p>
      </div>
    );
  }

  return <Toaster />;
};

export default Notification;