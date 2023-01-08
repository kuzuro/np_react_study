import { useState } from "react";
import styled, { css } from "styled-components";

function PostImageBox({img_list}) {

    const [idx, setIdx] = useState(0);
    const handleIdx = (operand) => {

        if((operand === -1 && idx + operand < 0) || (operand === 1 && idx + operand > img_list.length - 1))
             return;

        setIdx(idx + operand);
    }

    return (
        <Container>
            <BtnSlide onClick={() => handleIdx(-1)}>
                ◀
            </BtnSlide>
            
            <Wrapper idx={idx}>
                {
                    img_list.map((img) => (
                        <PostImg key={img.key} url={img.url} alt="img"/>
                        )
                    )

                }
            </Wrapper>

            <BtnSlide onClick={() => handleIdx(1)}>
                ▶
            </BtnSlide>
        </Container>
    );

}

const Container = styled.div`

    overflow: hidden;
    position: relative;

`;

const Wrapper = styled.ul`
    display: flex;
    height:250px;
    background:#ddd;

    transform: 0.25s ease-in-out;
    ${({idx}) => css`
        transform: translateX(-${idx * 100}%);
    `}

`;


const PostImg = styled.li`
    width:100%;

    flex-shrink: 0;

    ${({url}) => css`
        background: url(${url}) center / cover no-repeat;
    `}
`;



const BtnSlide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color:#fff;
    border-radius: 50%;
    background:rgba(0, 0, 0, 0.4);
    position: absolute;
    top:50%;    
    transform: translateY(-50%);
    z-index: 1;
    &:nth-of-type(1) {
        left:10px;
    }

    &:nth-of-type(2) {
        right:10px;
    }
`;

export default PostImageBox;