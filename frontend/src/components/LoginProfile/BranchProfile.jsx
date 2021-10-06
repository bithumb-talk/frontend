import React from 'react';
import { useSelector } from 'react-redux';
import LoginSignupLink from './LoginSignupLink';
import LoginProfile from './LoginProfile';

export default function BranchProfile() {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  // const getLocalToken = () => window.localStorage.getItem('token');

  return (
    <>
      {userInfo.userId ? (
        <LoginProfile />
      ) : (
        <LoginSignupLink />
      )}
    </>
  );
}
