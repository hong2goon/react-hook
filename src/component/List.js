const List = ({todos, loading}) => {
  let todoList = <div>Loading...</div>;
  if(!loading) todoList = todos.map( (todo, index) => <li key={index}>{todo.title}</li>);

  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default List;