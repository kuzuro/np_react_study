import { useCallback, useDebugValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { searchUser } from "../../api/admin";
import useDebounce from "../../hook/useDebounce";
import useDebunce from "../../hook/useDebounce";
import { Input } from "../common/input";
import UserInfo from "../common/UserInfo";

function Search() {

  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);


  const debounceSearch = useDebounce(input, 300);

  const handleInput = (e) => { 
    setInput(e.target.value);
  }


  
  const fetchUsers = useCallback(async () => { 

    if(input === "") {
      return;
    }

    const data = await searchUser(input);
    setUsers(data.data);
  }, [input]);
 
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
 
 
  useEffect(() => {
    fetchUsers();
  }, [debounceSearch]);

  return (

    <Container>
      <InputBox>
        <Input type="text" placeholder="이름을 입력해주세요." value={input} onChange={handleInput}
          style={{flex:1}}/>

        {/* <button type="button" onClick={fetchUsers}>검색</button> */}
      </InputBox>


      <UserList>

      {
        users.map(user => (
          <UserItem key={user.id}>
            {/* <Link to={`/user/${user.id}`}> */}
              <UserInfo user={user}/>
            {/* </Link> */}
          </UserItem>
        ))
      }  
        
      </UserList>


    </Container>

  );
}

const Container = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
`;


const InputBox = styled.div`
  padding:5px 10px; 
  display:flex; 
`;


const UserList = styled.ul`
  overflow-y:auto;
  flex:1;


`;


const UserItem = styled.li`
  
  cursor: pointer;

  &:hover {
    background:#eee;
  }

`;


export default Search;
