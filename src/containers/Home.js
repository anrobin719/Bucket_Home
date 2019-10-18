import React, { Component } from "react";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/Header";
import ContentsContainer from "../containers/ContentsContainer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <ContentsContainer />
        </Wrapper>
      </>
    );
  }
}

export default Home;
