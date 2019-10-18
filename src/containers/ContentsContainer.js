import React, { Component } from "react";
import Contents from "../components/Contents";
import axios from "axios";

class ContentsContainer extends Component {
  state = {
    list: []
  };
  componentDidMount() {
    const url =
      "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_1.json";
    axios
      .get(url)
      .then(res => {
        console.log("FETCH LIST ARRAY SUCCESS", res.data);
        this.setState({
          list: res.data
        });
      })
      .catch(err => {
        console.log("FETCH LIST ERROR", err);
      });
  }

  render() {
    const { list } = this.state;
    return <Contents list={list} />;
  }
}

export default ContentsContainer;
