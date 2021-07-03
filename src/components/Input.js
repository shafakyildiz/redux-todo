import React, { useState } from 'react';
import './Input.css';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
function Input() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {
    console.log(`Adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className='input'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={addTodo} variant='contained' color='primary'>
        ADD
      </Button>
    </div>
  );
}

export default Input;
