import React from "react";
import Post from "./Post";

import styled from "styled-components";

const Contents = ({ list, scrapArr, savePostHandler, deletePostHandler }) => {
  // list를 각각 Post 컴포넌트로 랜더링합니다.
  const postList = list.map(post => {
    return (
      <Post
        key={post.id}
        id={post.id}
        userImg={post.profile_image_url}
        userName={post.nickname}
        img={post.image_url}
        scrapArr={scrapArr}
        savePostHandler={savePostHandler}
        deletePostHandler={deletePostHandler}
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
