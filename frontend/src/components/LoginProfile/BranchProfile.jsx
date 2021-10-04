import React from 'react';
// import { useSelector } from 'react-redux';
import LoginSignupLink from './LoginSignupLink';
import LoginProfile from './LoginProfile';

export default function BranchProfile() {
  const userToken = window.localStorage.getItem('token');

  return (
    <>
      {userToken ? (
        <LoginProfile />
      ) : (
        <LoginSignupLink />
      )}
    </>
  );
}
