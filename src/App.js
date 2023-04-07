import { useState, useEffect } from 'react';
import useFetch from './hook/useFetch';
import Header from './component/Header';
import List from './component/List';
import './App.scss';

const App = () => {
  // 상태값 정의
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  
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
        if(todo.status === 'done') todo.status = 'todo';
        else todo.status = 'done';
      }
      return todo;
    })

    console.log(updateTodos);
  }

  // 라이프사이클 (렌더링 이후)
  useEffect( 
    () => {
      console.log("새로운 내용이 렌더링되었습니다.\n", todos);
    }, 
    [todos]
  );

  return (
    <div className="wrap">
      <Header todos={todos} />
      <form onSubmit={addTodo}>
        <input type="text" onChange={changeInputData} />
        <button type="submit" className="btn-submit">할일 추가</button>
      </form>

      <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus} />
    </div>
  )
} 

export default App;
