import React, { useRef, useState } from "react";
import styled from "styled-components";
import CategoryButtonItem from "../components/CategoryButtonItem";

const arr = Array.from({ length: 30 });

function Category() {
    const [moveIndex, setMoveIndex] = useState(0);
    const ref = useRef(null);

    const leftMove = () => {
        console.log("left");
        if (moveIndex === 0) {
            return;
        }

        ref.current.scrollTo({
            top: 0,
            left: moveIndex - 120,
            behavior: "smooth",
        });
        setMoveIndex((prev) => prev - 120);
    };

    const rightMove = () => {
        ref.current.scrollTo({
            top: 0,
            left: moveIndex + 120,
            behavior: "smooth",
        });
        setMoveIndex((prev) => prev + 120);
    };

    return (
        <WrapCategory>
            <CategoryItem>
                <Button
                    width={"28px"}
                    height={"28px"}
                    color={"black"}
                    radius={"30px"}
                    idx={2}
                    onClick={leftMove}
                >
                    <Icon
                        width={"12px"}
                        height={"12px"}
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        fill={"none"}
                        strokeW={"5.33333"}
                    >
                        <g fill="none">
                            <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                        </g>
                    </Icon>
                </Button>
                <CategoryItemWrap ref={ref}>
                    <CategoryButtonItem
                        src={
                            "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                        }
                        text={"인기 급상승"}
                    />
                    {arr.map((i, idx) => (
                        <CategoryButtonItem
                            key={idx.toString()}
                            src={
                                "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg"
                            }
                            text={"한옥"}
                        />
                    ))}
                    <CategoryButtonItem
                        src={
                            "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                        }
                        text={"인기 급상승"}
                    />
                </CategoryItemWrap>
                <Button
                    width={"28px"}
                    height={"28px"}
                    radius={"30px"}
                    onClick={rightMove}
                >
                    <Icon
                        width={"12px"}
                        height={"12px"}
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        fill={"none"}
                        strokeW={"5.33333"}
                    >
                        <g fill="none">
                            <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
                        </g>
                    </Icon>
                </Button>
                <Button
                    width={"80px"}
                    height={"48px"}
                    margin={"20px"}
                    radius={"15px"}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40px",
                        }}
                    >
                        <Icon
                            fill={"currentColor"}
                            width={"14px"}
                            height={"14px"}
                            role="presentation"
                            focusable="false"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </Icon>
                        필터
                    </div>
                </Button>
            </CategoryItem>
        </WrapCategory>
    );
}

export default Category;

const WrapCategory = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 98px;
`;

const CategoryItem = styled.div`
    display: flex;
    width: 100%;
    height: 78px;
    align-items: center;
    overflow: hidden;
`;

const CategoryItemWrap = styled.div`
    display: grid;
    grid-auto-flow: column;
    overflow-x: scroll;
    white-space: nowrap;
    gap: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Button = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.radius};
    background-color: white;
    border: 1px solid #dddddd;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: ${(props) => props.idx};
`;

const Icon = styled.svg`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: block;
    color: ${(props) => props.color};
    fill: ${(props) => props.fill};
    stroke: currentcolor;
    stroke-width: ${(props) => props.strokeW};
    overflow: visible;
`;
