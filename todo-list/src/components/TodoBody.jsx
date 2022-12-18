import { useContext } from "react";
import styled from "styled-components";
import { TodoStateContext, useTodoState } from "../contexts/todos";
import TodoItem from "./TodoItem";

function TodoBody() {

    //const todos = useContext(TodoStateContext);
    const todos = useTodoState();

    return (

        <BodyBlock>
            {/* <li>투두 리스트 스타일링 하기</li>
            <li>투두 리스트 기능 구현하기</li>
            <li>투두 리스트 애니메이션 적용하기</li> */}
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </BodyBlock>
    );

}


const BodyBlock = styled.ul`
    flex:1;/* 남은 여백을 전부 가져감 */
    overflow-y:auto;
    overflow-x:hidden;
`;

export default TodoBody;