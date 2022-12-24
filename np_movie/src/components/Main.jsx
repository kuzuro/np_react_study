import { Route, Routes, Outlet } from "react-router-dom";


function Main() {

    return (
        <>
            <h1>Main</h1>
            <p>
                메인 페이지 입니다.
            </p>

            {/* 출력 위치 제어(컨택스트에서 childe와 유사) */}
            <Outlet />


            {/* 중첩 라우팅 */}
          {/*   <Routes>
                <Route path="/1" element={<button>1</button>}/>
                <Route path="/2" element={<button>2</button>}/>
            </Routes> */}
        </>
    );

}

export default Main;