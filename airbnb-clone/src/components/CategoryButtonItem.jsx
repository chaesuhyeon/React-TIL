import React from "react";
import styled from "styled-components";

function CategoryButtonItem({ src, text }) {
    return (
        <CategoryButton>
            <CategoryImg src={src} />
            <div>{text}</div>
        </CategoryButton>
    );
}

export default CategoryButtonItem;

const CategoryButton = styled.button`
    width: 64px;
    height: 64px;
    border: none;
    background-color: white;
    cursor: pointer;
    color: #717171;
`;

const CategoryImg = styled.img`
    width: 24px;
    height: 24px;
    filter: invert(46%) sepia(0%) saturate(46%) hue-rotate(179deg)
        brightness(97%) contrast(97%);
`;
