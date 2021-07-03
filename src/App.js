import React from 'react';
import './App.css';
import Input from './components/Input.js';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className='app'>
      <div className='app'>
        <div className='app__container'>
          <div className='app__todoContainer'>
            {todoList.map((item) => (
              <TodoItem
                key={item.id}
                name={item.item}
                $done={false}
                id={item.id}
              />
            ))}
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
