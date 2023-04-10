import React, { useEffect, useReducer } from 'react';
import useFetch from '../hook/useFetch';
import { todoReducer } from '../hook/Reducers';

export const TodoContext = React.createContext();

const TodoStore = (props) => {
  // 상태값 정의
  const [todos, dispatch] = useReducer(todoReducer, []);
  const setInitData = (initData) => {
    dispatch({type: 'SET_INIT_DATA', payload: initData})
  }
  
  // data fetch
  const loading = useFetch(setInitData, JSON.parse(window.localStorage.getItem('todos')));
  // const loading = useFetch(setInitData, 'http://localhost:4000/todos');

  // 라이프사이클 (렌더링 이후)
  useEffect( 
    () => {
      window.localStorage.setItem('todos', JSON.stringify(todos));
      // console.log("새로운 내용이 렌더링되었습니다.\n", todos);
    }, 
    // [todos]
  );

  return (
    <TodoContext.Provider value={
      {todos, loading, dispatch}
    }>
      {props.children}
    </TodoContext.Provider>
  )
} 

export default TodoStore;
