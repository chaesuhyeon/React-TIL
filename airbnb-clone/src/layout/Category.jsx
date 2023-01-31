import React from "react";
import styled from "styled-components";
import CategoryButtonItem from "../components/CategoryButtonItem";

function Category() {
    return (
        <WrapCategory>
            <CategoryItem>
                <CategoryButtonItem />
                <CategoryButtonItem />
                <CategoryButtonItem />
                <CategoryButtonItem />
                <CategoryButtonItem />
                <CategoryButtonItem />
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
