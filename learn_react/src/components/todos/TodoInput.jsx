import React, { useRef, useState } from "react";


function TodoInput({onCreate}) {

    // 입력받는 컴포넌트



    console.log("TodoInput 렌더링");  // 상위 컴포넌트가 렌더링되면 하식 컴포넌트도 같이 렌더링됨 (하단에 이어짐)



    // input 변수 상태 관리
    const [input, setInput] = useState("");


    // 입력받을때 마다 input 변수에 데이터 입력
    const handleInput = (e) => { 
        setInput(e.target.value);
    };

    // input 태그 상태 관리
    const inputRef = useRef();


    // 등록 버튼 클릭시 실행
    const handleSubmit = (e) => { 

        //Todos의 onCreate 함수 실행
        onCreate(input);

        // input 변수 데이터 초기화
        setInput("");

        // input 태그에 포커스
        inputRef.current.focus();
    };


    return (
        <div>
            <input type="text" onChange={handleInput} value={input} ref={inputRef} />
            <button type="button" onClick={handleSubmit}>등록</button>
        </div> 

    );


}


// React.memo로 감싸면 전달받는 프로퍼티에 변경사항이 있을 경우에만 렌더링이 발생함
// useCallback을 사용하면 함수 재생성을 방지할 수 있음
export default React.memo(TodoInput);