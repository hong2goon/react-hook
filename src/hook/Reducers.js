export const todoReducer = (todos, {type, payload}) => {
  switch (type) {
    case 'ADD_TODO':
      return [...todos, {'id': todos.length + 1, 'title': payload, 'status': 'todo'}];
    case 'SET_INIT_DATA':
      return payload;
    case 'CHANGE_TODO_STATUS':
      return todos.map(todo => {
        if(todo.id === +payload) {
          todo.status === 'done' ? todo.status = 'todo' : todo.status = 'done';
        }
        return todo;
      })
    default:
      break;
  }
}
