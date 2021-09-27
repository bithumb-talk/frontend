import React, { useState } from 'react';
import { onMessageListener } from './firebase/firebaseInit';
import Router from './router/Router';
import ReactNotificationComponent from './components/Notifications/ReactNotificationComponent';
import Notifications from './components/Notifications/Notifications';
import Fader from './components/Notifications/Fader';

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  console.log(show, notification);

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

  return (
    <div className="App">
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
      <Fader text="Hello React" />
      <Router />
    </div>
  );
}

export default App;
