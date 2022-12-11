// 컴포넌트 만들기
// 컴포넌트는 파스칼 케이스 적용
// 컴포넌트의 함수명 = 파일명
// 확장자가 jsx여야 해당 자동완성 기능등을 이용할 수 있음

import { useEffect, useState } from 'react';

//function Hello(props) {
    // props : 컴포넌트의 속성="값"으로 받는 객체   

        
    //console.log(props);
    //return <h1>Hello {props.text}</h1>;


    // 비구조화 할당
    //const { text, active } = props;


function Hello({ text, active, color }) {  // 매개변수에서 바로 비구조화 할당

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
     };


    useEffect(() => {    
        console.log("hello 컴포넌트 렌더링");    
    });

    // 빈배열[] 을 넣으면 컴포넌트가 처음 마운트 될때만 실행됨
    // => setTimeout, setInterval, 데이터 받아오기, 라이브러리 연동등에 사용
    useEffect(() => {    
        console.log("Hello 컴포넌트 마운트");
        const timer = setInterval(() => {
            console.log("1초 경과");
        }, 1000);


        // 언마운트될때 실행됨 => 클린업 함수 clearTimeout, clearInterval, 인스턴스 삭제 등에 사용
        return () => {
            console.log("Hello 컴포넌트  언마운트")
            clearInterval(timer);
        };
    }, []);
    


    
    //return <h1>Hello {text}</h1>;  

    // 단축평가를 이용한 스타일 적용
    // 느낌표"!" 조건부 랜더링
    return (
        
        <>
            <h1 style={{color : active && color }}>
                Hello {text} {active && "!"}
            </h1>

            <input type="text" onChange={handleInput} />
        </>
    );  

}


// 컴포넌트의 기본값 설정
Hello.defaultProps = { 
    text : "react",
    color : "black"
};  


export default Hello;