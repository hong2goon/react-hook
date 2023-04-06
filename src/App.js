import { useState, useEffect } from 'react';
import List from './component/List';
import './App.scss';

const App = () => {
  // 상태값 정의
  const [todos, setTodos] = useState(['react study']);
  const [newTodo, setNewTodo] = useState();

  // 함수
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    if(newTodo !== undefined) {
      if(newTodo !== '') {
        setTodos([...todos, newTodo]);
        e.target.querySelector('input').value = '';
        setNewTodo('');
      }
    }
  }

  // 라이프사이클
  useEffect( 
    () => {
      console.log("새로운 내용이 렌더링되었습니다.\n", todos);
    }, 
    [todos]
  );

  return (
    <div className="wrap">
      <h1>todo 애플리케이션</h1>
      <form onSubmit={addTodo}>
        <input type="text" onChange={changeInputData} />
        <button type="submit" className="btn-submit">할일 추가</button>
      </form>

      <List todos={todos} />
    </div>
  )
} 

export default App;
