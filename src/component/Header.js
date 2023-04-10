import React, {useContext} from 'react';
import { TodoContext } from "../store/TodoStore";

const Header = () => {
  const {todos} = useContext(TodoContext);

  return (
    <header>
      <h1>todo 애플리케이션</h1>
      <div>해야할 일: <strong>{todos.filter(v => v.status === 'todo').length}</strong>개</div>
     </header>
    // <TodoContext.Consumer>
    //   {
    //     ({todos}) => (
    //       <header>
    //         <h1>todo 애플리케이션</h1>
    //         <div>해야할 일: <strong>{todos.filter(v => v.status === 'todo').length}</strong>개</div>
    //       </header>
    //     )
    //   }
    // </TodoContext.Consumer>
  )
}

export default Header;