import React, {useContext, useRef} from 'react';
import { TodoContext } from "../store/TodoStore";

const Form = () => {
  const {dispatch} = useContext(TodoContext);
  const inputRef = useRef(false);

 const addTodoData = (e) => {
  e.preventDefault();
  dispatch({type: 'ADD_TODO', payload: inputRef.current.value});
  e.target.closest('form').querySelector('input').value = '';
 }

  return (
    <form onSubmit={addTodoData}>
      <input type="text" ref={inputRef} />
      <button type="submit" className="btn-submit" onClick={addTodoData}>할일 추가</button>
    </form>
  )
}

export default Form;
