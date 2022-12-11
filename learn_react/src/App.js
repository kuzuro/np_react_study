//import React from "react";
//import logo from './logo.svg';
//import './App.css';
//import TodoInput from './components/TodoInput';

import React, { useState, useEffect } from "react";
import Todos from "./components/todos/Todos";

function App() {

  //const [count, setCount] = useState(0);
  //const [input, setInput] = useState("");


  // const handleCount = () => { 
  //   setCount(count + 1);
  // };


  /* 
    useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  */
  // useEffect(() => { 
  //   console.log("렌더링");
  // });


  // 두번쨰 인자에 있는 배열에 포함된 요소에 대해서만 렌더링 발생시 useEffect가 실행
  // useEffect(() => { 
  //   console.log(`count : ${count}`);
  // }, [count]);

  // useEffect(() => { 
  //   console.log(`input : ${input}`);
  // }, [input]);





  // const handleInput = (e) => {
  //   setInput(e.target.value);    
  // };


  const [toggle, setToggle] = useState(false);

  const handleToggle = () => { 
    setToggle(!toggle);
  };


  // useEffect(() => { 
  //   console.log(`toggle : ${toggle}`);
  // }, [toggle]);


  return (
      <>
        {/* <div>
          <h2>{count}</h2>
          <button type="button" onClick={handleCount}>+1</button>
          
          <div>
            <input type="text" onChange={handleInput} value={input}/>
            <p>{input}</p>
          </div>
          

          <button type="button" onClick={handleToggle}>Toggle Hello Component</button>
          { toggle && <Hello name="이현우" /> }


        <hr />

        <TodoInput/>

        </div> */}


        <Todos />

      </>
  );
}

export default App;
