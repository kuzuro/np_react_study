import SignIn from "./components/pages/SignIn";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Edit from "./components/pages/Edit";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Container>
      <Wrapper>
        <Routes>

          <Route path="/*" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            {/* <Route path="edit/:id" element={<Edit />} /> */}
            <Route path="edit">
              <Route path="" element={<Edit />} />
              <Route path=":id" element={<Edit />} />



            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;

  justify-content: center;
  background-color: #eee;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width:450px;
  background-color: #fff;
  overflow: auto ;
`;

export default App;
