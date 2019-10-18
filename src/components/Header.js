import React from "react";
import styled from "styled-components";

import Wrapper from "./common/Wrapper";
import { ReactComponent as CheckBox } from "../assets/images/white.svg";
import { ReactComponent as CheckBoxOn } from "../assets/images/bt-checkbox-checked.svg";

const Header = ({ isMyList, toggleHandler }) => {
  return (
    <HeaderBox>
      <Wrapper>
        <div onClick={toggleHandler}>
          {isMyList ? <CheckBoxOn /> : <CheckBox />}
        </div>
        <p>스크랩한 것만 보기</p>
      </Wrapper>
    </HeaderBox>
  );
};

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
      height: 24px;
      cursor: pointer;
    }
    p {
      margin-left: 8px;
    }
  }
`;

export default Header;
