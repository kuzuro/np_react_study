import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";
import { TodoProvide } from "../contexts/todos";

function Todos() {

    return (

        <TodoProvide>

            <TodosBlock>

                <TodoHeader/>

                <TodoBody />

                <TodoCreate />
                
            </TodosBlock>
            
        </TodoProvide>
    );

}


const TodosBlock = styled.div`
    width:300px;
    height:700px;
    background:#ffffff;
    border:1px solid #cccccc;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    /* 상단 TodoHeader, 하단 TodoCreate, 나머진 TodoBody로 채우기 위해 flex 사용 */
    display:flex;
    flex-direction:column;
`;

export default Todos;