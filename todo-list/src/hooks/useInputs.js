import { useState } from "react";


export function useInputs(initialState) {

    // 상태
    const [inputs, setInputs] = useState(initialState);


    // 변경시
    const onChange = (e) => { 
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value,
        });
    }

    // 초기화
    const reset = () => setInputs(initialState);


    return [inputs, onChange, reset];
}