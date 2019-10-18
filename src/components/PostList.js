import React from "react";
import Post from "./Post";
import Wrapper from "../components/common/Wrapper";
import styled from "styled-components";

const PostList = ({ list, scrapArr, savePostHandler, deletePostHandler }) => {
  // list를 각각 Post 컴포넌트로 랜더링합니다.
  const postList = list.map(post => {
    return (
      <Post
        key={post.id || post.postId}
        id={post.id || post.postId}
        userImg={post.profile_image_url || post.userImg}
        userName={post.nickname || post.userName}
        img={post.image_url || post.img}
        desc={post.description}
        scrapArr={scrapArr}
        savePostHandler={savePostHandler}
        deletePostHandler={deletePostHandler}
      />
    );
  });
  return (
    <Wrapper>
      <PostListBox>{postList}</PostListBox>
    </Wrapper>
  );
};

const PostListBox = styled.main`
  padding-top: 68px;
  padding-bottom: 68px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export default PostList;
