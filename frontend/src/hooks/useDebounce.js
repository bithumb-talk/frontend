import { useRef } from 'react';
import { debounce } from 'lodash';

const useDebounce = (callback, time) => useRef(debounce(callback, time));

export default useDebounce;
