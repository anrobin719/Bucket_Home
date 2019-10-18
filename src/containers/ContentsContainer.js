import React, { Component } from "react";
import Contents from "../components/Contents";
// import updateObject from '../lib/utility/updateObject';
import axios from "axios";

class ContentsContainer extends Component {
  state = {
    list: [],
    loadCount: 1,
    loading: true
  };

  // 페이지의 아랫부분까지 스크롤이 내려가면, 리스트 로드 이벤트를 실행합니다.
  componentDidMount() {
    this.loadHandler();

    console.log(window.innerHeight);
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY + 68 >=
        document.body.offsetHeight
      ) {
        this.loadHandler();
      }
    });
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

  render() {
    const { list } = this.state;
    return (
      <>
        <div
          ref="myscroll"
          style={{
            height: "auto",
            overflow: "auto",
            outline: "1px solid red"
          }}
        >
          <Contents list={list} />
        </div>
      </>
    );
  }
}

export default ContentsContainer;
