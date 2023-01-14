import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostById, getUserById, getUserPost } from "../../api/admin";
import Post from "../home/Post";

function User() {

    const { id } = useParams()
    const [ user, setUser ] = useState({});
    const { name, profile_url } = user;    
    const [ postList, setPostList ] = useState([]);
    
    
    const fetchData = useCallback( async () => { 
        const user = await getUserById(id);
        setUser(user);

        const posts = await getUserPost(id);
        setPostList(posts); 
    }, [id]);

    useEffect(() => { 
        //getUserById(id).then((res) => setUser(res));

        //getUserPost(id).then((res) => setPostList((postList) => [...postList, ...res]));
        fetchData();
    }, [fetchData])




    return (
        <Container>
            <ProfileBox>       
                <ImageBox>
                    <img src={profile_url} alt=""/>
                </ImageBox>         
                <UserName>{name}</UserName>            
            </ProfileBox>

            <PostList>

                {
                    postList.map((post) => (                        
                        <PostItem key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                <img src={post.img_list[0].url} alt=""/>                        
                           </Link>
                        </PostItem>
                    ))
                }

            </PostList> 
        </Container>
    );

}

const Container = styled.div`
    /* flex:1; */
    
    width: 100%;
`;

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    padding:50px 20px;
    border-bottom:1px solid #eee;
`;
const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width:100px;
    height:100px;
    border:2px solid #eee;
    border-radius: 50%;

    overflow: hidden;

    img {
        width: 100%;
    }
`;

const UserName = styled.p`
    font-size:1.2rem;
    font-weight: 700;
    margin-left:20px;
`;


const PostList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const PostItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;

    width: calc(450px / 3);
    height: calc(450px / 3);
    overflow: hidden;
    
    img {
        width:100%;
    }
`;




export default User;