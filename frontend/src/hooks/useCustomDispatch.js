import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useEffectDispatch = (callback) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callback);
  }, [dispatch, callback]);
};

export default useEffectDispatch;
