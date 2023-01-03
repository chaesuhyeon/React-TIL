import { useRecoilState, useSetRecoilState } from "recoil";
import { useCountState } from "@/global/countState";

import GlobalCount1 from "@/components/practice/GlobalCount1";
import GlobalCount2 from "@/components/practice/GlobalCount2";
import GlobalCount3 from "@/components/practice/GlobalCount3";
import GlobalCount4 from "@/components/practice/GlobalCount4";

/**
 * @description Global Count 컴포넌트
 */
function GlobalCount() {
    // global state
    const { setCount } = useCountState();
    // const [, setCount] = useRecoilState(countState);
    // const setCount = useSetRecoilState(countState);

    // event
    const onPlus = () => setCount((prevValue) => prevValue + 1);
    const onMinus = () => setCount((prevValue) => prevValue - 1);
    return (
        <>
            <h1>Recoil</h1>
            <hr />
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <hr />
            <GlobalCount1 />
            <GlobalCount2 />
            <GlobalCount3 />
            <GlobalCount4 />
        </>
    );
}

export default GlobalCount;
