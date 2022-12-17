import { useContext } from "react";
import TodoItem from "./TodoItem";
//import  TodoStateContext } from "./Todos";
import {  useTodoState } from "../../contexts/todos";
import styled, {css, createGlobalStyle, keyframes} from "styled-components";




function TodoList({/* todos, dispatch */}) {

    const todos = useTodoState();

    return (
        <Ul>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </Ul>        
    );
}


const Ul = styled.ul`
    list-style: none;
    margin:0;;
    padding:0;
`;

export default TodoList;