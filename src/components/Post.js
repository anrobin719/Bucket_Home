import React, { Component } from "react";
import styled from "styled-components";

import { ReactComponent as ScrapBtn } from "../assets/images/on-img.svg";
import { ReactComponent as ScrapBtnOn } from "../assets/images/blue.svg";

class Post extends Component {
  state = {
    // 스크랩 버튼 active 상태를 설정합니다.
    isActive: false
  };

  // 페이지 로드시 스크랩 목록을 확인합니다.
  componentDidMount() {
    const { id, scrapArr } = this.props;
    let active;
    // 스크랩 목록의 아이디와 포스트의 아이디가 일치하면 isActive: true로 설정합니다.
    active = scrapArr.find(sp => {
      return sp.postId === id;
    });
    if (active) {
      this.setState({ isActive: true });
    }
  }

  // 스크랩 버튼 클릭 시 실행되는 핸들러입니다.
  toggleHandler = (postId, userImg, userName, img) => {
    const { isActive } = this.state;
    // active 상태에 따라 버튼 이미지를 토글합니다.
    this.setState(prevState => {
      return { isActive: !prevState.isActive };
    });
    // active 상태에 따라, 스크랩 리스트에 추가하거나 제거합니다.
    if (!isActive) {
      const postInfo = { postId, userImg, userName, img };
      this.props.savePostHandler(postInfo);
    } else {
      this.props.deletePostHandler(postId);
    }
  };

  render() {
    const { isActive } = this.state;
    const { id, userImg, userName, img } = this.props;
    return (
      <PostCard>
        <UserInfoBox>
          <img src={userImg} alt={userName} />
          <p>{userName}</p>
        </UserInfoBox>
        <ImgBox>
          <img src={img} alt="home interior" />
          <div onClick={() => this.toggleHandler(id, userImg, userName, img)}>
            {isActive ? <ScrapBtnOn /> : <ScrapBtn />}
          </div>
        </ImgBox>
      </PostCard>
    );
  }
}

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
  position: relative;
  img {
    width: 268.9px;
    height: 268.9px;
    border-radius: 10px;
  }
  div {
    cursor: pointer;

    svg {
      position: absolute;
      right: 1rem;
      bottom: 1.2rem;
    }
  }
`;

export default Post;
