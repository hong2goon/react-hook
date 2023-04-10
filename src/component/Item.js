import './List.scss';

const Item = ({todo, changeTodoStatus}) => {
  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  }
  const itemClassName = todo.status === 'done' ? 'done' : '';

  return (
    <li data-id={todo.id} className={itemClassName} onClick={toggleItem}>{todo.title}</li>
  )
}

export default Item;