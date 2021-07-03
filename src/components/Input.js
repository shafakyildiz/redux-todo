import React from 'react';
import './Input.css';
import { useState } from 'react';

function Input() {
  const [input, setInput] = useState('');
  const addTodo = () => {};
  return (
    <div className='input'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default Input;
