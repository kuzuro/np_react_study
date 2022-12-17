import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "../../contexts/todos";
import styled, {css, createGlobalStyle, keyframes} from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    button {
        background-color : #ffffff;
        border:1px solid #d0d0d0;
    }
`;

//import "../../index.scss";

// userReducer를 사용하여 상태를 관리 연습




//#region /contexts/todos.js 이동

/*
// 컨텍스트를 이용하여 dispatch를 다룬다
export const TodoStateContext = createContext(null);
export const DispatchContext = createContext(null);

// 초기값
const initialState = [

    {
        id : 1,
        text : "리액트 배우기",
        done : true,
    },
    {
        id : 2,
        text : "투두 리스트 만들기",
        done : false,
    },
    {
        id : 3,
        text : "투두 리스트 꾸미기",
        done : false,
    },
]


function reducer(state, action) {

    switch(action.type) {

        case "CREATE_TODO" :    
            return [
                ...state,
                {
                    id : action.id,
                    text : action.text,
                    done : false
                }
            ]

        case "TOGGLE_TODO" :
            return state.map(todo => todo.id === action.id ? {...todo, done : !todo.done} : todo);

        case "REMOVE_TODO" : 
            return state.filter(todo => todo.id !== action.id);           

        default :
            return state;
    }
}
*/
//#endregion


function Todos() {

    //const [todos, dispatch] = useReducer(reducer, initialState);

    return (

        <>
            <TodoProvider>

                <div className="title">
                    <h1>할일 목록</h1>
                    <TodoCreate /> 
                    <TodoList /> 
                </div>
            </TodoProvider>

        </>
    );

}


const TodoBtn = styled.button`
    background: #fff;
`;


export default Todos;