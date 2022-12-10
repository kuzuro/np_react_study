//import React from "react";
//import logo from './logo.svg';
import './App.css';

import Hello from "./components/Hello";

function App() {

  const name = "이현우";

  const s = {
    color : "red",
    fontWeight : "bold",
  }

  return (
  
  
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */


    // 여기는 HTML이 아니라 자바스크립트인 JSX
    /* 
    <div>
      <h1>Hello React</h1>
    </div>

    React.createElement("div", null, /React.createElement("h1", null, "Hello React"));
    // 동일한 코드
     */
    

    /* 
      JSX는 하나의 태그로 감싸야한다
      
      <div>
        <div>1</div>
      </div>

      //<div></div>
    */

      
    /* 
      프래그먼트를 이용해 하나로 묶을 수 있다.
      <>
        <div>
          <div>1</div>
        </div>

        <div></div>
      </>
    */


      /* 
        닫는 태그를 생략할때는 셀프 클로징 태그를 사용
      */
    
      <>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />

        <input />


        <p style={{color : "green", fontSize : "30px"}} className="a">
          안녕하세요, {name}          
        </p>

        <p style={s}>
          커피
        </p>
      </>

      // 중괄호 안에 변수를 넣으면 값이 변환

      // 인라인 스타일은 객체 형태로 넣어야함
      // 객체이므로 변수로 제어 가능
      // 이때 여러단어로 이루어진 속성은 카멜케이스 사용

      // 클래스를 class로 넣으면 에러가 날 수 있음. className 사용


      // 컴포넌트는 대괄호로 시작

  );
}

export default App;
