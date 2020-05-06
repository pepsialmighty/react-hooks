import React, { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy frontend! ' },
    { id: 2, title: 'We love Easy Frontend! ' },
    { id: 3, title: 'They love Easy Frontend! ' },
  ]);

  // function handleTodoClick(todo) {
  //   console.log(todo)
  // }

  //recieve data from TodoList
  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  //recieve data from TodoForm
  const handleTodoFormSubmit = (formValues) => {
    console.log('submited: ', formValues);
    //add new todo to current todo L ist
    const newTodo = {
      id: generateId(),
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  const generateId = () => {
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      '-' +
      s4() +
      s4()
    );
  };
  return (
    <div className='app'>
      <h1>React Hooks - TodoList </h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
