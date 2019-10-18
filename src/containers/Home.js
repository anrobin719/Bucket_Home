import React, { Component } from "react";

import Header from "../components/Header";
import PostListContainer from "../containers/PostListContainer";

class Home extends Component {
  state = {
    // '스크랩한 것만 보기' 체크 상태를 나타냅니다.
    isMyList: false
  };

  // 체크시 실행되는 토글 핸들러 입니다.
  toggleHandler = () => {
    this.setState(prevState => {
      return { isMyList: !prevState.isMyList };
    });
  };

  render() {
    const { isMyList } = this.state;
    return (
      <>
        <Header toggleHandler={this.toggleHandler} isMyList={isMyList} />
        <PostListContainer isMyList={isMyList} />
      </>
    );
  }
}

export default Home;
