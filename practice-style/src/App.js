import Slider from "./components/Slider";
import { createGlobalStyle } from "styled-components";
import Section from "./components/Section";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }

  li {
    list-style: none;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle/>
      {/* <Slider /> */}
        <Section />
    </>
  );
}

export default App;
