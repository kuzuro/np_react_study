

import { useState } from "react";



function TodoInput({handleSubmit}) {  // 인수로 handleSubmit 함수를 받아옴. 인수로 받아올때 중괄호 확인
    
    // 초기 데이터
    const [inputs, setInputs] = useState({
        text : "",
        date : ""
    });

    // 데이터 입력
    const handleInput = (e) => {        
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value            
        });
    };

    
    
    return (
        <div>
            <input type="text" onChange={handleInput} value={inputs.text} name="text" />
            <input type="text" onChange={handleInput} value={inputs.date} name="date"/> 

            {/* 인수로 받아온 handleSubmit 호출 */}
            <button type="button" onClick={() => handleSubmit(inputs)}>등록</button>           
        </div>
    );
}


export default TodoInput;