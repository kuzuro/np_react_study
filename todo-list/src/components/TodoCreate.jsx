import { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useTodoDispatch } from "../contexts/todos";
import { useInputs } from "../hooks/useInputs";

function TodoCreate() {


    const dispatch = useTodoDispatch();

    const [inputs, onChange, reset] = useInputs({
        text : "",
    });


    const [edit, setEdit] = useState(false);

    // 비구조 할당으로 text만 추출
    const {text} = inputs;


    console.log(edit)
    
    const inputRef = useRef();
    const nextId = useRef(4);

    const handleSubmit = (e) => { 

        if(!edit) {
            setEdit(true);
            return false;
        }


        if(text === "") { 
            return false;
        }

        dispatch({
            type : "CREATE",
            id : nextId.current,
            text : text,
        });

        nextId.current += 1;
        
        setEdit(false);
        reset();
        inputRef.current.focus();
    }


    function onSubmit(e) {
        e.preventDefault();
        //dispatch({type:"CREATE", });
    }

    console.log(inputs)

    return (
        <CreateBlock edit={edit}>
            {/* <form onSubmit={onSubmit}> */}
                    
                <InputBox edit={edit}>
                {/* {edit && <input type="text" name="text" onChange={onChange} value={text} ref={inputRef}/> } */}
                    <input type="text" name="text" onChange={onChange} value={text} ref={inputRef}/>
                </InputBox>

                <BtnSubmit onClick={handleSubmit} active={text.length > 0} edit={edit} >
                    {edit ? "등록" : "추가"}
                </BtnSubmit>
            {/* </form> */}
        </CreateBlock>
    );

}

const CreateBlock = styled.div`
    padding:15px;
    border-top:1px solid #cccccc;
    
`;

const InputBox = styled.div`
    max-height:0;
    padding:0;
    border:none;
    overflow:hidden;
    
    ${({edit}) => edit && css`
        max-height:30px;
        padding:5px;
        border:1px solid #dddddd;
        border-radius: 5px 5px 0 0;
    `}

    input {
        width:100%;
        max-height:30px;
        border:none;
        outline: none;
    }


`;


const BtnSubmit = styled.button`
    width:100%;
    height:30px;
    border:1px solid #dddddd;
    outline: none;

    //background:#0055ff;
    //background:${({active}) => active ? "#0055ff" : "#cccccc" };
    //color:#ffffff;

    background:${({theme}) => theme.colors.disabled};//#cccccc;
    color:#333333;
    border-radius: 0 0 5px 5px;

    ${({active, theme}) => active && css`
        border:1px solid #0055ff;
        background:${theme.colors.main};//#0055ff;
        color:#ffffff;
        cursor: pointer;

        
        &:hover {
            background:${theme.colors.hover};
            border-color:${theme.colors.hover};
        }

        &:active {             
            background:${theme.colors.active};
            border-color:${theme.colors.active};
        }
    `}

    ${({edit, theme}) => !edit && css`
        
        border:1px solid ${theme.colors.main};
        background:${theme.colors.main};//#0055ff;
        color:#ffffff;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
            background:${theme.colors.hover};
            border-color:${theme.colors.hover};
        }

        &:active {
            background:${theme.colors.active};
            border-color:${theme.colors.active};
        }
    `}

`;


export default TodoCreate;