import styled, { css } from "styled-components";
import { AiOutlineCheck, AiFillDelete, AiOutlineDelete } from "react-icons/ai";


import { useTodoDispatch } from "../contexts/todos";
import { useState } from "react";






function TodoItem({todo}) {

    const [disapper, setDisapper] = useState(false);

    const dispatch = useTodoDispatch();

    const handleRemove = () => { 
        setDisapper(true);

        setTimeout(() => 
            dispatch({type : "DELETE", id : id})
        , 400);        
    }


    const {id, text, done} = todo;

    return (
        <ItemBlock done={done} disapper={disapper}>
            {/* <div onClick={() => dispatch({type : "TOGGLE", id : id})}>{icon}</div> */}
            <CheckCircle done={done} onClick={() => dispatch({type : "TOGGLE", id : id})}>
                {<AiOutlineCheck size={15}/>}
            </CheckCircle>

            <p>{text}</p>

            {/* {<AiFillDelete size={20} onClick={() => dispatch({type : "DELETE", id : id})}/>} */}
            {/* <DeleteIcon  onClick={() => dispatch({type : "DELETE", id : id})}/> */}
            <DeleteIcon  onClick={handleRemove}/>
        </ItemBlock>
    );

}

const ItemBlock = styled.li`
    padding:10px;
    border-bottom:1px solid #eeeeee;
    font-size:14px;
    display: flex;
    
    div {
        display: flex;
        align-items: center;
        margin-right:5px;
    }

    p {
        flex:1;
    }


    transition: transform 0.4s;
    ${({disapper}) => disapper && css`    
        transform: translate(100%);
    `}
`;



const CheckCircle = styled.div`
    width:20px;
    height:20px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border:1px solid #333333;
    border-radius: 50%;

    ${({done}) => done && css`
        background:#0055ff;
        border:1px solid #0055ff;
        color:#ffffff;
    `}
`;
/* 
const DeleteIcon = styled.div`
    width:20px;
    height:20px;
    display: flex;
    align-items: center;

    svg {
        fill: #d0d0d0;
        cursor: pointer;
    }

    &:hover {
        svg {
            fill: #dc3535;;
        }
    }
`; */


const DeleteIcon = styled(AiFillDelete)`
    width:20px;
    height:20px; 
    color: #d0d0d0;
    cursor: pointer;
    
    &:hover {
        color:#dc3535;
    }
`;


export default TodoItem;