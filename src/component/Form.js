import React, {useContext} from 'react';
import { TodoContext } from "../store/TodoStore";

const Form = () => {
  const {addTodo, changeInputData} = useContext(TodoContext);
  return (
    <form onSubmit={addTodo}>
      <input type="text" onChange={changeInputData} />
      <button type="submit" className="btn-submit">할일 추가</button>
    </form>
  )
}

export default Form;
