import React from "react";
import styled from "styled-components";

import Category from "../layout/Category";
import Header from "../layout/Header";

function Home() {
    return (
        <>
            <Header />
            <hr />
            <Category />
        </>
    );
}

export default Home;

const Wrap = styled.div`
    display: block;
    width: 1512px;
    margin: auto;
`;
