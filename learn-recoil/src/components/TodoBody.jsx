import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterdTotosState, filterState, todosState } from "../state/todos";
import TodoItem from "./TodoItem";

function TodoBody() {


    //const [todos, setTodos] = useRecoilState(todosState);
    //const todos = useRecoilValue(todosState);

    const todos = useRecoilValue(filterdTotosState);
    const setFilterState = useSetRecoilState(filterState);
    

    return (
        <>
        <div>
        <label>
                <input type="radio" name="filter" value="all" defaultChecked onChange={(e) => setFilterState(e.target.value)}/>전체
            </label>

            <label>
                <input type="radio" name="filter" value="done" onChange={(e) => setFilterState(e.target.value)}/>한거
            </label>
            
            <label>
                <input type="radio" name="filter" value="undone" onChange={(e) => setFilterState(e.target.value)}/>안한거
            </label>
        </div>
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo} />
                    );
                })
            }
        </ul>
        </>
    );

}

export default TodoBody;