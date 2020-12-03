import React, { useState } from "react";
import { Table } from "antd";
import { postsData } from "../../dummyData/posts";
import CreateNewPost from "../subComponents/CreateNewPost";
import Header1 from "../common/Header1";
import Button1 from "../common/Button1";


const Posts = () => {
  const [postEditor, setPostEditor] = useState(false);

  const isOdd = (num) => {
    return num % 2 ? true : false;
  };

  const paginationStylesRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <div className={"pagination-style-previous"}><div><img src={require("../../assets/SVG/arrow-left.svg")}/><img src={require("../../assets/SVG/arrow-left.svg")} /></div><p>Previous</p></div>;
    }
    if (type === 'next') {
      return <div className={"pagination-style-next"}><p>Next</p><div><img src={require("../../assets/SVG/arrow-right.svg")} /><img src={require("../../assets/SVG/arrow-right.svg")} /></div></div>;
    }
    return originalElement;
  }

  const columns = [
    {
      title: "Article Title",
      dataIndex: "articleTitle",
      width: "20vw",
      className: "article",
      key: "articleTitle",
    },
    {
      title: "",
      width: "4vw",
    },

    {
      title: "Author",
      dataIndex: "author",
      width: "10vw",
      key: "author",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "10vw",
      key: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "10vw",
      key: "status",
    },
    {
      title: "Publish Date",
      dataIndex: "publishDate",
      width: "10vw",
      key: "publishDate",
    },
    {
      title: "",
      dataIndex: "category",
      width: "12vw",
      key: "category",
      render: (value, record, index) => (
        <div>
          {" "}
          {isOdd(index) ? (
            <div className={"row-buttons"}>
              <p>Edit Post</p>
              <p>
                <img src={require("../../assets/SVG/delete.svg")} alt={""} />
              </p>
            </div>
          ) : (
            <div className={"row-buttons"}>
              <p>Edit Post</p>
              <p>
                <img src={require("../../assets/SVG/delete.svg")} alt={""} />{" "}
                <span
                  style={{
                    position: "absolute",
                    height: "10vh",
                    backgroundColor: "#f1f1f1",
                    width: "0.6vw",
                    left: "12.5vw",
                    top: "0vh",
                  }}
                />
              </p>
            </div>
          )}
        </div>
      ),
    },
  ];

  const switchCreateNewPostScreen = () => {
    setPostEditor(true);
  };

    const pagination = {
      itemRender: paginationStylesRender
    };

  return (
    <div className={"general-table-view"}>
      {postEditor ? (
        <CreateNewPost type={'post'} />
      ) : (
        <div className={"posts"}>
          <div className={"create-post"}>
            <Header1 title={"All Posts"} />
            <Button1 title={"Create New Post"} handleOnClick={switchCreateNewPostScreen} />
          </div>
          <div className={"post-list-types"}>
            <p style={{ fontWeight: "bold" }}>{"All Posts(315)"}</p>
            <p style={{ fontWeight: "bold" }}>{"|"}</p>
            <p>{"Published(285)"}</p>
            <p>{"|"}</p>
            <p>{"Drafts(15)"}</p>
            <p>{"|"}</p>
            <p>{"Trash(9)"}</p>
          </div>
          <div className={"post-table"}>
            <Table
              rowClassName={(record, index) => {
                return !isOdd(index) ? "coloredRow" : "";
              }}
              //   pagination={{ position: [this.state.top, this.state.bottom] }}
              className="time-table-row-select"
              dataSource={postsData().dataSource}
              columns={columns}
              pagination={pagination}            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
