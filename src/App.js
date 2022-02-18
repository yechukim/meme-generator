
import Header from "./components/Header";
import Meme from "./components/Meme";
import styled from '@emotion/styled/macro'

const Base = styled.div`
  max-width:550px;
  margin:auto;
  background-color:#fff;
  height:100%;
  padding-bottom:50px;
-webkit-box-shadow: 7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(4,149,255,0); 
box-shadow: 7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(4,149,255,0);
`
const Wrapper = styled.div`
  max-width:550px;
  margin: 0 auto;
`
function App() {
  return (
    <Base>
      <Header />
      <Wrapper>
        <Meme />
      </Wrapper>
    </Base>
  );
}

export default App;
