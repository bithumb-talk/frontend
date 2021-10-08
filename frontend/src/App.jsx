import React, { useEffect, useState } from 'react';
import { onMessageListener } from './firebase/firebaseInit';
import Router from './router/Router';
import ReactNotificationComponent from './components/Notifications/ReactNotificationComponent';
import Notifications from './components/Notifications/Notifications';
// import Fader from './components/Notifications/Fader';

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  console.log(show, notification);

  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        setShow(true);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
        console.log(payload);
      })
      .catch((err) => console.log('failed: ', err));
  }, []);

  return (
    <>
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
      <Router />
      {/* <Fader text="Hello React" /> */}
    </>
  );
}

export default App;
