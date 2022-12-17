import { useReducer, useState } from "react";

// 커스텀 훅. 이건 컴포넌트가 아니라 일반 js파일

/*
const initailSate = {
    counter : 0,
    inputs : {
        name : "",
        email : ""
    }
}
*/

export function useInputs(initailSate) {
    const [state, dispatch] = useReducer(reducer, initailSate);
    return [state, dispatch];
    
    //const [state, setState] = useState(initailSate);
    //return [state, setState];
}

function reducer(state, action) {
    // state : 최신 상태
    // action : 액션 객체

    switch(action.type) { 

        case "CHANGE_INPUT": 

            return {
                ...state, 
               /*  inputs : {
                    ...state.inputs,
                    [action.name] : action.value
                }, */
                [action.name] : action.value
            }

    /*     case "COUNT" :
            return {
                ...state, 
                //...state.inputs,
                count : state.count + 1
            } */

        default :
            return {...state};

    }
}







// 두번째 버전
// 함수 내부에 체인지, 리셋 함수를 만들어서 리턴
export function useInputs02(initailSate) {
    
    const [inputs, setInputs] = useState( initailSate);

    const onChange = (e) => { 
        const {name, value} = e.target;
        setInputs({...useInputs, [name]:value});
    };

    const reset = () => setInputs(initailSate);

    return [inputs, onChange, reset];

}
