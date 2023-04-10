import React, {useContext} from 'react';
import { TodoContext } from "../store/TodoStore";
import Item from './Item';

const List = () => {
  const {todos, loading, changeTodoStatus} = useContext(TodoContext);
  let todoList = <div>Loading...</div>;
  if(!loading) todoList = todos.map( (todo, index) => 
    <Item key={index} todo={todo} changeTodoStatus={changeTodoStatus} />
  );

  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default List;