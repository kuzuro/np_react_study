import { useContext } from "react";
import { useInputs } from "../../hooks/useInputs";
//import { DispatchContext, TodoStateContext } from "./Todos";
import { DispatchContext, useTodoDispatch } from "../../contexts/todos";
import styled, {css, createGlobalStyle, keyframes} from "styled-components";



function TodoItem({todo/*, dispatch */}) {

    // Todos에서 만든 컨텍스트를 가져온다    
    //const todo = useContext(TodoStateContext);
    //const dispatch = useContext(DispatchContext);
    const dispatch = useTodoDispatch();
    
    
    const { id, text, done } = todo;

    

    // 별도의 로직이 필요하다면 함수로 빼서 쓰면 되고
    // 별도의 로직이 없거나 그럴 필요가 없다면 인라인에서 익명함수를 사용해도 된다.
    const onToggle = () => { 
        dispatch({type : "TOGGLE_TODO", id});
    }

    
    const onRemove = () => { 
        if(window.confirm("삭제하시겠습니까?")) {
            dispatch({type : "REMOVE_TODO", id});
        }
    }


    return (

        <Li done={done}>
            
        {/* <Li style={{textDecoration : done ? "line-through" : "none"}}> */}

            {/* 함수 호출 없이 곧바로 dispatch를 호출 */}
            <span onClick={() => dispatch({type : "TOGGLE_TODO", id})}>{text}</span> - 

            {/* 확인 로직이 필요하므로 함수를 호출 */}
            <Btn type="button" onClick={onRemove}>삭제</Btn>
        </Li>
        
    );
}


const Li = styled.li`

    //text-decoration : ${(props) => props.done ? "line-through" : "none"};
    ${
        (props) => props.done && css`
            text-decoration : line-through;
            color:#dddddd;
        `
    };

    margin:5px 0;
    font-size:12px;

    &::before { 
        content : "- ";
    }
`;


const Btn = styled.button`
    margin-left:5px;
    
`;


export default TodoItem;