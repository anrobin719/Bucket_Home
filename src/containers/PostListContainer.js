import React, { Component } from "react";
import axios from "axios";

import PostList from "../components/PostList";

class PostListContainer extends Component {
  state = {
    loading: false,
    loadCount: 1,
    list: [],
    scrapArr: []
  };

  componentDidMount() {
    const { loading } = this.state;
    const { isMyList } = this.props;

    // localStorage에서 스크랩한 리스트를 가져옵니다.
    const list = JSON.parse(localStorage.getItem("scrapList"));
    if (list) {
      this.setState({ scrapArr: list });
    }

    // '스크랩한 것만 보기' 체크가 되어있지 않을 때만, 일반 리스트를 가져옵니다.
    if (!isMyList) {
      this.loadHandler();
      // 페이지의 아랫부분까지 스크롤이 내려가고 && 로딩 상태가 아니라면, 리스트 로드 이벤트를 실행합니다.
      window.addEventListener("scroll", () => {
        if (
          window.innerHeight + window.scrollY + 1 >=
            document.body.offsetHeight &&
          !loading
        ) {
          this.setState({ loading: true });
          this.loadHandler();
        }
      });
    }
  }

  // 이전 prop과 현재 prop이 다를 경우 - '스크랩한 것만 보기' 체크 상태 변경 시 실행됩니다.
  componentDidUpdate(prevProps) {
    const { isMyList } = this.props;
    if (prevProps.isMyList !== isMyList) {
      if (!isMyList) {
        this.loadHandler();
      }
    }
  }

  // 일반 리스트 로드 - 로드 할 때마다 카운트를 추가합니다.
  loadHandler() {
    const { loadCount } = this.state;
    // 6은 빈 배열, 7부터는 오류가 발생되기에 로드를 중단합니다.
    if (loadCount <= 6) {
      const url = `https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_${loadCount}.json`;
      axios
        .get(url)
        .then(res => {
          console.log(`FETCH LIST ARRAY SUCCESS ${loadCount}`, res.data);
          this.setState(prevState => {
            return {
              list: prevState.list.concat(res.data),
              loadCount: prevState.loadCount + 1,
              loading: false
            };
          });
        })
        .catch(err => {
          console.log(`FETCH LIST ERROR ${loadCount}`, err);
        });
    } else {
      console.log(`FETCHED ALL LIST`);
    }
  }

  // 스크랩 - 기존 스크랩 리스트에 추가해 업데이트 합니다.
  savePostHandler = postInfo => {
    const { scrapArr } = this.state;
    this.setState({
      scrapArr: scrapArr.concat(postInfo)
    });
    this.persistData(scrapArr.concat(postInfo));
  };

  // 스크랩 취소 - 기존 스크랩 리스트에서 제외한 뒤 업데이트 합니다.
  deletePostHandler = id => {
    const { scrapArr } = this.state;
    const newArr = scrapArr.slice();
    const index = newArr.findIndex(p => p.postId === id);
    newArr.splice(index, 1);
    this.setState({
      scrapArr: newArr
    });
    this.persistData(newArr);
  };

  // 스크랩 리스트를 localStorage에 저장합니다.
  persistData = newArr => {
    localStorage.setItem("scrapList", JSON.stringify(newArr));
  };

  render() {
    const { list, scrapArr } = this.state;
    const { isMyList } = this.props;
    return (
      <PostList
        // '스크랩한 것만 보기' 체크 상태에 따라 다른 리스트를 전달합니다.
        list={!isMyList ? list : scrapArr}
        scrapArr={scrapArr}
        savePostHandler={this.savePostHandler}
        deletePostHandler={this.deletePostHandler}
      />
    );
  }
}

export default PostListContainer;
