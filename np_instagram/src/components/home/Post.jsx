import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserId } from "../../data/auth";
import CommentList from "../common/CommentList";
import PostImageBox from "../common/PostImageBox";
import UserInfo from "../common/UserInfo";

function Post({post}) {

    const {id, author, img_list, content} = post

    const [showComment, setShowComment] = useState(false);

    const userId = useUserId();



    return (
        <Continer>

            <UserInfo user={author} img_list={img_list}/>

            <PostImageBox img_list={img_list} />


            {userId === author.id &&
            <div style={{textAlign:"right", fontSize:"0.5rem", marginTop:"5px"}}>
                <Link to={`/edit/${id}`}>
                    수정하기
                </Link>
            </div>}

            <ContentBox>
                <p>{content}</p>
            
                <BtnComment onClick={() => setShowComment(true)}>댓글 보기</BtnComment>

                {showComment && <CommentList postId={id}/>}

            </ContentBox>
        </Continer>
    );

}


const Continer = styled.div`
    width:100%;
    flex:1;

    & + & {
        border-top:1px solid #eee;
    }
`;

const ContentBox = styled.div`
    padding:5px;
`;

const BtnComment = styled.div`
    font-size:0.8rem;
    margin-top:10px;
    font-weight: 700;

    cursor: pointer;
    user-select:none;
`;


export default Post;
