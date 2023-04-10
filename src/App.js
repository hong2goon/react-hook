import TodoStore from './store/TodoStore';
import Header from './component/Header';
import Form from './component/Form';
import List from './component/List';
import './App.scss';

const App = () => {
  return (
    <TodoStore>
      <div className="wrap">
        <Header />
        <Form />
        <List />
      </div>
    </TodoStore>
  )
} 

export default App;
