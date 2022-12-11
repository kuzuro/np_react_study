import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Todos from './components/todos/Todos';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // 성능적인 문제를 발견하기 위해 메서드를 2번씩 호출?
  // 검색해볼것
  
  //<React.StrictMode>
    //<App />  // 시작 파일을 변경할 수 있다.
    <Todos />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
