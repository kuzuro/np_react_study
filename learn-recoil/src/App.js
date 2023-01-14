import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoBody />
    </>
  );
}

export default App;
