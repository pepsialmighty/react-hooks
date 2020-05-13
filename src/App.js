import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import './App.scss';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'I love Easy frontend! ' },
  //   { id: 2, title: 'We love Easy Frontend! ' },
  //   { id: 3, title: 'They love Easy Frontend! ' },
  // ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  });

  // function handleTodoClick(todo) {
  //   console.log(todo)
  // }

  // //recieve data from TodoList
  // const handleTodoClick = (todo) => {
  //   console.log(todo);
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // };

  // //recieve data from TodoForm
  // const handleTodoFormSubmit = (formValues) => {
  //   console.log('submited: ', formValues);
  //   //add new todo to current todo List
  //   const newTodo = {
  //     id: generateId(),
  //     ...formValues,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // };

  //recieve data from PostFilterChange
  const handleFilterChange = (newFilter) => {
    console.log('new fiter', newFilter);
    //trigger call API
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  };

  //recieve the data from Pagination
  const handlePageChange = (newPage) => {
    //trigger call API
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  //call API , get the post
  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const paramsString = queryString.stringify(filters);
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        // console.log(responseJSON);

        const { data, pagination } = responseJSON; //lấy dữ liệu của data và pagination khi thay mới
        //set lại giá trị mới
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to catch PostList', error.message);
      }
    };

    fetchPostList();
    console.log('PostList effect');
  }, [filters]); //thay đổi khi filters thay đổi

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const requestURL = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1`;
  //     try {
  //       await fetch(requestURL)
  //         .then((result) => result.json())
  //         .then((json) => {
  //           console.log(json);
  //           const { data } = json;
  //           setPostList(data);
  //         });
  //     } catch (error) {
  //       throw error;
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log('TODO list effect');
  // });

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

  const [showClock, setShowClock] = useState(true);

  return (
    <div className='app'>
      {console.log('render')}
      <h1>React Hooks - PostList </h1>
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(!showClock)}>Hide clock</button>
    </div>
  );
}

export default App;
