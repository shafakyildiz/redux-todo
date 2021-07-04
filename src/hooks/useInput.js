import { useState } from 'react';

const useInput = (initialState) => {
  const [input, setInput] = useState(initialState);
  function reset() {
    setInput('');
  }

  return [input, setInput, reset];
};

export { useInput };
