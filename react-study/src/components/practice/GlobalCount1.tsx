import { useRecoilState } from "recoil";
// import { countState } from "@/global/countState";
import { useCountState } from "@/global/countState";

function GlobalCount1() {
    // global state
    const { count } = useCountState(); // count와 setCount를 useCountState가 넘겨주기 때문에 구조분해 할당으로 필요한 것만 받을 수 있음

    return (
        <>
            <h1>{count}</h1>
        </>
    );
}

export default GlobalCount1;
