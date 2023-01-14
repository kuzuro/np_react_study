import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllPost, getCurrentUser, getPosts } from "../../api/admin";
import { useUserId, useUserIdDispatch } from "../../data/auth";
import Post from "../home/Post";

function Home() {

  const [postList, setPostList] = useState([]);

  
  const {data, isLoading } = useQuery("posts", () => getPosts(page), {
    onSuccess : (data) => {      
      //console.log("success");
      //console.log(data);
    },
    onError : (err) => { 
      alert(err.response.data.message);
    }


  });


  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState(false);




  const dispatch = useUserIdDispatch();


  
  useEffect(() => { 
    const fetchData = async () => {
      
    }
  }, []);


  useEffect(() => { 
     getCurrentUser().then(user => dispatch(user));

  }, []);


  //const userId = useUserId();
  //console.log(userId)

  /*u eEffect(() => { 
    const user = getCurrentUser();
    console.log(user)

  }, []);
 */

  useEffect(() => {

    //getAllPost();
    //getPosts().then((res) => console.log(res) );
    //getPosts().then((res) => setPostList(res));
    getPosts(page).then((data) => {

      if(data.length < 10) {
        setIsLast(true);
      }

      setPostList((postList) => [...postList, ...data]);
    });
    
  }, [page]);

/* 
  const getData = () => { 
    getPosts(page + 1).then((res) => setPostList([...postList, ...res]));
    setPage(page + 1);
  } */


  if(isLoading) {
    return (
      <div>로딩중</div>
    );
  }

  return (
    <Container>
      {/* {postList.map((post) => ( */}
      {data.map((post) => (
        
        <Post key={post.id} post={post}></Post>
      ))}

        
        {!isLast && <BtnMore onClick={() => setPage(page + 1)}>더보기</BtnMore>}

    </Container>
  
  );
}

const Container = styled.div`
  width:250px;
  flex:1;

  display: flex;
  flex-direction: column;
  align-items: center;

`;


const BtnMore = styled.div`
  width:100px;
  padding:10px;

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color:#fff;
  font-weight: bold;
  text-align: center;

  
  
`;


export default Home;
