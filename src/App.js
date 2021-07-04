import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input.js';
import TodoItem from './components/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const [asd, setAsd] = useState();
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const resData = res.json();
    setAsd([resData]);
  }
  useEffect(() => {
    fetchTodos();
    console.log(asd);
  }, [dispatch]);

  return (
    <div className='app'>
      <div className='app'>
        <div className='app__container'>
          <div className='app__todoContainer'>
            {todoList.map((item, index) => (
              <TodoItem
                key={index}
                name={item.item}
                done={item.done}
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
