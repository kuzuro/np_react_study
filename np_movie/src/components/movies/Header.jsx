import { Link } from "react-router-dom";
import styled from "styled-components";


const gnbList = [
    { 
        id : 1,
        text : "영화",
        url : "/movies"
    },    
    { 
        id : 2,
        text : "TV 프로그램",
        url : "/shows"
    },    
    { 
        id : 3,
        text : "인물",
        url : "/persons"
    }
]

function Header() {

    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Link to={"/"}>
                        영상
                    </Link>
                </Logo>
                <GnbList>
                    {/* <li>
                        <Link>영화</Link>
                    </li> */}
                    {gnbList.map((item) => 
                        <GnbItem key={item.id}>
                            <Link to={item.url}>{item.text}</Link>
                        </GnbItem>
                    )}
                </GnbList>
            </Wrapper>            
        </Container>
    );

}

const Container = styled.header`
   display: flex;
   justify-content: center;
   border-bottom:1px solid #dddddd;
   padding:20px 0;
`;


const Wrapper = styled.div`
    max-width: 960px;
    align-items: center;
    flex:1;
    display: flex;
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    margin-right:30px;
`;

const GnbList = styled.ul`    
    display: flex;

`;

const GnbItem = styled.li`

        & + & {
            margin-left:20px;
        }

        a {
            &:hover {
                font-weight: bold;
            }
        }
`;

export default Header;