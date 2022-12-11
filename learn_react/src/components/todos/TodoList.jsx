import React from "react"

function TodoList({todos, onRemove, onToggle}) {


    // 리스트를 관리할 컴포넌트 (삭제, 토글)

    console.log("TodoList 렌더링");




    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </ul>

    );

    /* <li key={todo.id}>
        {todo.text}
        <button type="button" onClick={() => onRemove(todo.id)}>삭제</button>
    </li> */


}



// jsx 에 1개 이상의 컴포넌트를 만들 수 있음
function TodoItem({todo, onRemove, onToggle}) {

    //console.log("TodoItem 렌더링");

    // 스프레드 연산자를 이용해 변수에 값 할당
    const {text, id, done} = todo;    


    // 리무브 핸들러
    const handleRemove = (e) => { 

        // 부모 태그 li의 이벤트 차단
        //e.stopPropagation();
        // span에 이벤트를 걸어서 안써도 됨

        // 컨펌
        if(window.confirm("삭제하시겠습니까?")) {
            onRemove(id);
        }   
    }

    // 토글 핸들러
    const handleToggle = () => { 

        // Todos.jsx의 onToggle 함수 호출
        onToggle(id);
    }


    return (
        <li style={{textDecoration : done && "line-through"}}>
            <span onClick={handleToggle}>{text}</span>
            <button type="button" onClick={handleRemove}>삭제</button>
        </li>
    );

}



export default React.memo(TodoList);