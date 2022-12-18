import styled, { css } from "styled-components";
import { useTodoState } from "../contexts/todos";

function TodoHeader() {

    const date = new Date();
    const dateStr = date.toLocaleDateString('ko-KR', {
        dateStyle : "full"
    });


    // todos를 가져오기 위해 useTodoState를 사용
    const todos = useTodoState();
    const doneCount = todos.filter(todo => todo.done).length;
    const percentage = doneCount === 0 ? 0 :Math.round((doneCount / todos.length) * 100);

    return (
        <Header>
            <p>
                {dateStr}
            </p>
            <span>
                완료 : {doneCount}/{todos.length}
            </span>

            {/* <StatusBar percentage={(doneCount / todos.length) * 100 }> */}
            <StatusBar percentage={percentage}>
                <span>
                    {/* {Math.round((doneCount / todos.length) * 100)}% */}
                    {Math.round(percentage)}%
                </span>
            </StatusBar>

        </Header>
    );

}

const Header = styled.div`
    padding:15px;
    border-bottom:1px solid #cccccc;

    p {
        font-size:1.2rem;
        
        font-weight:bold;
    }

    span {
        font-size:0.8rem;
        color:#999;
    }
`;

const StatusBar = styled.div`
    width:100%;
    height:14px;
    line-height: 14px;
    margin-top:10px;
    border-radius: 5px;
    background:#cccccc;
    text-align: center;
    font-size:0.6rem;
    position:relative;
    
    span {
        width:100%;
        height:100%;
        color:#ffffff;
        position: absolute;
        top:0;
        left:0;
    }   


    &::before {
        content:"";
        display: block;
        
        //width: ${({percentage}) => percentage}%;

        // width를 조절하면 reflow+repain가 발생해서 성능이 떨어짐 
        width:100%; 
        //transform: scaleX(${({percentage}) => percentage / 100});        
        ${({percentage}) => css`transform: scaleX(${percentage / 100});`}

        transform-origin: left;/* 왼쪽으로 */
        height:100%;
        border-radius: 5px;
        background:#0055ff;

        transition: 0.25s;
    }

`;

export default TodoHeader;