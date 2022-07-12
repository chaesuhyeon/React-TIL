import { useState, useEffect } from "react";

function Hello(){
  // function byeFn(){
  //   console.log("bye :(");
  // }

  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn;
  // }

//   useEffect(hiFn, [])
//   return <h1>Hello</h1>;

  useEffect(()=>{
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return ( 
  <div>
    {showing ? <Hello/> : null} {/* 자바 스크립트 쓸 때는 중괄호 { }  사용*/}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
  
  );
}

export default App;
