import styled from "styled-components";
import { Link } from "react-router-dom";

function MovieItem({movie}) {


    const { id, title, release_date, poster_path } = movie;
    const img_url = "https://image.tmdb.org/t/p/w200" + poster_path;

    return (
        <Container>
            <Link to={"/movie/" + id}>
                <ImgBox>
                    <img src={img_url} alt=""/>
                </ImgBox>
            </Link>
            
            <MovieTitle>
                {title}
            </MovieTitle>

            <ReleseDate>
                {release_date}
            </ReleseDate>
        </Container>
    );

}

const Container = styled.li`
    & + & {
        margin-left:20px;
    }
`;

const ImgBox = styled.div`
    width:150px;
    height:225px;
    background:tomato;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    img {
        width:120%;
    }
`;


const MovieTitle =  styled.h3`
    font-size:1rem; 
    margin-top:5px;
`;

const ReleseDate = styled.span`
    font-size:0.8rem;
    color:#bbb;    
    margin-top:5px;
`;

export default MovieItem;