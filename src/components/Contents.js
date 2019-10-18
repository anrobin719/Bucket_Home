import React from "react";
import Post from "./Post";

import styled from "styled-components";

const Contents = ({ list }) => {
  const postList = list.map(post => {
    return (
      <Post
        key={post.id}
        userImg={post.profile_image_url}
        userName={post.nickname}
        img={post.image_url}
      />
    );
  });

  return <ContentsBox>{postList}</ContentsBox>;
};

const ContentsBox = styled.main`
  margin-top: 68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

export default Contents;
