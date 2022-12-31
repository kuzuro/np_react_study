import styled from "styled-components";
import MovieList from "./MovieList";

function Main() {

    return (
        <>
            <Container>
                <Wrapper>
                    <MovieList title={"What's Popular"} />
                </Wrapper>
            </Container>
        </>
    );

}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding:50px 0;
`;

const Wrapper = styled.ul`
    flex:1;    
    max-width:960px;
    overflow-x: scroll;
`;

export default Main;