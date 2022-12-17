import { useState } from "react";
import styled, {css, createGlobalStyle, keyframes} from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
`;



function Styled() {


    const [input, setInput] = useState("");


    const [color, setColor] = useState("black");

    return (

        <>
            <Block>
                <GlobalStyle />

                <Title active={false} color={color}>
                    asdasd
                </Title>


                <input type="text" onChange={(e) => setInput(e.target.value)}/>
                <Button type="button" onClick={() => setColor(input)}>변경</Button>
                <BlueButton type="button" onClick={() => setColor(input)}>변경2</BlueButton>
            </Block>


            <Title>테스트</Title>
        </>
        
    );

}



// 스타일드 컴포넌트 사용
const Title = styled.h3`
color : ${(props) => props.color};
    /*
    //color:red;        
    
    //background-color : ${(props) => props.active && "tomato"};

    // css를 임포트하면 인자를 통해 중첩 백틱을 이용해 덮어 쓸 수 있다
    ${
        (active) => active && css`
            color:red;
            background-color : yellow;
            border:3px solid red;
        `            
    }

    
    font-size:1.6rem;
    */
`;


const slideUp = keyframes`
    to {
        transform:translateY(-20px);
    }
`;


const Block = styled.div`
    input {
        border:none;
    }

    // 스타일드 컴포넌트 안에서도 css를 사용할 수 있음
    ${Title} {
        background:green;
    }
`;



// css 안쓰고
// 변수명으로 관리하기 때문에 직관적으로 쓸 수 있음
// 동적인 스타일링에 편리함
// => 스타일드 컴포넌트에서 js를 사용할 수 있으며 인자도 받을 수 있음
// 클래스명은 무작위한 고유값으로 지정됨



const Button = styled.button`
    padding:10px 20px;
    border:none;
    outline:none;
    color:#ffffff;
    background:red;
    border-radius: 5px;
`;


// 상속이 가능하다
const BlueButton = styled(Button)`
    background:blue;

    animation: ${slideUp} 0.4s 3 alternate;


    @media screen and (max-width : 900px) {
        padding:0;
    }
`;




export default Styled;