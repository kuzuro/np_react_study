import { useRecoilState, useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";

function TodoItem({todo}) {

    const { id, text, done } = todo;

    //const [ todos, setTodos ] = useRecoilState(todosState);
    const setTodos = useSetRecoilState(todosState);

    const handleDelete = () => { 
        setTodos((todos) => todos.filter(todo => todo.id !== id));
    }
    const handleToggle = () => { 
        setTodos((todos) => todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
    }

    return (
        <li style={{textDecoration: done && "line-through"}}>
            <span onClick={handleToggle}>
                {text}
            </span> : <button onClick={handleDelete}>삭제</button>           
        </li>
    );

}

export default TodoItem;