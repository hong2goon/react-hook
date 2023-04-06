const List = ({todos}) => {
  const todoList = todos.map( (todo, index) => <li key={index}>{todo}</li>);

  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default List;