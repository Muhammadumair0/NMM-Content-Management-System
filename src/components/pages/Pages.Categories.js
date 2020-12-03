import React, { useState } from "react";
import { Table } from "antd";
import { categoriesData } from "../../dummyData/categories";
import CreateNewPageCategory from "../subComponents/CreateNewPageCategory";
import Header1 from "../common/Header1";
import Button1 from "../common/Button1";


const PagesCategories = () => {
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
      title: "Category",
      dataIndex: "category",
      width: "10vw",
      className: "article",
      key: "category",
    },
    {
      title: "URL",
      dataIndex: "url",
      width: "10vw",
      key: "url",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "20vw",
      key: "description",
    },
    {
      title: "",
      dataIndex: "",
      width: "4vw",
      key: "",
    },,
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      width: "10vw",
      key: "dateCreated",
    },
    {
      title: "",
      dataIndex: "category",
      width: "10vw",
      key: "category",
      render: (value, record, index) => (
        <div>
          {" "}
          {isOdd(index) ? (
            <div className={"row-buttons"}>
              <p style={{ width: '4vw', color: 'rgba(0, 0, 0, 0.3)' }}>Edit</p>
              <p>
                <img src={require("../../assets/SVG/delete.svg")} alt={""} />
              </p>
            </div>
          ) : (
            <div className={"row-buttons"}>
              <p style={{ width: '4vw', color: 'rgba(0, 0, 0, 0.3)' }}>Edit</p>
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
    setPostEditor(!postEditor);
  };

    const pagination = {
      itemRender: paginationStylesRender
    };

  return (
    <div className={"general-table-view"}>
      {postEditor ? (
        <CreateNewPageCategory backToCategories={switchCreateNewPostScreen} />
      ) : (
        <div className={"posts"}>
          <div className={"create-post"}>
            <Header1 title={"Pages · Categories"} />
            <Button1 title={"Create New Category"} handleOnClick={switchCreateNewPostScreen} />
          </div>
          <div className={"post-table"}>
            <Table
              rowClassName={(record, index) => {
                return !isOdd(index) ? "coloredRow" : "";
              }}
              //   pagination={{ position: [this.state.top, this.state.bottom] }}
              className="time-table-row-select"
              dataSource={categoriesData().dataSource}
              columns={columns}
              pagination={pagination}            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesCategories;
