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

function useCountState() {
    const [count, setCount] = useRecoilState(countState);
    return { count, setCount };
}

export { useCountState };
