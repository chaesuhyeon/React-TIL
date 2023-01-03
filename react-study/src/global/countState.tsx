import { atom, useRecoilState } from "recoil";

type Count = number;

// const countState = atom<Count>({
//     key: "countState",
//     default: 0,
// });

const countState = atom<number>({
    key: "countState",
    default: 0,
});

/**
 * import 깔끔하게 하기 위해서 만든 커스텀 hook
 */
function useCountState() {
    const [count, setCount] = useRecoilState(countState);
    return { count, setCount };
}

export { useCountState };
