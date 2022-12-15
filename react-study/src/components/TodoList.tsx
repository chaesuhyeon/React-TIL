import { useState, ChangeEvent, FormEvent } from "react";

type ToDo = {
    done: boolean;
    task: string;
};

/**
 * @description 투두 리스트 컴포넌트
 */
function TodoList() {
    //state
    const [content, setContent] = useState<string>("");
    const [list, setList] = useState<ToDo[]>([]);

    //event
    const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setContent(value);
    };

    const onAdd = () => {
        if (content.length < 1) {
            alert("값을 입력해주세요");
        } else {
            setList((prevState) => [
                ...prevState,
                { done: false, task: content },
            ]); // js에서 배열에 값을 추가하는 방법 1. list.concat(new data) 2. spread 연산자
            setContent("");
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onDelete = (index: number) => {
        setList((prevStat) => {
            const updateList = prevStat.filter((item, i) => i !== index);
            return updateList;
        });
    };

    const onCheck = (idx: number) => {
        setList((prevStat) => {
            const updateList = prevStat.map((item, i) =>
                i === idx ? { ...item, done: !item.done } : item
            );
            return updateList;
        });
    };
    return (
        <div>
            <h1>TodoList</h1>
            <hr />

            <form onSubmit={onSubmit}>
                <div>
                    <input value={content} onChange={onChangeContent} />
                    <button onClick={onAdd}>ADD</button>
                    <button onClick={onAdd}>DELETE</button>
                </div>
            </form>
            <hr />
            <ul>
                {list.map(({ done, task }, idx) => (
                    <li key={idx}>
                        <div>
                            <input
                                type="checkbox"
                                checked={done}
                                onChange={() => onCheck(idx)}
                            />
                            <input value={task} disabled />
                            <button onClick={() => onDelete(idx)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
