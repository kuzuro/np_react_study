import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

function Section() {

    const [idx, setIdx] = useState(0);
    const [isScroll, setIsScroll] = useState(false);


    useEffect(() => {

        window.scrollTo({top : idx * window.innerHeight, behavior : "smooth"})


        const handleIdx = function(e) {
            e.preventDefault();

            if(isScroll) { return false; }
            //if(e.deltaY < 0 && idx === 0) { return false; }
            //if(e.deltaY > 0 && idx === 3) { return false; }



            setIsScroll(true);

            setTimeout(() => {            
                setIsScroll(false);
            }, 500);
            
            
            if(e.deltaY > 0) {  
                if(idx === 3) {
                    setIdx(0);
                    return false;
                }   

                setIdx(idx + 1);
            } else {
                  
                if(idx === 0) {
                    
                    setIdx(3);
                    return false;
                }

                setIdx(idx - 1);
            }

        }
        window.addEventListener("wheel", handleIdx, {passive : false});

        return () => window.removeEventListener("wheel", handleIdx, {passive : false});  // 뒷정리

    }, [idx, isScroll]);   // 빈배열을 넣으면, 처음 마운트 될때만 실행된다.

    console.log(idx)

    return (
        <>
            <div>
                <SectionBlock bgColor={"red"}>1</SectionBlock>
                <SectionBlock bgColor={"yellow"}>2</SectionBlock>
                <SectionBlock bgColor={"blue"}>3</SectionBlock>
                <SectionBlock bgColor={"lightgreen"}>4</SectionBlock>
            </div>

            <DotBlock  idx={idx}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </DotBlock>
            
        </>
    );

}

const SectionBlock = styled.div`
    width:100vw;
    height:100vh;
    background:${({bgColor}) => bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color:#ffffff;
    font-size:5rem;
    font-weight: bold;
`;

const DotBlock = styled.div`
    position:fixed;
    top:50%;
    left:20px;
    color:#333333;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width:30px;
        height:30px;
        background:#ffffff;
        margin-bottom:10px;
        border-radius:50%;

        :nth-child(${({idx}) => idx+1}) {
            background:#333333;
            color:#ffffff;
        }
    }

    
`;

export default Section;