import React from "react";
import styled from "styled-components";
import CategoryButtonItem from "../components/CategoryButtonItem";

function Category() {
  return (
    <WrapCategory>
      <CategoryItem>
        <Button width={"28px"} height={"28px"} color={"black"} radius={"30px"}>
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
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <CategoryButtonItem />
        <Button width={"28px"} height={"28px"} radius={"30px"}>
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
        <Button width={"80px"} height={"48px"} margin={"20px"} radius={"15px"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
  width: 1512px;
  height: 98px;
`;

const CategoryItem = styled.div`
  display: flex;
  width: 100%;
  height: 78px;
  align-items: center;
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
  aria-hidden = true
`;
