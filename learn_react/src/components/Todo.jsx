import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import react, { useState, useMemo, useRef } from "react";


function countUndoneTodo(todos) {
    console.log("할일 세는중");
    return todos.filter(todo => !todo.done).length;
}


function Todo() {
    //const undoneTodoCount = useMemo(() => countUndoneTodo(todos), [todos]);// countUndoneTodo(todos);
    //console.log(undoneTodoCount);

   
    const nextId = useRef(2); 


    // 데이터 전송
    const handleSubmit = (inputs) => {
        setTodos([
            ...todos,
            {
                id:nextId.current, 
                text:inputs.text,
                date:inputs.date,
                done : false
            }
        ]);

        nextId.current += 1;
    };

    // 초기 데이터
    const [todos, setTodos] = useState([{
        id : 1,
        text : "투두 리스트 만들기",
        date : "2022/12/11",
        done : true
    }]);

    
    // 데이터 삭제
    const onRemove = (id) => {        
        setTodos(todos.filter(todo => todo.id !== id));       
    };


    // 할일 체크
    const onToggle = (id) => { 
        setTodos(todos.map(todo => {           
            return todo.id === id ? {...todo, done : !todo.done} : todo;
        }));
    };

    const undoneTodoCount = useMemo(() => countUndoneTodo(todos), [todos]);// countUndoneTodo(todos);
    console.log(undoneTodoCount);


    return (
        <>
            {/* Todo.jsx 에서 관리하는 상태를 하위 컴포넌트에게 전달 */}
            <TodoInput handleSubmit={handleSubmit}/>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </>
    );

}

export default Todo;