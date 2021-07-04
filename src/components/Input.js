import React from 'react';
import './Input.css';
import Button from '@material-ui/core/Button';
import { useInput } from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
function Input() {
  const [input, setInput, resetInput] = useInput('');
  const dispatch = useDispatch();
  const addTodo = () => {
    if (input !== '') {
      console.log(`Adding ${input}`);
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
      resetInput();
    }
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
