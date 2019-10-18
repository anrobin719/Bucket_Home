import React from "react";
import styled, { keyframes } from "styled-components";

import Wrapper from "./common/Wrapper";
import { ReactComponent as CheckBox } from "../assets/images/white.svg";
import { ReactComponent as CheckBoxOn } from "../assets/images/bt-checkbox-checked.svg";

const Header = ({ isMyList, toggleHandler }) => {
  return (
    <HeaderBox isMyList={isMyList}>
      <Wrapper>
        <div onClick={toggleHandler}>
          <CheckBoxOn />
          <CheckBox />
        </div>
        <p>스크랩한 것만 보기</p>
      </Wrapper>
    </HeaderBox>
  );
};

const active = keyframes`
  0% {
    opacity: 0;
    scale(0.5, 0.5);
  }
  100% {
    opacity: 1;
    scale(0.5, 0.5);
  }
`;

const HeaderBox = styled.header`
  width: 100vw;
  height: 68px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  //   wrapper 안쪽 체크박스와 텍스트 스타일 설정
  > div {
    display: flex;
    align-items: center;
    div {
      position: relative;
      height: 24px;
      cursor: pointer;
      svg {
        &:first-child {
          position: absolute;
          left: 0;
          opacity: 0;
          animation: ${props => props.isMyList && active} 0.1s linear forwards;
        }
      }
    }
    p {
      margin-left: 8px;
    }
  }
`;

export default Header;
