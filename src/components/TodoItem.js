import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = ({ name, done, id }) => {
  const handleChange = () => {};
  return (
    <div className='todoItem'>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {/* checkbox */}
      {/* name */}
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  );
};

export default TodoItem;
