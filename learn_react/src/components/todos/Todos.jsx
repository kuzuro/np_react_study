import { useCallback, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";






const initialState = [
    {
        id : 1,
        text : "useStat 배우기",
        done : true
    },
    {
        id : 2,
        text : "todo 리스트 만들기",
        done : false
    }

];


function Todos() {
    // 상태 관리를 할 상위 컴포넌트


    // todos 변수 상태 관리
    const [todos, setTodos] = useState(initialState);


    // nextId값 생성 및 초기화, 변수 단독 관리
    const nextId = useRef(3);


    // 데이터 생성
    //const onCreate = (text) => {
    const onCreate = useCallback(
        // useCallback을 사용하면 함수 재생성을 방지할 수 있음
        // 함수형 업데이트를 사용하면 디펜던시를 없앨 수 있다.
        (text) => {  // 

            setTodos((todos) => [
                ...todos,
                {
                    id : nextId.current,
                    text,  // 키 생략 가능
                    done : false
                }
            ]);

            // nextid값 증가
            // useRef로 되어있어서 렌더링에 영향 없음
            nextId.current += 1;
        }, []);


    // 행 삭제
    const onRemove = useCallback((id) => { 
        setTodos((todos) => todos.filter(todo => todo.id !== id));
    }, []);


    // 행 토글
    const onToggle = useCallback((id) => { 
        // Array.map()은 새로운 배열을 반환하므로 상태값이 변경됨
        setTodos((todos) => todos.map(todo => 
            todo.id === id ? {...todo, done : !todo.done} : todo
        ));
    }, []);


    return (
        <>
            <TodoInput onCreate={onCreate} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );


}

export default Todos;