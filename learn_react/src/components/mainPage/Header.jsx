import { useContext } from "react";
import { DarkModeContext } from "./Main";

function Header(/* {darkMode} */{children}) {

    console.log(children)

    // useContext(DarkModeContext를 사용하면, Main.jsx에서 감싸준 DarkModeContext의 값을 가져올 수 있다.
    const darkMode = useContext(DarkModeContext);


    return (
        <header style={{
                textAlign:"center", 
                borderBottom:"1px solid ",
                borderColor:darkMode ? "white" : "black",

                //backgroundColor: darkMode ? "#000000" : "#dddddd",
                //color : darkMode ? "#ffffff" : "#000000",

                // 축약형을 사용해서 표현
                backgroundColor: darkMode ? "#000000" : "#dddddd",
                color : darkMode && "#ffffff",//"#000000",

                padding:20,  // 숫자만 넣는 경우, 자동으로 px로 인식
                }}
        >

            <h1 style={{
                margin:0,
            }}>
                Hello React!
            </h1>

            {/* {children} */}
        </header>
    );

}



export default Header;