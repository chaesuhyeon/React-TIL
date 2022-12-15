import { ChangeEventHandler } from "react";

// type InputValue = string | number | undefined;
type Props = {
    type: string;
    value: string | number | undefined;
    onChange: ChangeEventHandler;
};

/**
 * @description Input 컴포넌트
 */
function Input({ type, value, onChange }: Props) {
    return <input type={type} value={value} onChange={onChange} />;
}

export default Input;
