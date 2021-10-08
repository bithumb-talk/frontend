import { useEffect, useState } from 'react';
import { getItem } from '@/utils/utils';

function useAuth() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(!!getItem('token'));
  }, [setIsLogin]);
  return [isLogin];
}

export default useAuth;
