import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoInput from './components/TodoInput';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import Main from './components/Main';


function App() {

  return (
    <>


      <TodoHeader />
      <TodoInput />
      <TodoBody />

      <hr />

      <Counter /> 
      <hr />
      <Main />
    </>
  );
}

export default App;
