import React from "react";
import styled from "styled-components";

const Post = ({ userImg, userName, img }) => {
  return (
    <PostCard>
      <UserInfoBox>
        <img src={userImg} alt={userName} />
        <p>{userName}</p>
      </UserInfoBox>
      <ImgBox>
        <img src={img} alt="home interior" />
      </ImgBox>
    </PostCard>
  );
};

const PostCard = styled.article`
  margin-bottom: 20px;
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  p {
    font-size: 18px;
    padding-left: 8px;
  }
`;
const ImgBox = styled.div`
  img {
    width: 268.9px;
    height: 268.9px;
    border-radius: 10px;
  }
`;

export default Post;
