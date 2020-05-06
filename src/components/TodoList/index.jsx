import PropTypes from 'prop-types';
import React from 'react';

const TodoList = (props) => {
  const { todos, onTodoClick } = props;

  // function handleClick(todo) {
  //   if (onTodoClick) {
  //     onTodoClick(todo);
  //   }
  // }

  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };
  return (
    <>
      <ul className='todo-list'>
        {todos.map((todo, i) => (
          <li key={i} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

//nếu có isRequired thì ko cần giá trị mặc định
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

//ko có isRequired thí phải có cái này, gán giá trị mặc  cho biến
TodoList.defaultProps = {
  todo: [],
  onTodoClick: null,
};

export default TodoList;
