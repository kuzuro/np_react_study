import { useState } from "react";
import styled, { css } from "styled-components";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

function Slider() {

    const [idx, setIdx] = useState(0);

    const onClickPrev = () => { 
        if(idx === 0) {
            setIdx(2);
            return false;
        }
        setIdx(idx - 1);       
    }

    const onClickNext = () => { 
        if(idx === 2) {
            setIdx(0);
            return false;
        }
        setIdx(idx + 1);
    }

    const hanldeIdx = (value) => { 

        const currentIdx = idx + value;
        //if(currentIdx < 0 || currentIdx > 2) { return false; }

        if(currentIdx < 0) {
            setIdx(2);
            return false;
        }

        
        if(currentIdx > 2) {
            setIdx(0);
            return false;
        }

        setIdx(idx + value);
    }



    return (
        <Container>
            <Wrapper idx={idx}>
                <Item bgColor={"tomato"}>1</Item>
                <Item bgColor={"yellow"}>2</Item>
                <Item bgColor={"blue"}>3</Item>
            </Wrapper>


            <BtnSlide>  
                {/* <button type="button" onClick={onClickPrev}> */}
                <button type="button" onClick={() => hanldeIdx(-1)}>
                    <FaAngleLeft size={20} />
                </button>
                
                {/* <button type="button" onClick={onClickNext}> */}
                <button type="button" onClick={() => hanldeIdx(+1)}>
                    <FaAngleRight size={20}/>
                </button>
            </BtnSlide>
        </Container>
    );

}


const Container = styled.div`
    width: 100%;
    overflow: hidden;
    border:1px solid #cccccc;
`;

const Wrapper = styled.ul`
    display: flex;
    width:100%;
    height:300px;
    background:#eeeeee;

    transition: 0.5s;

    ${({idx}) => css`
        transform: translate(${idx * -100}%);
    `};

/* 
    li {
        ${({idx}) => css`
            transform: translate(${idx * -100}%);
        `}
    } */
`;

const Item = styled.li`

    display: flex;
    justify-content: center;
    align-items: center;
    font-size:5rem;
    color:#ffffff;

    width: 100%;
    flex-shrink: 0; /* 공간이 부족해도 줄이지 않음 */
    

    ${({bgColor}) => css`
        background: ${bgColor};
    `}
`;


const BtnSlide = styled.div`
    width:100%;
    height:50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border:none;
        outline: none;
        background:none;
        cursor: pointer;
        color:#ffffff;
        padding:5px;
        border:1px solid #cccccc;
        background:#cccccc;
        border-radius: 50%;
    }
`;

export default Slider;