import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PostImageBox from "./PostImageBox";

function UserInfo({user}) {

    const {id, name, profile_url} = user;
    

    return (
        <Container to={`/user/${id}`}>
            <ImgCircle profile_url={profile_url}/>
            <UserName>{name}</UserName>
        </Container>
    );

}


const Container = styled(Link)`
    display: flex;
    padding:10px;
    overflow: hidden;

`;


const ImgCircle = styled.div`
    width: 30px;
    height: 30px;
    border:2px solid #eee;
    border-radius: 50%;

    ${({profile_url}) => css`
        background: url(${profile_url}) center / cover no-repeat;

        `
    }
`;

const UserName = styled.p`
    font-size:0.8rem;
    color:#333;
    font-weight: 700;
    margin-left:10px;
`;

export default UserInfo;