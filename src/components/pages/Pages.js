import React, { useState } from "react";
import { Table } from "antd";
import { pagesData } from "../../dummyData/pages";
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
      return <div className={"pagination-style-previous"}><div><img src={require("../../assets/SVG/arrow-left.svg")}/><img src={require("../../assets/SVG/arrow-left.svg")} /></div><p>Prev Page</p></div>;
    }
    if (type === 'next') {
      return <div className={"pagination-style-next"}><p>Next Page</p><div><img src={require("../../assets/SVG/arrow-right.svg")} /><img src={require("../../assets/SVG/arrow-right.svg")} /></div></div>;
    }
    return originalElement;
  }

  const columns = [
    {
      title: "Page Title",
      dataIndex: "pageTitle",
      width: "15vw",
      className: "pageTitle",
      key: "pageTitle",
    },

    {
      title: "Created By",
      dataIndex: "createdBy",
      width: "10vw",
      key: "createdBy",
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
      width: "16vw",
      key: "publishDate",
    },
    {
      title: "",
      dataIndex: "pageTitle",
      width: "12vw",
      key: "pageTitle",
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
                    left: "15.5vw",
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
    // setPostEditor(true);
  };

    const pagination = {
      itemRender: paginationStylesRender
    };

  return (
    <div className={"general-table-view"}>
      {postEditor ? (
        <CreateNewPost type={"post"} />
      ) : (
        <div className={"posts"}>
          <div className={"create-post"}>
            <Header1 title={"All Pages"} />
            <Button1 title={"Create New Page"} handleOnClick={switchCreateNewPostScreen} />
          </div>
          <div className={"post-list-types"}>
            <p style={{ fontWeight: "bold" }}>{"All Pages(315)"}</p>
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
              dataSource={pagesData().dataSource}
              columns={columns}
              pagination={pagination}            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
