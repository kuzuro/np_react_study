import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer, todosReducer02 } from './state/totos_redux';
import { counterReducer, counterReducer02 } from './state/counter';
import counterReducer03 from './state/counter';
import todosReducer03 from './state/totos_redux';
import "./utils/lang" ;


//const store = createStore(counterReducer);
const store = configureStore({
  reducer : {
    counter : counterReducer03,
    todos : todosReducer03

  }

});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode> */}
    
    <Provider store={store}>
      <App />
    </Provider>

    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
