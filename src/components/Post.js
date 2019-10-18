import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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
    const { id, userImg, userName, img, desc } = this.props;
    return (
      <PostCard>
        <UserInfoBox>
          <img src={userImg} alt={userName} />
          <p>{userName}</p>
        </UserInfoBox>
        <ImgBox desc={desc} isActive={isActive}>
          <div>
            <img src={img} alt="home interior" />
          </div>
          <span onClick={() => this.toggleHandler(id, userImg, userName, img)}>
            <ScrapBtnOn />
            <ScrapBtn />
          </span>
        </ImgBox>
      </PostCard>
    );
  }
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 32px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
`;

const active = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.4);
  }
  50% {
    opacity: 0;
    transform: scale(1.8);
  }
  100% {
    opacity: 1;
    transform: scale(1.4);
  }
`;
const sizeUp = keyframes`
  0% {
    transform: scale(1.4);
  }
  50% {
    transform: scale(1.8);
  }
  100% {
    transform: scale(1.4);
  }
`;

const PostCard = styled.article`
  position: relative;
  top: 0;
  opacity: 1;
  animation: ${fadeIn} 0.8s linear;
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
  div {
    width: 100%;
    height: 268.9px;
    border-radius: 10px;
    overflow: hidden;
    opacity: 1;
    transition: all .5s ease-in;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      &::before {
        opacity: 1;
        content: "${props =>
          props.desc
            ? props.desc
            : "가구 고르는 게 쉽지 않다는 걸 혼수 준비하면서 처음 알았어요. 그렇게 발품 팔아 돌고 돌아 내 눈에 이쁘고, 내 몸에 편안한 가구를 찾았어요."}";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        top: 0;
        z-index: 9;
        box-sizing: border-box;
        padding: 1rem;
        color: white;
        background: rgba(0, 0, 0, 0.4);
        transition: all .5s ease-in;
      }
    }
    
  }
  span {
    cursor: pointer;

    svg {
      position: absolute;
      z-index: 99;
      right: 1rem;
      bottom: 1.2rem;
      transform: scale(1.4);

      &:first-child {
        opacity: 0;
        animation: ${props => props.isActive && active} 0.2s linear
            forwards;
      }
      &:nth-child(2) {
        animation: ${props => props.isActive && sizeUp} 0.2s linear
            forwards;
      }
    }
  }
`;

export default Post;
