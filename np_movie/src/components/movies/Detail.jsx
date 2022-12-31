import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetail } from "../../api/movies";

function Detail() {

    // 쿼리스트링의 id를 가져온다
    const {id} = useParams();

    // 상태 관리
    const [detail, setDetail] = useState({
        data : null,
        error : null,
        loading : true,
    });    

    // 화면 제어를 위한 변수
    const { data, error, loading } = detail;

    
    // 마운트 될 때 실행
    useEffect(() => {
       getDetail(id).then(res => setDetail({
            data : res,
            error : null,
            loading : false,
       })).catch(error => setDetail({
            data : null,
            error : error,
            loading : false

       }));
    },[id]);

    if(loading) {
        return <div>로딩중</div>
    }

    if(error) { 
        return <div>{error.message}</div>
    }

    if(!data) {
        return <div>영화 정보가 없습니다</div>
    }

    // 로딩, 에러, 데이터 여부를 모두 확인하고 아래 코드를 진행한다.


    // 구조 분해 할당
    const { title, release_date, tagline, overview, poster_path, backdrop_path } = data;

    
    
    // 변수 조정
    const img_url = "https://image.tmdb.org/t/p/w200" + poster_path;
    const bg_url = "https://image.tmdb.org/t/p/w1280" + backdrop_path;

    return (
        <Container>
            <Wrapper bg_url={bg_url}>
                <ImgBox>
                    <img src={img_url} alt="" />
                </ImgBox>

                <DescBox>
                    <Title>
                        {/* {detail.title}
                        <span>({detail.release_date})</span> */}
                        
                        {title}
                        <span>({release_date.substr(0, 4)})</span>
                    </Title>

                    <TagLine>
                        {tagline}                        
                    </TagLine>

                    <strong>개요</strong>

                    <Overview>
                        {overview}
                    </Overview>
                </DescBox>
            </Wrapper>
            
        </Container>
    );

}


const Container = styled.div`
    display: flex;
    justify-content: center;
    
        

    
`;

const Wrapper = styled.div`
    flex:1;
    max-width: 960px;
    padding:50px;
    display: flex;

    color:#fff;
    background-image: url(${({bg_url}) => bg_url});
    background-size: cover;
    background-color:rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
`;

const ImgBox = styled.div`
    width:300px;
    height:450px;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: tomato;

    img {
        width:100%;
        height:100%;
    }
`;

const DescBox = styled.div`
`;


const Title = styled.h2`
    font-size:1.5rem;
    margin-bottom:10px;

    span {
        font-size:1.2rem;
        margin-left:10px;
    }
`;

const TagLine = styled.p`
    margin:10px 0;
    font-size:1rem;
    font-style:italic;
`;

const Overview = styled.p`
    margin-top:10px;
`;

export default Detail;