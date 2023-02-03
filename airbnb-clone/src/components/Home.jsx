import React from "react";
import styled from "styled-components";
import Body from "../layout/Body";

import Category from "../layout/Category";
import Header from "../layout/Header";

function Home() {
  return (
    <>
      <Header />
      <hr />
      <Wrap>
        <Category />
        <Body />
      </Wrap>
    </>
  );
}

export default Home;

const Wrap = styled.div`
  margin-left: 10px;
`;
