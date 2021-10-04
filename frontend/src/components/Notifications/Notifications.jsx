import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDeviceToken } from '@/redux/userInfoSlice';
import { getCurToken } from '../../firebase/firebaseInit';

const Notifications = () => {
  const [isTokenFound, setTokenFound] = useState(false);
  const dispatch = useDispatch();

  console.log('Token found', isTokenFound);

  // To load once
  useEffect(() => {
    let data;

    async function tokenFunc() {
      data = await getCurToken(setTokenFound);
      if (data) {
        dispatch(setDeviceToken(data));
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
