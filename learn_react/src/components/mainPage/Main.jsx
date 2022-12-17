import Header from "./Header";
import Content from "./Content";
import {useState, createContext} from "react";



// 컴포넌트 처럼 사용 가능 => 값을 사용하고자하는 컴포넌트에서 useContext의 인자로 전달되어야함
export const DarkModeContext = createContext(null);
export const SetDarkModeContext = createContext(null);
/*
    createContext 의 인자로 전달한 값은 기본값으로 사용된다.
    => Provide로 감싸지 않은 컴포넌트에서 사용할때 들어가는 값
*/


function Main() {

    const [darkMode, setDarkMode] = useState(true);

    const onChangeMode = () => {
        setDarkMode(!darkMode);
    }


    return (

        <DarkModeContext.Provider value={darkMode} >  {/* 이렇게 감싸야 7번 라인 주석처럼 전달 됨 */}
            {/* 2개 이상 중첩 사용해도 상관없다. */}
            <SetDarkModeContext.Provider value={onChangeMode}>
            <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    height:"100vh",
                }}
            >

                {/* 
                    프로바이더(Provider)로 감싸주면, Header, Content에 인자를 넣지 않아도 사용할 수 있다.
                    구조가 복잡해질수록 용이함
                */}

                <Header>
                    <h1>핫하</h1>
                    <p>얄리얄리</p>
                </Header>
                <Content />
                {/* <Content />onChangeMode={onChangeMode}/> */}
            </div>
            </SetDarkModeContext.Provider>
        </DarkModeContext.Provider>


    );

}



export default Main;