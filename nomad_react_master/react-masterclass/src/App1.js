import styled from "styled-components";

const Father = styled.div`
  display:flex;
`;

const Box = styled.div`
  background-color: ${(props)=>props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box의 모든 속성을 들고 온 다음 추가적으로 border-radius : 50px; 이것을 더해줌
const Circle = styled(Box)`    
  border-radius : 50px;
`

function App() {
  return (
    <Father>
      <Box bgColor="teal"/>
      <Circle bgColor="tomato"/>
    </Father>
  );
}

export default App;
