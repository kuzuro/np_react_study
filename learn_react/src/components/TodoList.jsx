

function TodoList({todos, onToggle, onRemove}) {  // 인수로 todos, onToggle, onRemove를 받아옴

    return (
        <ul>
            {todos.map((todo) => 
                <li key={todo.id} style={{textDecoration : todo.done && "line-through"}} onClick={() => onToggle(todo.id)}> 
                    {todo.text} ({todo.date}) 
                    <button type="button" onClick={(e) => {
                                e.stopPropagation();
                                onRemove(todo.id)
                            }
                        }>삭제</button>
                </li>
            )}

        </ul>
    );

}

export default TodoList;