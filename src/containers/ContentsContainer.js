import React, { Component } from "react";
import Contents from "../components/Contents";

class ContentsContainer extends Component {
  render() {
    const testList = [
      {
        userImg:
          "https://calibershoes.com/Modules/eCommerce/images/default-img.png",
        userName: "Lela Thomas",
        img:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      },
      {
        userImg:
          "https://calibershoes.com/Modules/eCommerce/images/default-img.png",
        userName: "Lela Thomas",
        img:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      },
      {
        userImg:
          "https://calibershoes.com/Modules/eCommerce/images/default-img.png",
        userName: "Lela Thomas",
        img:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      },
      {
        userImg:
          "https://calibershoes.com/Modules/eCommerce/images/default-img.png",
        userName: "Lela Thomas",
        img:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      }
    ];
    return <Contents list={testList} />;
  }
}

export default ContentsContainer;
