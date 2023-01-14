import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";

function TodoInput() {

    const [text, setInput] = useState(""); 

    const setTodos = useSetRecoilState(todosState);



    const handleCreate = () => { 
        
        setTodos((todos) => [...todos, {id: todos.length+1, text, done: false}]);
    }

    return (
        <>
            <input type="text" onChange={(e) => setInput(e.target.value)} valye={text}/>
            <button type="button" onClick={handleCreate}>등록</button>
        </>
    );

}

export default TodoInput;