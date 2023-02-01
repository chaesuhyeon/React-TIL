import React from "react";
import styled from "styled-components";

function CategoryButtonItem() {
  return (
    <CategoryButton>
      <CategoryImg
        src={
          "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg"
        }
      />
      <div>한옥</div>
    </CategoryButton>
  );
}

export default CategoryButtonItem;

const CategoryButton = styled.button`
  width: 64px;
  height: 64px;
  margin: 20px 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  color: #717171;
`;

const CategoryImg = styled.img`
  width: 24px;
  height: 24px;
  filter: invert(46%) sepia(0%) saturate(46%) hue-rotate(179deg) brightness(97%)
    contrast(97%);
`;
