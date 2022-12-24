import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Main from "./components/Main";

function App() {
  return (
    <>

      {/* 공통 요소는 라우트 밖에 작성 */}
      <Header />


      {/* 라우트의 그룹 */}
      <Routes>


        <Route path="/*" element={<Main />}>
            <Route path="1" element={<button>1</button>}/>
            <Route path="2" element={<button>2</button>}/>
        </Route>

        <Route path="hello/*" element={<Hello />}>
          {/* <Route path=":id" element={<Detail />}/> */}
        </Route>

        <Route path="hello/:userId" element={<Detail />}></Route>


      </Routes>
    </>
  );
}

export default App;
