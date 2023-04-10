import React, { useState, useEffect } from 'react';
import useFetch from '../hook/useFetch';
import Header from '../component/Header';
import Form from '../component/Form';
import List from '../component/List';
import '../App.scss';

export const TodoContext = React.createContext();

const TodoStore = () => {
  // 상태값 정의
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  
  // data fetch
  const loading = useFetch(setTodos, 'http://localhost:4000/todos');

  // 함수
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    if(newTodo !== undefined) {
      if(newTodo !== '') {
        setTodos([...todos, {'id': todos.length + 1, 'title': newTodo, 'status': 'todo'}]);
        e.target.querySelector('input').value = '';
        setNewTodo('');
      }
    }
  }

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if(todo.id === +id) {
        todo.status === 'done' ? todo.status = 'todo' : todo.status = 'done';
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  // 라이프사이클 (렌더링 이후)
  useEffect( 
    () => {
      console.log("새로운 내용이 렌더링되었습니다.\n", todos);
    }, 
    [todos]
  );

  return (
    <TodoContext.Provider value={
      {todos, addTodo, changeInputData, loading, changeTodoStatus}
    }>
      <div className="wrap">
        <Header />
        <Form />
        <List />
      </div>
    </TodoContext.Provider>
  )
} 

export default TodoStore;
