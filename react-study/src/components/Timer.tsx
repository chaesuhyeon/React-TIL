import React, { useState, useEffect } from "react";

/**
 * @description 타이머 컴포넌트
 */
function Timer() {
    //state
    const [date, setDate] = useState<Date>(new Date());

    //watch
    useEffect(() => {
        //init
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        //clean-up
        return () => {
            clearInterval(timer); // 화면상에서 Timer 컴포넌트가 전환이 될 때 clear 함수 실행
        };
    }, []); // []안에는 useState를 사용한 변수만 값 변화를 감지 (일반 변수는 감지하지 못함)

    return (
        <>
            <h1>{date.toString()}</h1>
        </>
    );
}

export default Timer;
