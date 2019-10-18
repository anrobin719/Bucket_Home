import React, { Component } from "react";
import Contents from "../components/Contents";
// import updateObject from '../lib/utility/updateObject';
import axios from "axios";

class ContentsContainer extends Component {
  state = {
    loading: true,
    loadCount: 1,
    list: [],
    scrapArr: []
  };

  componentDidMount() {
    // 페이지의 아랫부분까지 스크롤이 내려가면, 리스트 로드 이벤트를 실행합니다.
    this.loadHandler();
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY + 68 >=
        document.body.offsetHeight
      ) {
        this.loadHandler();
      }
    });

    // localStorage에서 스크랩한 리스트를 가져옵니다.
    const list = JSON.parse(localStorage.getItem("scrapList"));
    if (list) {
      this.setState({ scrapArr: list });
    }
  }

  // [리스트 로드 이벤트] - 로드 할 때마다 카운트를 추가합니다.
  loadHandler() {
    this.setState({ loading: true });
    const { loadCount } = this.state;
    const url = `https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_${loadCount}.json`;
    axios
      .get(url)
      .then(res => {
        console.log(`FETCH LIST ARRAY SUCCESS ${loadCount}`, res.data);
        // setTimeout(() => {
        this.setState(prevState => {
          return {
            list: prevState.list.concat(res.data),
            loadCount: prevState.loadCount + 1,
            loadign: false
          };
        });
        // }, 1000);
      })
      .catch(err => {
        console.log(`FETCH LIST ERROR ${loadCount}`, err);
      });
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
    return (
      <Contents
        list={list}
        scrapArr={scrapArr}
        savePostHandler={this.savePostHandler}
        deletePostHandler={this.deletePostHandler}
      />
    );
  }
}

export default ContentsContainer;
