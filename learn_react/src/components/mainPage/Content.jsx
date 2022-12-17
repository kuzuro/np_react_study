import { useContext } from "react";
import { DarkModeContext } from "./Main";
import { SetDarkModeContext } from "./Main";


function Content(/*{ darkMode, onChangeMode}*/ ) {

    const darkMode = useContext(DarkModeContext);
    const onChangeMode = useContext(SetDarkModeContext);


    return (
        <div
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flex:"1",
                backgroundColor: darkMode && "#000000",// : "#dddddd",
                color : darkMode && "#ffffff",//"#000000",
            }}
        >
            메인 컨텐츠입니다.

            <button onClick={onChangeMode}>
                모드 변경
            </button>
        </div>
    );

}



export default Content;