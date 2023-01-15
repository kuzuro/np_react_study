import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";
import { crateTodoAction, create, CREATE, createTodo, todoCreate } from "../state/totos_redux";

function TodoInput() {

    const [text, setInput] = useState(""); 
    //const setTodos = useSetRecoilState(todosState);

    const dispatch = useDispatch();


    const nextId = useRef(3);


    const handleCreate = () => {         
        //setTodos((todos) => [...todos, {id: todos.length+1, text, done: false}]);

       /*  dispatch({
                type : CREATE, 
                id : nextId.current, 
                text : text
            }); */
        //dispatch(createTodo(nextId.current, text));

        //dispatch(crateTodoAction({id : nextId.current, text : text}))

        dispatch(todoCreate({id : nextId.current, text : text}))
        
        nextId.current += 1;
    }

    return (
        <>
            <input type="text" onChange={(e) => setInput(e.target.value)} valye={text}/>
            <button type="button" onClick={handleCreate}>등록</button>
        </>
    );

}

export default TodoInput;