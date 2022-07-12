import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => { setKeyword(event.target.value) };

  useEffect(() => {
    console.log("i run only once");
  } ,[]);

  useEffect(()=> {
    console.log("i run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때 코드를 실행하라고 react.js에 알려줌

  useEffect(()=> {
    console.log("i run when 'counter' changes.");
  }, [counter]); // counter가 변화할 때 코드를 실행하라고 react.js에 알려줌


  useEffect(()=> {
    console.log("i run when 'keyword' && 'counter' changes.");
  }, [counter, keyword]); // keyword와 counter가 변화할 때 코드를 실행하라고 react.js에 알려줌

  return ( 
  <div>
    <input value={keyword} onChange={onChange} type="text" placeholder="Search here .." />      {/* onChange로 변경된 keyword값을 value로 넣어줌 */}
    <h1>{counter}</h1>
    <button onClick={onClick}>click me</button>
  </div>
  
  );
}

export default App;
