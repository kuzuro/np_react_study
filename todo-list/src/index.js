import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /* 처음 실행되는 코드 */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





/*
  사용자 코드 스니펫에서 템플릿을 만들 수 있다.

  컨트롤+쉬프트+P -> 사용자 코드~ -> 자바스크립트 리액트


*/