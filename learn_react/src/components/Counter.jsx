// 상태 관리
/* 
    상태값 : 컴포넌트가 가지는 상태값
        => 상태값이 변경되면 컴포넌트가 다시 렌더링됨
*/




import { useState } from "react";  // 상태관리를 위한 훅. use~로 시작하는 함수들을 훅이라고 함


function Counter() {  // Counter는 함수형 컴포넌트

    // useState(초기값) : [상태값, 상태값을 업데이트 함수]

    // 컴포넌트가 새로 랜더링 될 때마다 모든 스코프가 새로 생성되기 때문에
    // let이 아니라 const를 사용해도 상관없음
    const [count, setCount] = useState(0);

    const handleCount = (opNum) => { 

        // 상태값이 음수가 되지 않도록 처리
        if(opNum < 0 && count <= 0) return; 

        setCount(count + opNum);

        /* 
            useState가 비동기적으로 동작하기 때문에 
            상태값을 업데이트하는 함수를 여러번 호출하면
            마지막에 호출한 함수만 동작한다
         */
        setCount(count + opNum);
        setCount(count + opNum);
        // 여러개 있어도 마지막 1개만 실행됨



        // 익명함수를 이용한 업데이트
        // 최신의 상태값을 전달
        // 함수형 업데이트 => useState의 인자로 함수를 전달하면 매개변수에 최신상태값이 담긴다
        setCount((count) => count + opNum);
        setCount((count) => count + opNum);
        setCount((count) => count + opNum);
        // 그래서 3번 다 실행됨
    }

    const handleCount2 = () => { 
        setCount(count + 2);
    }


    console.log("랜더링");  // 상태값이 바뀔때마다 동작한다
    // ㅑㅜ


    return (

        <div>
            <h3>{count}</h3>
            {/* <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button> */}

            {/* 
                값을 넘기는게 아니라 호출한 반환이 생기므로 함수를 호출하는 함수로 작성해야함
                    onClick={handleCount(1)}
                    => onClick={() => handleCount(1)}

                인자가 필요한 경우 익명함수 안에서 호출하도록 작성
            */}
            <button onClick={function() { handleCount(1); }}>+1</button>
            <button onClick={() => handleCount(-1)}>-1</button>

            <hr />

            {/* 
                전달할 인자가 없으면 익명함수를 사용하지 않아도 됨
            */}
            <button onClick={handleCount2}>+2</button>
        </div>

    );

}


export default Counter;
