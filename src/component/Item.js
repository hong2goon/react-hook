import React, {useContext} from 'react';
import { TodoContext } from "../store/TodoStore";
import './List.scss';

const Item = ({todo}) => {
  const {dispatch} = useContext(TodoContext);

  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    dispatch({type: 'CHANGE_TODO_STATUS', payload: id});
  }
  const itemClassName = todo.status === 'done' ? 'done' : '';

  return (
    <li data-id={todo.id} className={itemClassName} onClick={toggleItem}>{todo.title}</li>
  )
}

export default Item;