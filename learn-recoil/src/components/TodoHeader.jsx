import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import { doneCount, todosState, totlaCount } from "../state/todos";
import { getDoneCount, getDoneCount2, getPercentage, getTotalCount } from "../state/totos_redux";

function TodoHeader() {

    //const todos = useRecoilValue(todosState);

    //const doneCnt = todos.filter(todo => todo.done).length;


    /* const totalCnt = useRecoilValue(totlaCount);
    const doneCnt = useRecoilValue(doneCount); */

    const totalCnt = useSelector((state) => state.todos.length);    
    const doneCnt = useSelector((state) => state.todos.filter(todo => todo.done).length);


    const totalCnt2 = useSelector(getTotalCount);
    const doneCnt2 = useSelector(getDoneCount2);
    const percent = useSelector(getPercentage);

    return (
        <>
            <h1>Todo List</h1>

            <p>
                날짜 : 오늘
            </p>
            <p>
                할일 : {doneCnt2}/{totalCnt2} ({percent}%)
            </p>
        </>
    );

}

export default TodoHeader;