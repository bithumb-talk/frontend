/* eslint-disable no-shadow */
import { useState, useCallback } from 'react';

function useInputs(initalForm) {
  const [form, setForm] = useState(initalForm);

  const onChange = useCallback((e) => {
    const { key, value } = e;
    setForm((form) => ({ ...form, [key]: value }));
  }, []);
  const reset = useCallback(() => setForm(initalForm), [initalForm]);
  return [form, onChange, reset];
}

export default useInputs;
