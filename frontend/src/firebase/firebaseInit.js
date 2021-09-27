import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const messaging = getMessaging(firebaseConfig);
console.log(messaging);

const publicKey = process.env.REACT_APP_VAPID_KEY;

export const getCurToken = async (setTokenFound) => {
  let currentToken = '';

  try {
    currentToken = await getToken(messaging, { vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error);
  }

  return currentToken;
};

export const onMessageListener = () => new Promise((resolve) => {
  onMessage(messaging, (payload) => {
    resolve(payload);
  });
});
