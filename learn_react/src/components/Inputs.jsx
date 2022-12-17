import { useReducer } from "react";

import { useInputs } from "../hooks/useInputs";

const initialState = {
    /* inputs : {
        email : "",
        name : ""
    },
    count : 0
 */
    email : "",
    name : "",
    title:""
}


//#region 주석처리
// 리듀서 함수 : 액션의 값에 따라 상태를 관리하는 함수
/* 
function reducer(state, action) { 

    // state : 최신 상태
    // action : 액션 객체

    switch(action.type) { 

        case "CHANGE_INPUT": 

            return {
                ...state, 
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value

                }
                ,
            }

        case "COUNT" :
            return {
                ...state, 
                //...state.inputs,
                count : state.count + 1
                ,
            }

        default :
            return {...state};

    }
}
*/
//#endregion

// 커스텀훅을 만들어서 분리했다. hook/useInputs.js



function Inputs() {

    // useReducer(리듀서 함수, 초기값) : 상태값과 디스패치 함수 반환
    // 디스패치란 액션을 발생시키는 함수
    const [state, dispatch] = useInputs(initialState);//useReducer(reducer, initialState);
    const {name, email, title} = state;
    //const {inputs, count} = state;
    //const {name, email} = inputs;  // 비구조할당을 통해 inputs 객체의 name, email 를 깔끔하게 사용

    console.log(state)

    const handleInputs = (e) => { 
        const {name, value} = e.target;
        dispatch({type: "CHANGE_INPUT", name, value});
    }

    /* const handleCount = () => { 
        dispatch({type: "COUNT", count:count+1});
    } */



    return (
        <div>
            <p>입력값 : {name} ({email}) - {title}</p>
            <input type="text" onChange={handleInputs} name="name"/>
            <input type="text" onChange={handleInputs} name="email"/>
            <input type="text" onChange={handleInputs} name="title"/>
{/* 
            <div>
                <p>{count}</p>
                <button type="button" onClick={() => dispatch({type: "COUNT"})}>+1</button>
            </div> */}
            {/* 매개인자가 없는 사항은 함수를 따로 만들지 않고, 바로 호출해서 쓸 수 있다. */}
                
        </div>

    );

}


export default Inputs;