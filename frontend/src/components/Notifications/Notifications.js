import React, { useState, useEffect } from 'react';
import { getCurToken } from '../../firebase/firebaseInit';
import '../../App.css';

const Notifications = () => {
  const [isTokenFound, setTokenFound] = useState(false);

  console.log('Token found', isTokenFound);

  // To load once
  useEffect(() => {
    let data;

    async function tokenFunc() {
      data = await getCurToken(setTokenFound);
      if (data) {
        console.log('Token is', data);
      }
      return data;
    }

    tokenFunc();
  }, [setTokenFound]);

  return <></>;
};

Notifications.propTypes = {};

export default Notifications;
