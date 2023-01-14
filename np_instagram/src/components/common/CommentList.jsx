import { useCallback, useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { client } from "../..";
import { deleteComments, getComments, getCurrentUser, postComments, postComments2 } from "../../api/admin";
import { useUserId, useUserIdDispatch } from "../../data/auth";
import { Input } from "./input";

function CommentList({postId}) {


    const [page, setPage] = useState(1);
    //const [content, setContent] = useState("");
    const [input, setInputs] = useState("");
    const [commnetList, setCommentList] = useState([]);
    const [isLast, setIsLast] = useState(false);





    const currnetUserId = useUserId();


    const handleInput = (e) => {
        setInputs(e.target.value);
    }



    useEffect(() => { 

        postCommentMuation.mutate(postId, page)

        /* 
        getComments(postId, page).then((data) => {             
            if(data.length < 10) {
                setIsLast(true);
            }
            setCommentList([...commnetList, ...data])
        }); */

    }, [page, postId]);

    /* 
    const handleSubmit = () => {
        if(input === "") {
            alert("댓글을 입력해주세요");
            return;            
        } 
        //postComments(postId, input).then((res) => console.log(res));


        getData()
    }; */




    const handleSubmit2 = () => {
        postComments2({postId, content:input}).then((res) => console.log(res));
    };

/* 
    const handleDelete = async (commentId) => { 
        if(!window.confirm("삭제하시겠습니까?")) {
            return;
        }

        await deleteComments(commentId);
    }
 */


    const getData = useCallback(() => { 
        getComments(postId, page).then((data) => setCommentList(data));
    }, [postId, page]);


    const handlePage = () => { 
        setPage(page + 1);
    }


    
    const postCommentMuation = useMutation(postComments, {

        onSuccess : (data) => { 
            console.log("onSuccess");
            console.log(data);
            client.fetchQuery("comments");

        }
    });


    const handleSubmit = () => {
        postCommentMuation.mutate({postId, content:input});
    };
    

    const {data, isLoading, error} = useQuery("comments", () => getComments(postId, page), { 
        onSuccess : (data) => {
            console.log("getComments");
            console.log(data);
            
            setCommentList(data)
        }
    });



    
    const deleteMuation = useMutation(deleteComments, {

        onSuccess : (data) => { 
            console.log("onSuccess");
            client.fetchQuery("comments");

        }
    });



    const handleDelete = async (commentId) => { 
        deleteMuation.mutate(commentId);
        /* if(!window.confirm("삭제하시겠습니까?")) {
            return;
        }

        await deleteComments(commentId); */
    }

    

    if(isLoading) return <div>로딩중</div>    
    console.log("commnetList : " + commnetList);

    return (
        <Container>


            {commnetList.map((comment) => (

                <CommnetItem key={comment.id}>
                    {comment.content}

                    
                    <span>{currnetUserId.id}, {comment.author.id }</span>
                    {currnetUserId.id === comment.author.id && 
                        <BtnDelete onClick={() => handleDelete(comment.id)}>삭제</BtnDelete> }
                    
                </CommnetItem>

            ))}

            {!isLast && <BtnMore onClick={handlePage/* () => setPage(page + 1) */}>더보기</BtnMore>}


            <InputBox>
                <InputComment placeholder="댓글을 입력해주세요" value={input} onChange={handleInput}/>

                <BtnSubmit onClick={handleSubmit}>입력</BtnSubmit>
            </InputBox>
            
        </Container>
    );

}




const Container = styled.div`
    padding:10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;


const InputBox = styled.div`
    width:100%;
    display: flex;
`;

const InputComment = styled.input`
    //width:calc(100% - 100px - 20px); 
    flex:1;
    padding:5px;
    border:none;
    border-bottom:1px solid #eee;
    outline: none;
    font-size:0.8rem;
`;

const BtnSubmit = styled.div`
    font-size:0.8rem;
    font-weight: 700;
    padding:5px 10px;
    margin-left:20px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    text-align: center;
    color:#fff;
    cursor: pointer;
    user-select: none;
`;


const CommnetItem = styled.li`
    width:100%;
    display: flex;
    justify-content: space-between;

    padding:5px 0;



`;

const BtnDelete = styled(BtnSubmit)`
    background-color: rgba(0, 0, 0, 0, 0.2);
    &:hover {
        background-color:red;
    }
`;



const BtnMore = styled.div`
  width:60px;
  padding:5px;

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color:#fff;
  font-size:0.8rem;
  font-weight: bold;
  text-align: center;
    user-select: none;
    cursor: pointer;
`;
  
  

export default CommentList;