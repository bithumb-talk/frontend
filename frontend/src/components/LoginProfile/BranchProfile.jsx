import React, { useEffect, useState } from 'react';
import LoginSignupLink from './LoginSignupLink';
import LoginProfile from './LoginProfile';

export default function BranchProfile() {
  const [localToken, setlocalToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setlocalToken(token);
  }, []);

  return (
    <>
      { localToken ? (
        <LoginProfile />
      ) : (
        <LoginSignupLink />
      )}
    </>
  );
}
