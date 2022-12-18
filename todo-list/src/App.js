import styled from "styled-components";
import Todos from "./components/Todos";

/* 전역 스타일 생성 */
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height:100%;
  }

  body {
    margin:0;
    padding:0;
  }

  #root {
    height:100%;
  }

  p {
    margin:0;
  }

  ul {
    list-style: none;
    margin:0;
    padding:0;
  }

  li {
  }

  a {
    text-decoration:none;
    color:inherit
  }

`;


function App() {
  return (

    <ThemeProvider theme={{
      colors : {
        main : "#0055ff",
        disabled : "#dddddd",
        hover : lighten(0.05, "#0055ff"),
        active : darken(0.05, "#0055ff"),

      }
    }}>
      <Block>

        {/* 전역 스타일 */}
        <GlobalStyle />

        <Todos />
      </Block>
    </ThemeProvider>
  );
}


const Block = styled.div`
  width:100%;
  height:100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background:#f2f2f2;
`;




export default App;
