import { useRecoilValue } from "recoil";
import { doneCount, todosState, totlaCount } from "../state/todos";

function TodoHeader() {

    //const todos = useRecoilValue(todosState);

    //const doneCnt = todos.filter(todo => todo.done).length;


    const totalCnt = useRecoilValue(totlaCount);
    const doneCnt = useRecoilValue(doneCount);

    return (
        <>
            <h1>Todo List</h1>

            <p>
                날짜 : 오늘
            </p>
            <p>
                할일 : {doneCnt}/{totalCnt}
            </p>
        </>
    );

}

export default TodoHeader;