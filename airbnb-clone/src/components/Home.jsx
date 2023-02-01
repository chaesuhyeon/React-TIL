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
      <Category />
      <Body />
    </>
  );
}

export default Home;

const Wrap = styled.div`
  display: block;
  width: 1512px;
  margin: auto;
`;
