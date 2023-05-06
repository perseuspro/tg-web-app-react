import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Sendrequest, onMessageListener } from './firebase';

const Notification = () => {
	const [notification, setNotification] = useState({title: '', body: ''});
	const notify = () =>  toast(<ToastDisplay/>);

	useEffect(() => {
		if (notification?.title) {
			notify()
		}
	}, [notification])

	function ToastDisplay() {
	  return (
	    <div>
	      <p><b>{notification?.title}</b></p>
	      <p>{notification?.body}</p>
	    </div>
	  );
	};
	Sendrequest();
	return (
		<Toaster/>
	)
}

export default Notification