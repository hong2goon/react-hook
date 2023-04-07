const Header = ({todos}) => {
  return (
    <header>
      <h1>todo 애플리케이션</h1>
       <div>해야할 일: <strong>{todos.length}</strong>개</div>
    </header>
  )
}

export default Header;