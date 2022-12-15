import Input from "@/components/form/Input";
import { ChangeEvent, useEffect, useState } from "react";
import Counter from "@/components/Counter";
import Timer from "./components/Timer";
import Calculator from "./components/Calculator";

/**
 * @description 루트 컴포넌트
 */
function App() {
    //state
    const [value, setValue] = useState<string>("");

    //event
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <>
            {/* <Input type={"text"} value={value} onChange={onChange} /> */}
            {/* <Counter /> */}
            {/* <Timer /> */}
            <Calculator />
        </>
    );
}

export default App;
