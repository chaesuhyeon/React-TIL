import styled from "styled-components";
import { useState, ChangeEvent, MouseEvent } from "react";
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;
const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;
    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;
const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;
const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;
const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;
/**
 * @description Calculator 컴포넌트
 */
function Calculator() {
    // state
    const [value, setValue] = useState<string>("0");
    const [hasOp, setHasOp] = useState<boolean>(false);
    const [hasPoint, setHasPoint] = useState<boolean>(true);

    //event
    const onClick = (num: string) => {
        if (value.length === 1 && value === "0") {
            setValue("");
        }
        setValue((prevState) => prevState + num);

        if (hasPoint) {
            setHasPoint(true);
        }
        setHasOp(true);
    };

    const onClickAC = () => {
        setValue("0");
    };

    const onClickDel = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
        if (value.length === 1) {
            setValue("0");
        }
    };

    const onClickOper = (op: string) => {
        if (hasOp) {
            setValue((prevState) => prevState + op);
            setHasOp(false);
        }
    };

    const onClickResult = () => {
        setValue(eval(value));
    };

    const onClickPoint = (point: string) => {
        if (hasPoint) {
            setValue((prevState) => prevState + point);
            setHasPoint(false);
        }
    };

    return (
        <>
            <h1>Calculator</h1>
            <hr />
            <MainContainer>
                <InputBar value={value} />
                <ButtonContainer>
                    <Button onClick={onClickAC}>AC</Button>
                    <Button onClick={onClickDel}>DEL</Button>
                    <CalButton>%</CalButton>
                    <CalButton onClick={() => onClickOper("/")}>÷</CalButton>
                    <Button onClick={() => onClick("7")}>7</Button>
                    <Button onClick={() => onClick("8")}>8</Button>
                    <Button onClick={() => onClick("9")}>9</Button>
                    <CalButton onClick={() => onClickOper("*")}>×</CalButton>
                    <Button onClick={() => onClick("4")}>4</Button>
                    <Button onClick={() => onClick("5")}>5</Button>
                    <Button onClick={() => onClick("6")}>6</Button>
                    <CalButton onClick={() => onClickOper("-")}>-</CalButton>
                    <Button onClick={() => onClick("1")}>1</Button>
                    <Button onClick={() => onClick("2")}>2</Button>
                    <Button onClick={() => onClick("3")}>3</Button>
                    <CalButton onClick={() => onClickOper("+")}>+</CalButton>
                    <ZeroButton onClick={() => onClick("0")}>0</ZeroButton>
                    <Button onClick={() => onClickPoint(".")}>.</Button>
                    <CalButton onClick={onClickResult}>=</CalButton>
                </ButtonContainer>
            </MainContainer>
        </>
    );
}
export default Calculator;
