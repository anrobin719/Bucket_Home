import React from "react";
import Post from "./Post";

import styled from "styled-components";

const Contents = ({ list }) => {
  const pics = list.map(pic => {
    return <Post userImg={pic.userImg} userName={pic.userName} img={pic.img} />;
  });

  return <ContentsBox>{pics}</ContentsBox>;
};

const ContentsBox = styled.main`
  margin-top: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

export default Contents;
