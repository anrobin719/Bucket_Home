import React from "react";
import styled from "styled-components";

const Wrapper = ({ children, ...rest }) => {
  return <WrapperBlock {...rest}>{children}</WrapperBlock>;
};

const WrapperBlock = styled.div`
  width: 1156px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

export default Wrapper;
