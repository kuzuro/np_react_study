import { useDispatch } from "react-redux";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";
import { DELETE, deleteTodo, removeTodoACtion, todoDelete, todoToggle, TOGGLE, toggleTodo } from "../state/totos_redux";

function TodoItem({todo}) {

    const { id, text, done } = todo;

    //const [ todos, setTodos ] = useRecoilState(todosState);
    //const setTodos = useSetRecoilState(todosState);

    
    const dispatch = useDispatch();


    const handleDelete = () => { 
        //setTodos((todos) => todos.filter(todo => todo.id !== id));
        
       /*  dispatch({
            type : "DELETE", 
            id : id, 
        }); */

        //dispatch(deleteTodo(id));
        //dispatch(removeTodoACtion(id));
        dispatch(todoDelete({id}));
        
    }
    const handleToggle = () => { 
        //setTodos((todos) => todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
 
       /*  dispatch({
            type : "TOGGLE", 
            id : id, 
        }); */
        console.log(id)
        //dispatch(toggleTodo(id));
        dispatch(todoToggle({id : id}));
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