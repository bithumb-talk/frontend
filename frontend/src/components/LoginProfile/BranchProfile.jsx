import React from 'react';
import LoginSignupLink from './LoginSignupLink';
import LoginProfile from './LoginProfile';

export default function BranchProfile() {
  const getLocalToken = () => window.localStorage.getItem('token');

  return (
    <>
      { getLocalToken() ? (
        <LoginProfile />
      ) : (
        <LoginSignupLink />
      )}
    </>
  );
}
