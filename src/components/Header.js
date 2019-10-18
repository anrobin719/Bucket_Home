import React from "react";
import styled from "styled-components";

import Wrapper from "./common/Wrapper";
import { ReactComponent as CheckBox } from "../assets/images/white.svg";
// import { ReactComponent as CheckBox_on } from "../assets/images/bt-checkbox-checked.svg";

const Header = () => {
  return (
    <HeaderBox>
      <Wrapper>
        <CheckBox />
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
  background: white;
  //   wrapper 안쪽 체크박스와 텍스트 스타일 설정
  > div {
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
    }
  }
`;

export default Header;
