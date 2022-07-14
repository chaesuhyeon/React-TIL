import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display : flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  } 
  
  50% {
    border-radius:100px;
  }

  100% {
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  animation:${animation} 1s linear infinite;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji}:hover {
    font-size:98px;
    }

  
`;


function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
