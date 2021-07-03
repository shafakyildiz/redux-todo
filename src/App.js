import React from 'react';
import './App.css';
import Input from './components/Input.js';
import TodoItem from './components/TodoItem';

const todoList = [
  {
    item: 'todo',
    done: true,
    id: 3,
  },
  {
    item: 'todo2',
    done: false,
    id: 5,
  },
];

function App() {
  return (
    <div className='app'>
      <div className='app'>
        <div className='app__container'>
          <div className='app__todoContainer'>
            {todoList.map((item) => (
              <TodoItem name={item.item} done={item.done} id={item.id} />
            ))}
          </div>
          <Input></Input>
        </div>
      </div>
      {/* todo list */}
      {/* done */}
      {/* input */}
    </div>
  );
}

export default App;
