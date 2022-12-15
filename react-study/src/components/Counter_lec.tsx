import { useState, ChangeEvent } from "react";

/**
 * @desciption Counter 컴포넌트
 */
function Counter() {
    //state
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>("");

    //event
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => {
        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
    };

    // onChange는 required가 아님 !! -> 타입스크립트 적용시 ?붙여서 onChange ?: ChangeEvent 필수값이 아님을 정의하기
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        // console.log(e.target.value);
    };

    //view
    return (
        <>
            <h1>{count}</h1>
            {/* 이벤트 함수에 파라미터를 넣고 싶을 때 onClick={()=> onClick(value)} 형식으로 사용하면 됨 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-3</button>
            <hr />
            <input value={value} onChange={onChange} />{" "}
            {/* input에 숫자를 적더라도 타입은 string임 */}
        </>
    );
}

export default Counter;
