import { useContext, useRef, useState } from "react";
import { useInputs, useInputs02 } from "../../hooks/useInputs";
//import { DispatchContext } from "./Todos";
import { useTodoDispatch, useTodoState } from "../../contexts/todos";


function TodoCreate({/* dispatch */}) {

    // Todos에서 만든 컨텍스트를 가져온다
    //const dispatch =  useContext(TodoStateContext);
    const dispatch = useTodoDispatch();

    // id의 초기값 관리
    const nextId = useRef(4);

    // input 태그 상태 관리
    const inputRef = useRef();

    //const [inputs, inputDispatch] = useInputs({text : "",});
    const [inputs, onChange, reset] = useInputs02({
        text: ""
    });



    const onCreate = () => { 

        dispatch({type:"CREATE_TODO", id:nextId.current, text:inputs.text});

        nextId.current += 1;

        // 초기화
        //inputDispatch({type:"CHANGE_INPUT", name : "text", value:""});
        reset();

        // inputRef로 포커스 이동
        inputRef.current.focus();
    }

    const handleInput = (e) => { 
        const {name, value} = e.target;
        //inputDispatch({type:"CHANGE_INPUT", name, value});
    }



    return (
        <form onSubmit={(e) => {
            // 폼을 이용하면 버튼을 클릭안하고 엔터키를 눌러도 전송이 됨

            // 서브밋의 기본 동작을 중단
            e.preventDefault();

            // onCreate 함수 호출
            onCreate();
        }}>
            <input type="text" name="text" 
                /* onChange={handleInput}  */
                onChange={onChange}
                value={inputs.text} ref={inputRef}/>
            <button>등록</button>
        </form>
        
    );

}

export default TodoCreate;