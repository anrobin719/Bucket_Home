import React from "react";
import Wrapper from "./common/Wrapper";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <Wrapper>
        <div>
          <img src="" alt="check icon" />
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
  //   wrapper 안쪽 체크박스와 텍스트 스타일 설정
  > div {
    display: flex;
    align-items: center;
    outline: 1px solid red;
  }
`;

export default Header;
