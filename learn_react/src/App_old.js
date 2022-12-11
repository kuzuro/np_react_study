//import React from "react";
//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

import Hello from "./components/Hello";

function App() {

  const name = "이현우";

  const s = {
    color : "red",
    fontWeight : "bold",
  }

  return (
    // JSX 
  
    /* 
      npx create-react-app [프로젝트명]

      npx : npm을 통해 설치된 패키지를 실행할 수 있게 해주는 도구
      create-react-app : 리액트 프로젝트를 생성해주는 도구
      [프로젝트명] : 생성할 프로젝트의 이름


      npm start : 개발서버 실행 (package.json의 scripts의 start를 실행)

      npm i : 패키지 설치

     */
  
    /* 기본적인 리액트 코드
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
      프래그먼트<></> 를 이용해 하나로 묶을 수 있다.
      <>
        <div>
          <div>1</div>
        </div>

        <div></div>
      </>
      프래그먼트는 랜더링되지 않기 때문에 불필요한 태그를 만들지 않아도 된다.

      프래그먼트 내부에서 주석은 중괄호{}로 묶어야한다
    */


    
      <>

        <Counter />


        <div style={{display : "none"}}>

          {/* 컴포넌트 불러오기 */} 
          {/* <Hello />
          <Hello />
          <Hello />
          <Hello /> */}


          {/* 
            컴포넌트에 props 전달
            키 : 벨류로로 전달할 수 있다.
          */}
          <Hello text="hyun" active={false}/>

          {/* 속성:값이 없으면 무시된다. */}
          <Hello color="red" active/>

          {/* 조건부 랜더링 */}
          {true && <Hello color="yellow" active/>}

          

          {/* 닫는 태그를 생략할때는 셀프 클로징 태그를 사용 */}
          <input />


          <p style={{color : "blue", fontSize : "30px"}} className="a">
            안녕하세요, {name}          
          </p>

          {/* 객체를 스타일로 사용 */}
          <p style={s}>
            커피
          </p>
        </div>

      </>

      // 중괄호 안에 변수를 넣으면 값이 변환

      // 인라인 스타일은 객체 형태로 넣어야함
      // 객체이므로 변수로 제어 가능
      // 이때 여러단어로 이루어진 속성font-size은 카멜케이스fontSize 사용

      // 클래스를 class로 넣으면 에러가 날 수 있음. className 사용


      

      

  );
}

export default App;
